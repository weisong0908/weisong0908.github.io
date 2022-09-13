---
title: Authentication and Authorisation with Auth0 and .NET 6
summary: How to protect .NET 6 API resources by implementing access control using Auth0
publishDate: 2022-07-31 18:00:00+08:00
draft: false
tags: [.NET, Auth0, Authentication, Authorisation]
ep: 2
---

For web applications built with .NET, the default choice for authentication and authorisation that comes to our minds would be Identity Server which will be deprecated after November 2022. An alternative is to make use of established SAAS like Auth0. This saves us a lot of time and effort from security patching and maintenance.

# Getting Started

After signing up an account with Auth0 and created a tenant, we have to first create a client application on the dashboard. It represents the client or user agent (for example a React.js frontend application). Next we have to create an API on the dashboard as well. This will represent the .NET 6 resources. The RBAC has to be enabled and permissions have to be added to the token.

# Authentication

Since we will be using the authorisation code flow, the first thing we need is to redirect the user to the Auth0 login page. The URL is usually

```
https://{{domain}}/authorize?audience={{the API identifier}}&scope=openid&response_type=code&client_id=s{{Client ID}}&redirect_uri={{Callback URL}}
```

After successful sign in (or sign up), Auth0 will redirect the user back to the callback page. At this step the callback page can execute another API call to get the access token for subsequent API calls to the resources:

``` bash
curl --location --request POST 'https://{{domain}}' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'code={{the code we receive from callback page}}' \
--data-urlencode 'grant_type=authorization_code' \
--data-urlencode 'client_id={{Client ID}}' \
--data-urlencode 'redirect_uri={{Callback URL}}'
```

Now we have the access token that we can pass to subsequent API calls to the .NET 6 resources by adding it to the “Authorisation” header. To implement authentication, add the following code to Program.cs:

``` csharp
using Microsoft.AspNetCore.Authentication.JwtBearer; //install this package if it is not in the project
builder.Services
  .AddAuthentication(configureOptions =>
  {
    configureOptions.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    configureOptions.DefaultChallengeScheme =  JwtBearerDefaults.AuthenticationScheme;
  })
  .AddJwtBearer(configureOptions =>
  {
    configureOptions.Authority = {{Auth0 domain}};
    configureOptions.Audience = {{the API identifier}};
    configureOptions.TokenValidationParameters = new Microsoft.IdentityModel.Tokens.TokenValidationParameters()
    {
      NameClaimType = ClaimTypes.NameIdentifier
    };
  });
//... other code here
app.UseAuthentication();
```

and to protect any controller:

``` csharp
[Authorize]
[ApiController]
[Route("api/[controller]")]
public class MyController : ControllerBase
{
  //... your other code here
}
```

# Authorisation

Authorisation tells the API resources what a user can or cannot do. We can add permission information to a user on Auth0. First, add a custom permission named “read” in the “Permissions” tab in the API resource that we created earlier. Then, add the permission to the a user under the “User Management” page.
After this is completed, we can make a call to get a new access token for this user again. The permission will be included in the payload of the access token now (because we have enabled RBAC in previous step).
This permission information can then be used in .NET to check if an API request is authorised to be carried out. To consume the access token, add the following code to `Program.cs`:

``` csharp
builder.Services.AddAuthorization(configure =>
{
  configure.AddPolicy("read", policy => policy.Requirements.Add(new HasPermissionRequirement("read", "{{Auth0 domain}}")));
});
//... other code here
//after app.UseAuthentication();
app.UseAuthorization();
```

At the same time, add a permission handler and a permission requirement to the code:

``` csharp
public class HasPermissionHandler: AuthorizationHandler<HasPermissionRequirement>
{
  protected override Task HandleRequirementAsync(AuthorizationHandlerContext context, HasPermissionRequirement requirement)
  {
    var user = context.User.FindFirst(ClaimTypes.NameIdentifier);
    if (user == null || string.IsNullOrWhiteSpace(user.Value)) return Task.CompletedTask;
    if (!context.User.HasClaim(c => c.Type == "permissions")) return Task.CompletedTask;
    if (!context.User.HasClaim(c => c.Issuer == requirement.Issuer)) return Task.CompletedTask;
    var permissions = context.User.FindAll(c => c.Type == "permissions" && c.Issuer == requirement.Issuer).Select(c => c.Value);
    if (permissions(s => s == requirement.Permission)) context.Succeed(requirement);
    return Task.CompletedTask;
  }
}
public class HasPermissionRequirement: IAuthorizationRequirement
{
  public string Issuer { get; set; }
  public string Permission { get; set; }
  public HasPermissionRequirement(string permission, string issuer)
  {
    Permission = permission ?? throw new ArgumentNullException(nameof(permission));
    Issuer = issuer ?? throw new ArgumentNullException(nameof(issuer));
  }
}
```

And finally to use the Authorisation in any controller:

``` csharp
[Authorize("read")]
[ApiController]
[Route("api/[controller]")]
public class MyController : ControllerBase
{
  //... your other code here
}
```

From now on, any API call with access token that does not have “read” in the permissions field will not be able to access this controller.
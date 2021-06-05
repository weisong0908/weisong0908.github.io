---
title: "Unit Test for Sitefinity"
summary: Writing unit tests for custom Sitefinity widgets
description: Writing unit tests for custom Sitefinity widgets
author: Wei Song
tags: ["Notes", "Sitefinity", "C#", ".NET", "Unit test"]
showReadingTime: true
showBreadCrumbs: true
showPostNavLinks: true
showToc: true
date: 2021-06-05T15:12:59+08:00
draft: false
---

The goal of unit testing is to segregate each part of the program and test if that individual part is working correctly. This is the practise that improves the quality of code, enables bugs to be found at early stages, and facilitates any future changes and refactorings. This article talks about the steps on transforming a custom Sitefinity widget to be unit testable and how to perform it.

# Starting point

Sitefinity is a CMS that allows developers to use ASP.NET MVC to build custom widgets. Here is the sample of an MVC controller class of a custom widget that retrieves a list of books (which is a custom dynamic content) objects:

```c#
[ControllerToolboxItem(Name = "Books", Title = "Books", SectionName = "Custom Widgets")]
public class BooksController: Controller
{
  public ActionResult Index()
  {
    var model = new BooksModel();
    model.ListOfBooks = DynamicModuleManager.GetManager().GetDataItems(TypeResolutionService.ResolveType("Telerik.Sitefinity.DynamicTypes.Model.BooksModule.Book"));

    return View("Index", model);
  }
}
```

This is in essence a regular MVC controller which has to be unit tested. To determine what should be tested we have to look at what the controller actually does. It basically obtains a list of books and passes it to the view (Index.cshtml). Here we have the answer — we have to ensure the controller retrieves the books from database and returns the correct view.

# Creating the first unit test

Here we create a new C# class library project alongside the target Sitefinity project called SitefinityWebApp.UnitTest. We use NUnit testing framework and start by installing both the NUnit and NUnit3TestAdapter so that we can run the tests in the Visual Studio Test Explorer. We also need to add a reference to the SitefinityWebApp project so that we can access it.

The first test is written to check whether the Index() method calls the correct view:

```c#
using SitefinityWebApp.Mvc.Controllers;

public class BooksControllerTests
{
  [Test]
  public void Index_WhenCalled_ReturnsIndexViewResult()
  {
    //arrange
    var controller = new BooksController();

    //act
    var result = controller.Index() as ViewResult;

    //assert
    Assert.AreEqual("Index", result.ViewName);
  }
}
```

However, if we run the test there will be exception, because there is an external dependency (DynamicModuleManager) within the original controller class. In order to unit test the controller we have to decouple the dependency from the class and create a test double of this dependency. This preparation comes in a several steps.

## Step 1: Introduce an adapter class to wrap the external dependency

The first steps towards decoupling is to use interface instead of implementation and inject it as parameter in the controller constructor. However, unfortunately, the DynamicModuleManager does not come with its interface out of the box. Here comes the Adapter design pattern which helps us to encapsulate the whole DynamicModuleManager in a service class called BookService from which the corresponding interface IBookService is then extracted.

```c#
public class BookService: IBookService
{
  public IEnumerable<DynamicContent> GetBooks()
  {
    DynamicModuleManager.GetManager().GetDataItems(TypeResolutionService.ResolveType("Telerik.Sitefinity.DynamicTypes.Model.BooksModule.Book"));
  }
}

public interface IBookService
{
  IEnumerable<DynamicContent> GetBooks();
}
```

## Step 2: Inject the dependency to the constructor of controller class

With these adapter class and interface, we can then decouple the dependency through dependency injection using Ninject and replace the dependency in the controller with the IBookService:

```c#
public class InterfaceMappings: NinjectModule
{
  public override void Load()
  {
    this.Bind<IBookService>().To<BookService>();
  }
}

public class BooksController: Controller
{
  private readonly IBookService _bookService;

  public BooksController(IBookService bookService)
  {
    _bookService = bookService;
  }

  public ActionResult Index()
  {
    var model = new BooksModel();
    model.ListOfBooks = _bookService.GetBooks();

    return View("Index", model);
  }
}
```

## Step 3: Create the test double for the dependency

Telerik, the company that owns Sitefinity, actually has a mocking solution that is less known called JustMock which is free and works just fine. Here we install the JustMock package through NuGet and use it to create a mock (test double) for the IBookService in the test method:

```c#
[Test]
public void Index_WhenCalled_ReturnsIndexViewResult()
{
  //arrange
  var bookService = Mock.Create<IBookService>();
  Mock.Arrange(() => bookService.GetBooks()).Returns(new List<DynamicContent>());
  var controller = new BooksController(bookService);

  //act
  var result = controller.Index() as ViewResult;

  //assert
  Assert.AreEqual("Index", result.ViewName);
}
```

In the above code, we introduced the mock of the IBookService and mimic the method GetBooks() because we are not interested in the service, we are only interested in the controller. The test will pass if the result is a view with the name Index.

# Creating the second unit test

We also need to make sure the Index() method calls the IBookService to retrieve the list of books as expected. Again we need to write a unit test to check it:

```c#
[Test]
public void Index_WhenCalled_ReturnsIndexViewResult()
{
  //arrange
  var bookService = Mock.Create<IBookService>();
  Mock.Arrange(() => bookService.GetBooks())
    .Returns(new List<DynamicContent>())
    .MustBeCalled();
  var controller = new BooksController(bookService);

  //act
  var result = controller.Index();

  //assert
  Mock.Assert(bookService);
}
```

Notice a new chain method in Line 8 and Line 15 which check if the method GetBooks() is called.

# Conclusion

This article has proven that preparation for unit test is a chore that easily takes up a huge amount of time. But the result of writing unit test can be beneficial in long run because in the process of preparation, the program is being refactored to be loosely coupled, more readable, and easily maintainable, let alone the benefits that unit test brings when it is implemented.

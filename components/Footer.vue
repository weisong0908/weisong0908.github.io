<template>
  <footer class="mt-24 text-sm text-gray-500 align-middle">
    <div class="grid space-x-4 justify-items-center">
      <div class="flex space-x-1 items-center">
        <NuxtLink to="/">
          <img class="h-4" src="~/static/favicon.png" alt="personal-website" title="Personal Website" />
        </NuxtLink>
        <p>
          <span>Personal Website</span>
        </p>
      </div>
      <div class="text-center my-6">
        <p>Connect with me through:</p>
        <ul class="flex space-x-4">
          <li class="flex items-center space-x-1" title="Checkout my LinkedIn profile">
            <span>
              <img class="h-3" src="~/static/linkedin.png" alt="linkedin" />
            </span>
            <span>
              <a class="hover:text-gray-800" target="_blank" href="https://www.linkedin.com/in/tengweisong">LinkedIn</a>
            </span>
          </li>
          <li class="flex items-center space-x-1" title="Explore my posts on Medium">
            <span>
              <img class="h-3" src="~/static/medium.png" alt="medium" />
            </span>
            <span>
              <a class="hover:text-gray-800" target="_blank" href="https://weisong0908.medium.com">Medium</a>
            </span>
          </li>
          <li class="flex items-center space-x-1" title="Some of my repositories on Github">
            <span>
              <img class="h-3" src="~/static/github.png" alt="github" />
            </span>
            <span>
              <a class="hover:text-gray-800" target="_blank" href="https://github.com/weisong0908">Github</a>
            </span>
          </li>
          <li class="flex items-center space-x-1" title="Email me">
            <span>
              <img class="h-3" src="~/static/email.png" alt="email" />
            </span>
            <span>
              <a class="hover:text-gray-800" href="mailto:weisong.teng.work@gmail.com?subject=Hi">Email</a>
            </span>
          </li>
        </ul>
      </div>
      <img
        class="h-4 object-cover shadow-md mx-auto"
        src="~/static/project_badge.png"
        alt="project-badge"
        title="Project #01"
      />
    </div>
  </footer>
</template>

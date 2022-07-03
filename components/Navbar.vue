<template>
  <div class="my-8">
    <ul class="flex flex-row space-x-16 items-center justify-center">
      <li>
        <NuxtLink to="/" class="p-2 hover:bg-gray-200">Home</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/about-me" class="p-2 hover:bg-gray-200">About Me</NuxtLink>
      </li>
      <!-- <li>
        <NuxtLink to="/blogs" class="p-2 hover:bg-gray-200">Blogs</NuxtLink>
      </li> -->
      <li>
        <NuxtLink to="/projects" class="p-2 hover:bg-gray-200">Projects</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.nuxt-link-exact-active {
  @apply border-b-2 border-gray-200;
}
</style>

<template>
  <nav class="my-8">
    <ul
      class="flex flex-row sm:space-x-16 space-x-4 items-center justify-center"
    >
      <li v-for="page in pages" :key="page.name">
        <NuxtLink :to="page.link" class="p-2 hover:bg-gray-200">{{
          page.title
        }}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.nuxt-link-exact-active {
  @apply border-b-2 border-gray-200;
}
</style>

<script>
export default {
  data() {
    return {
      pages: [
        {
          title: "Home",
          link: "/",
        },
        {
          title: "About Me",
          link: "/about-me",
        },
        {
          title: "Projects",
          link: "/projects",
        },
        {
          title: "Notes",
          link: "/notes",
        },
      ],
    };
  },
};
</script>

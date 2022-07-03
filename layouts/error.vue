<template>
  <div class="my-12 text-center">
    <h1 class="text-3xl">
      <span v-if="error.statusCode === 404"> Page not found </span>
      <span v-else> An error occurred </span>
    </h1>
    <br />
    <NuxtLink to="/" class="border border-gray-200 font-sans text-gray-400 text-xs p-1 hover:bg-gray-200">Go to home</NuxtLink>
  </div>
</template>

<script>
export default {
  props: ["error"],
  layout: "error", // you can set a custom layout for the error page
};
</script>

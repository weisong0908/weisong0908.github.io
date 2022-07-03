<template>
  <div class="my-12">
    <h1 class="text-6xl text-center">Welcome</h1>
    <p class="text-lg text-center">to my personal website.</p>
    <div class="grid grid-cols-2 my-12">
      <div class="border-gray-400 h-48" style="border-right-width: 0.05em"></div>
      <div class="border-gray-400 h-48" style="border-left-width: 0.05em"></div>
    </div>
    <p class="text-center">My name is Teng Wei Song,</p>
    <p class="text-center">I am a software developer based in Singapore.</p>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Teng Wei Song | Home',
    };
  },
};
</script>

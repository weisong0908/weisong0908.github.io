<template>
  <div class="my-8">
    <div v-if="slug">
      <div class="mt-4">
        <NuxtLink
          to="/projects"
          class="border border-gray-300 text-sm p-1 hover:bg-gray-200"
          >&lt; back to Projects</NuxtLink
        >
      </div>
      <br />
      <h1 class="text-3xl font-normal border-b border-gray-400">{{ title }}</h1>
      <p class="text-gray-500 italic">{{ summary }}</p>
      <p class="my-1 text-gray-100 text-sm font-sans" v-if="type">
        <span class="bg-gray-400 px-1 w-min">
          {{ type }}
        </span>
      </p>
      <p
        class="flex flex-row gap-1 flex-wrap my-1 text-gray-400 text-sm font-sans"
        v-if="tags"
      >
        <span
          v-for="tag of tags"
          :key="tag.id"
          class="border border-gray-400 px-1"
          >{{ tag }}</span
        >
      </p>
      <br />
      <nuxt-content :document="{ body: body }"></nuxt-content>
      <br />
      <div class="border-t border-gray-400 text-gray-400 text-sm">
        <div class="flex flex-row gap-1">
          <span class="w-2 my-1 bg-gray-400"></span>
          <span>End</span>
        </div>
      </div>
      <br />
    </div>
    <div v-else>
      <p class="bg-yellow-100">Article not found</p>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Teng Wei Song | Projects | " + this.title,
    };
  },

  async asyncData({ $content, params }) {
    const { slug } = params;
    const { title, order, summary, type, tags, body } = await $content(
      `/projects/${slug}`
    ).fetch();

    return {
      slug,
      body,
      title,
      order,
      summary,
      type,
      tags,
    };
  },
};
</script>

<style>
.nuxt-content h1 {
  @apply text-2xl font-bold;
}
.nuxt-content h2 {
  @apply text-xl font-bold;
}
.nuxt-content h3 {
  @apply text-lg font-bold;
}
.nuxt-content pre {
  @apply overflow-x-scroll bg-gray-200 p-4;
}
.nuxt-content a {
  @apply underline hover:no-underline;
}
</style>

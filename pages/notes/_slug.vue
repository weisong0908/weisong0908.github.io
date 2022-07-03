<template>
  <div class="my-8">
    <div v-if="slug">
      <div class="mt-4">
        <NuxtLink
          to="/notes"
          class="border border-gray-200 font-sans text-gray-400 text-xs p-1 hover:bg-gray-200"
          >back to Notes</NuxtLink
        >
      </div>
      <br />
      <h1 class="text-3xl font-normal border-b border-gray-400">{{ title }}</h1>
      <p class="text-gray-500 italic">{{ summary }}</p>
      <p class="text-xs font-sans my-1 flex flex-row gap-1 flex-wrap">
        <span
          v-if="tags"
          v-for="tag of tags"
          :key="tag"
          class="border border-gray-400 px-1 text-gray-400"
          >{{ tag }}</span
        >
      </p>
      <p class="text-gray-500 italic">
        Published at {{ createdAt | datetime }}
      </p>
      <p class="text-gray-500 italic">
        Last updated at {{ updatedAt | datetime }}
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
      <p class="bg-yellow-100">Note not found</p>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Teng Wei Song | Notes | " + this.title,
    };
  },

  async asyncData({ $content, params }) {
    const { slug } = params;
    const { title, createdAt, summary, type, tags, body, updatedAt } = await $content(
      `/notes/${slug}`
    )
      .fetch();

    return {
      slug,
      body,
      title,
      createdAt,
      updatedAt,
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

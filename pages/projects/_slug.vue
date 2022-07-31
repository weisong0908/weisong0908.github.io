<template>
  <div class="my-8">
    <div v-if="slug">
      <div class="mt-4">
        <NuxtLink
          to="/projects"
          class="border border-gray-200 font-sans text-gray-400 text-xs p-1 hover:bg-gray-200"
          >back to Projects</NuxtLink
        >
      </div>
      <br />
      <h1 class="text-3xl font-normal text-center">{{ title }}</h1>
      <p class="text-gray-500 text-sm text-center">{{ summary }}</p>
      <br />
      <p class="text-xs font-sans my-1 text-center">
        <span
          class="border border-gray-400 bg-gray-400 px-1 ml-1 text-gray-100"
          v-if="type"
        >
          {{ type }}
        </span>
        <span
          v-if="tags"
          v-for="tag of tags"
          :key="tag"
          class="border border-gray-400 px-1 ml-1 text-gray-400"
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
      <p class="bg-yellow-100">Project not found</p>
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
.nuxt-content {
  @apply space-y-4 text-justify;
}
.nuxt-content h1 {
  @apply pt-2 text-2xl font-bold;
}
.nuxt-content h2 {
  @apply pt-1 text-xl font-bold;
}
.nuxt-content h3 {
  @apply text-lg font-bold;
}
.nuxt-content a {
  @apply underline hover:no-underline;
}
.nuxt-content ol {
  @apply list-decimal;
}
.nuxt-content ul {
  @apply list-disc;
}
</style>

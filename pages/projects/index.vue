<template>
  <div class="my-8">
    <h1 class="text-3xl">Projects</h1>
    <br />
    <div>
      <ul class="flex flex-col space-y-4">
        <li v-for="project of projects" :key="project.slug">
          <h2 class="font-bold">
            <NuxtLink :to="`/projects/${project.slug}`">{{
              project.title
            }}</NuxtLink>
          </h2>
          <p class="text-gray-500 italic" v-if="project.summary">
            {{ project.summary }}
          </p>
          <p class="text-xs font-sans my-1 flex flex-row gap-1 flex-wrap">
            <span
              class="border border-gray-400 bg-gray-400 px-1 w-min text-gray-100"
              v-if="project.type"
            >
              {{ project.type }}
            </span>
            <span
              v-if="project.tags"
              v-for="tag of project.tags"
              :key="tag"
              class="border border-gray-400 px-1 text-gray-400"
              >{{ tag }}</span
            >
          </p>
        </li>
      </ul>
    </div>
    <br />
    <p class="text-sm text-gray-400">{{ projects.length }} project(s) found.</p>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Teng Wei Song | Projects",
    };
  },

  async asyncData({ $content }) {
    const projects = (await $content("/projects").sortBy("order").fetch()).map(
      (p) => {
        return {
          slug: p.slug,
          title: p.title,
          order: p.order,
          summary: p.summary,
          type: p.type,
          tags: p.tags,
        };
      }
    );

    return {
      projects,
    };
  },
};
</script>

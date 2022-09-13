<template>
  <div class="my-8">
    <h1 class="text-3xl">Notes</h1>
    <br />
    <div>
      <ul class="flex flex-row space-x-8">
        <li class="note-item w-max-72" v-for="note of notes" :key="note.slug">
          <p class="text-gray-400 text-sm">Episode {{ note.ep }}</p>
          <h2 class="text-lg">
            <NuxtLink :to="`/notes/${note.slug}`">{{ note.title }}</NuxtLink>
          </h2>
          <br />
          <p class="text-gray-500 text-sm" v-if="note.summary">
            {{ note.summary }}
          </p>
          <br />
          <p class="text-xs font-sans my-1 flex flex-row space-x-1 flex-wrap">
            <span
              v-if="note.tags"
              v-for="tag of note.tags"
              :key="tag"
              class="border border-gray-400 px-1 text-gray-400"
              >{{ tag }}</span
            >
          </p>
        </li>
      </ul>
    </div>
    <br />
    <br />
    <p class="text-sm text-gray-400">{{ notes.length }} note(s) found.</p>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Teng Wei Song | Notes",
    };
  },

  async asyncData({ $content }) {
    const notes = (
      await $content("/notes")
        .where({ draft: false })
        .sortBy("publishDate", "desc")
        .fetch()
    ).map((p) => {
      return {
        slug: p.slug,
        ep: p.ep,
        title: p.title,
        publishDate: p.publishDate,
        summary: p.summary,
        tags: p.tags,
      };
    });

    return {
      notes,
    };
  },
};
</script>

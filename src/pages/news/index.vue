<template>
  <div>
    <h1>お知らせ</h1>
    <ContentList v-slot="{ list }" path="/news/">
      <div
        v-for="article in list"
        :key="article._path"
        class="mx-5 mb-3 max-w-3xl border border-solid border-teal-400 md:mx-auto"
      >
        <NuxtLink :to="article._path" class="my-3 block p-3">
          <h2 class="border-b border-teal-100 text-xl">{{ article.title }}</h2>
          <p class="my-2 text-sm">{{ article.description }}</p>
        </NuxtLink>
      </div>
    </ContentList>
  </div>
</template>

<style scoped>
  h1 {
    @apply my-10 pt-6 text-center text-2xl;
  }
</style>

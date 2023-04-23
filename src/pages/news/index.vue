<template>
  <div>
    <h1>お知らせ</h1>
    <ContentList v-slot="{ list }" path="/news/">
      <div v-for="article in list" :key="article._path">
        <NuxtLink :to="article._path">
          <h2>{{ article.title }}</h2>
          <p>{{ article.description }}</p>
        </NuxtLink>
      </div>
    </ContentList>
  </div>
</template>

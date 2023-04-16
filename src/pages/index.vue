<template>
  <div>
    <TopImage />
    <div>
      <template v-for="article of topPageData">
        <ArticleMain :is-long-text="article.isLongText">
          <ArticleHeader>{{ article.title }}</ArticleHeader>
          <ArticleContent class="text-xs">{{ article.content }}</ArticleContent>
          <ArticleButton v-if="article.button"
            ><NuxtLink :to="article.button.link">
              {{ article.button.text }}</NuxtLink
            >
          </ArticleButton>
        </ArticleMain>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
  import topPageData from '@/assets/json/topPage.json';
</script>

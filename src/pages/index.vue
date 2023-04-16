<template>
  <div>
    <TopImage />
    <div>
      <template v-for="article of topPageData">
        <!-- eslint-disable-next-line vue/valid-v-for-->
        <ArticleMain :has-border="article.hasBorder">
          <ArticleHeader>{{ article.title }}</ArticleHeader>
          <ArticleContent class="text-sm">{{ article.content }}</ArticleContent>
          <template v-if="article.button">
            <NuxtLink :to="article.button.link">
              <ArticleButton>
                {{ article.button.text }}
              </ArticleButton>
            </NuxtLink>
          </template>
        </ArticleMain>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
  import topPageData from '@/assets/json/topPage.json';
</script>

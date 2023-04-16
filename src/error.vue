<!--
<template>
  <div class="m-8 p-10 text-center">
    <ul>
      <li>{{ error?.statusCode }}</li>
      <li>{{ error?.message }}</li>
    </ul>
    <div class="">
      <div>
        <NuxtLink to="/" class="">サイトのトップに戻る</NuxtLink>
      </div>
    </div>
  </div>
</template> -->

<template>
  <div class="leading-5">
    <!-- <TheHeader class="fixed w-full" :class="{ '-mt-20': path !== '/' }" /> -->
    <TheHeader class="fixed top-0 w-full" />
    <div>
      <article class="mt-20">
        <div class="main mx-4">
          <div class="text-5xl">{{ error?.statusCode }}</div>
          <div class="pt-5">アクセスしたページは存在しません</div>
          <NuxtLink to="/">
            <ArticleButton> トップページへ </ArticleButton>
          </NuxtLink>
        </div>
      </article>
    </div>
    <TheFotter />
  </div>
</template>

<script setup lang="ts">
  const error = useError();
</script>

<style scoped>
  .vh-100vh {
    height: 100vh;
  }

  .main {
    min-height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .pt-5 {
    padding-top: 1.25rem /* 20px */;
  }
</style>

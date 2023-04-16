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
        <div class="mx-4 h-96 border-2 py-16">
          <ul class="p-72">
            <li>{{ error?.statusCode }}</li>
            <li>{{ error?.message }}</li>
          </ul>
        </div>
      </article>
    </div>
    <TheFotter />
  </div>
</template>

<script setup lang="ts">
  const error = useError();
</script>

<template>
  <div class="leading-5">
    <!-- <TheHeader class="fixed w-full" :class="{ '-mt-20': path !== '/' }" /> -->
    <TheHeader class="fixed top-0 w-full" />
    <div>
      <article class="mt-20">
        <NuxtPage class="mx-6 mb-10 h-full" />
      </article>
    </div>
    <TheFotter />
  </div>
</template>

<script setup></script>

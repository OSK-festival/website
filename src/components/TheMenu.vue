<template>
  <div
    class="fixed top-0 left-0 flex h-full w-full flex-col justify-center bg-white text-black"
  >
    <ul class="mx-auto grid gap-2 text-center">
      <li v-for="menuItem of menuItems" :key="menuItem">
        <NuxtLink :to="menuItem.path">
          {{ menuItem.name }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
  // const { menu } = await useFetch('@asetts/json/menu.json');
  import menuItems from '@/assets/json/menu.json';
</script>

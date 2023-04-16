<template>
  <div>
    <!-- <TheHeader class="fixed w-full" :class="{ '-mt-20': path !== '/' }" /> -->
    <TheHeader class="fixed top-0 w-full" />
    <div>
      <article class="mt-20">
        <NuxtPage class="mx-4 h-full" />
      </article>
    </div>
  </div>
</template>

<script setup>
  // const route = useRoute();
  // const path = ref(route.fullPath);
  // watch(
  // () => route.query,
  // () => (isMenuOpen.value = false)
  // () => (path.value = route.fullPath)
  // );
  // console.log(path.value);
</script>

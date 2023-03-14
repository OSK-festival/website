<template>
  <div class="top-0 flex flex-row justify-between px-4 py-5">
    <NuxtLink to="/">
      <div class="text-3xl font-bold">第75期 記念祭</div>
    </NuxtLink>
    <div class="hidden md:flex md:flex-row">
      <div class="mx-2 my-auto">ああ</div>
      <div class="mx-2 my-auto">ああ</div>
      <div class="mx-2 my-auto" />
    </div>
    <div class="my-auto md:hidden">
      <div class="relative z-30" @click="change">
        <svg
          v-if="!isMenuOpen"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="h-6 w-6"
        >
          <path
            fill-rule="evenodd"
            d="M3 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 5.25zm0 4.5A.75.75 0 013.75 9h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 9.75zm0 4.5a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75zm0 4.5a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
            clip-rule="evenodd"
          />
        </svg>
        <svg
          v-if="isMenuOpen"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="h-6 w-6"
        >
          <path
            fill-rule="evenodd"
            d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <TheMenu v-if="isMenuOpen" />
    </div>
  </div>
</template>

<script setup>
  const isMenuOpen = ref(false);

  const change = () => {
    isMenuOpen.value = !isMenuOpen.value;
  };

  const route = useRoute();
  watch(
    () => route.query,
    () => (isMenuOpen.value = false)
  );
</script>

<style scoped>
  .header {
    width: 100%;
    height: 80px;
    /* position: fixed; */
    top: 0;
    left: 0;
    z-index: 10;
  }
</style>

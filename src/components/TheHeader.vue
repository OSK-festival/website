<template>
  <div class="">
    <div
      class="header top-0 flex flex-row justify-between px-4 py-5 text-black"
      :class="{
        ' bg-teal-100 text-black': isScroled,
        'bg-white/20': !isScroled,
      }"
    >
      <!------------------------------------------------------>
      <!-- <div
      class="header top-0 flex flex-row justify-between px-4 py-5"
      :class="{
        'border-b-2 border-b-black/20 bg-white/60 text-black': isScroled,
        'text-white': !isScroled,
      }"
      > -->
      <!------------------------------------------------------>

      <!-- <transition>
        <div class="h-full"></div>
      </transition> -->
      <NuxtLink to="/">
        <div class="text-3xl">第75回記念祭</div>
      </NuxtLink>
      <div class="hidden md:flex md:flex-row">
        <div v-for="menuItem of menuItems" :key="menuItem" class="mx-2 my-auto">
          <NuxtLink :to="menuItem.path">
            {{ menuItem.name }}
          </NuxtLink>
        </div>
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
            class="h-6 w-6 text-black"
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
  </div>
</template>

<script setup>
  import menuItems from '@/assets/json/headerMenu.json';
  const isMenuOpen = ref(false);

  const change = () => {
    isMenuOpen.value = !isMenuOpen.value;
  };

  const route = useRoute();
  watch(
    () => route.query,
    () => (isMenuOpen.value = false)
  );

  const isScroled = ref(false);
  function changeHeaderColor() {
    // const route = useRoute();
    // const offset =
    // console.log(route.path === '/');

    const yCoordinate = window.scrollY;
    if (yCoordinate > (route.path === '/' ? window.innerHeight - 40 : 40)) {
      isScroled.value = true;
    } else {
      isScroled.value = false;
    }
  }

  onMounted(() => {
    window.addEventListener('scroll', changeHeaderColor);
  });
</script>

<style scoped>
  .header {
    transition: all 0.5s;
  }

  /* .v-enter {
    opacity: 0;
  }

  .v-enter-active,
  .v-leave-active {
    transition: opacity 1s;
  }

  .v-enter-to {
    opacity: 1;
  }

  .v-leave-to {
    opacity: 0;
    transition: opacity 1s;
  } */
</style>

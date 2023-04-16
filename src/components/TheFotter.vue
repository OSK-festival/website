<template>
  <div class="fotter bg-teal-100 py-4">
    <div class="grid gap-10 p-12 md:flex xl:mx-auto xl:max-w-5xl">
      <div v-for="menuItem of menuItems" :key="menuItem" class="mx-auto">
        <NuxtLink :to="menuItem.path">
          {{ menuItem.name }}
        </NuxtLink>
      </div>
    </div>
    <!-- {{ postdata }} -->
    <div class="text-center text-xs text-gray-500">© 2023文化祭実行委員会</div>
  </div>
</template>

<script setup>
  // type Props = {
  //   postdata?: string;
  // };

  // const postdata = defineProps<Props>();
  import menuItems from '~/assets/json/fotterMenu.json';
</script>

<style scoped></style>

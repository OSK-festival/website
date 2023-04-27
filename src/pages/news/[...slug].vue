<template>
  <div class="">
    <ContentDoc v-slot="{ doc }">
      <div class="nuxt-content">
        <h1>{{ doc.title }}</h1>
        <div v-if="doc.description" class="description">
          {{ doc.description }}
        </div>
        <ContentRenderer class="content-inner" :value="doc" />
      </div>
    </ContentDoc>
  </div>
</template>

<script setup>
  // const { data: navigationData } = await useAsyncData('navigation', () => fetchContentNavigation())
</script>

<style lang="scss">
  .nuxt-content {
    @apply max-w-3xl md:mx-auto;

    p {
      @apply px-3;
    }

    h1 {
      @apply my-10 pt-6 text-center text-2xl;
    }

    .description {
      @apply my-3 bg-teal-100 p-5;
    }

    h2 {
      @apply my-3 border-b border-black py-1 text-xl;
    }
  }
</style>

<template>
  <div>
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

<style scoped lang="scss">
  .nuxt-content {
    p {
      @apply px-3;
    }

    h1 {
      @apply my-10 pt-6 text-center text-2xl;
    }

    .description {
      @apply my-3 bg-slate-400 p-5;
    }
  }

  .content-inner {
    h2 {
      @apply text-center text-2xl text-red-600;
    }
  }
</style>

<template>
  <div>
    <ContentDoc v-slot="{ doc }">
      <div class="nuxt-content">
        <h1>{{ doc.title }}</h1>
        <div v-if="doc.description" class="description">
          {{ doc.description }}
        </div>
        <ContentRenderer :value="doc" />
      </div>
    </ContentDoc>
    aaa
  </div>
</template>

<script setup>
  // const { data: navigationData } = await useAsyncData('navigation', () => fetchContentNavigation())
</script>

<style scoped>
  .nuxt-content p {
    padding: 10px;
  }
</style>

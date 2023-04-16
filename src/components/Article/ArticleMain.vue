<template>
  <article
    class="mx-auto my-20 w-4/5 max-w-5xl border-solid border-black/20 p-5"
    :class="{
      'border-2': isLongText.isLongText,
      'border-0': !isLongText.isLongText,
    }"
  >
    <slot></slot>
  </article>
</template>

<script setup lang="ts">
  type Props = {
    isLongText: boolean;
  };

  const isLongText = defineProps<Props>();
</script>

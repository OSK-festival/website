<template>
  <article
    class="mx-auto my-20 w-11/12 max-w-5xl border-solid border-black/20 p-3"
    :class="{
      border: hasBorder.hasBorder,
      'border-0': !hasBorder.hasBorder,
    }"
  >
    <slot></slot>
  </article>
</template>

<script setup lang="ts">
  type Props = {
    hasBorder: boolean;
  };

  const hasBorder = defineProps<Props>();
</script>

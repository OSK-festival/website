<template>
  <div>
    フッター

    {{ postdata }}
  </div>
</template>

<script setup lang="ts">
  type Props = {
    postdata: string;
  };

  const postdata = defineProps<Props>();
</script>

<template>
  <div class="section">
    <div
      class="mx-auto w-4/5 bg-black py-2 text-center font-heading text-2xl text-white"
    >
      <slot name="heading" />
    </div>
    <div class="text-center text-lg">
      <slot name="subHeading" />
    </div>
    <div class="m-3">
      <slot name="description"></slot>
    </div>
  </div>
</template>

<style scoped></style>

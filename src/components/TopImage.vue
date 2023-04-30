<template>
  <div class="full -z-20 -mx-6 -mt-20">
    <div
      class="absolute top-1/2 left-1/2 my-auto w-4/5 max-w-5xl -translate-x-1/2 -translate-y-1/2 bg-white/60 text-center text-lg text-gray-700"
    >
      <div>
        <!-- 2023.09. -->
        <span class="text-3xl">2023</span>
        <br />
        <span class="text-5xl">9.9</span>(Sat.)<span class="text-5xl">-</span>
        <span class="text-5xl">9.10</span>(San.)
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style>
  .full {
    position: relative;
    width: 100%+1rem;
    min-height: 100vh;
    background: url('~/assets/images/t.jpg') center / cover;
  }
</style>

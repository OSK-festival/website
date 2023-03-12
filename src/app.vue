<template>
  <div class="font-bold underline top-0 mx-2 my-4">Hello world!</div>
  <div>
    Counter:
    {{ counter }}
    <button @click="counter++">+</button>
    <button @click="counter--">-</button>
  </div>
</template>

<script setup>
const counter = useState('counter', () => Math.round(Math.random() * 1000))
</script>

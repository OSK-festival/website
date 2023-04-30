<template>
  <div class="">
    <ContentDoc v-slot="{ doc }">
      <div class="nuxt-content">
        <h1>{{ doc.title }}</h1>

        <div v-if="doc.description" class="content-inner">
          <!-- <div
          v-if="doc.description"
          class="description my-3 bg-teal-100 p-4 text-xs text-gray-700"
        > -->
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

    // .description {
    // @apply my-3 bg-teal-100 p-5;
    // }

    h2 {
      @apply relative -z-10 my-3 border-b border-teal-400 py-1 pl-7 text-xl;
    }

    h2::before {
      position: absolute;
      display: inline-block;
      content: '';
      top: 0.7em;
      left: 0em;
      width: 20px;
      height: 33.85px;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M21.949 10.112C22.1634 10.9122 21.6886 11.7347 20.8884 11.9491L5.2218 16.1469C4.77856 16.2657 4.31138 16.0676 4.08866 15.6664L1.46582 10.9417L2.91471 10.5535L5.3825 12.998L10.4778 11.6328L5.96728 4.55914L7.89913 4.0415L14.8505 10.4611L20.1119 9.05131C20.9121 8.8369 21.7346 9.31177 21.949 10.112ZM4.00013' fill='rgba(105,208,193,1)'%3E%3C/path%3E%3C/svg%3E");
      background-repeat: no-repeat;
    }

    h3 {
      @apply m-2 text-lg;
      // @apply border-b border-dashed border-gray-400 text-lg;
      // @apply bg-teal-100 p-3;
    }

    p {
      @apply px-2;
    }

    ol {
      @apply mx-4 px-3 py-3;
      li {
        list-style: disclosure-closed;
      }
    }

    ul {
      @apply mx-4 px-3;
      li {
        list-style: arabic;
      }
    }
  }
</style>

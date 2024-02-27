<!-- eslint-disable no-unused-vars -->
<template>
  <div class="product-card bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
    <slot name="image" />

    <h2 class="text-xl font-bold mb-2">{{ title }}</h2>
    <slot name="content" />
    <RouterLink :to="{ name: 'home' }" class="mt-4 text-blue-500 hover:text-blue-700"
      >Learn More</RouterLink
    >
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'

const props = defineProps({
  title: {
    type: String
  }
})
</script>

<style lang="scss" scoped></style>

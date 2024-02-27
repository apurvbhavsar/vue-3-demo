<template>
  <nav class="bg-gray-800 flex items-center justify-between px-4 py-2">
    <div class="flex items-center">
      <img src="../assets/logo.svg" :alt="`${appName} Logo`" class="w-10 h-10 mr-4" />
      <RouterLink :to="{ name: 'home' }" class="text-white text-xl font-bold">{{
        appName
      }}</RouterLink>
    </div>
    <ul class="flex space-x-4">
      <li>
        <RouterLink :to="{ name: 'home' }" class="text-white hover:text-gray-200">
          Home
        </RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'about' }" class="text-white hover:text-gray-200"
          >About</RouterLink
        >
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { useSite } from '@/composables/use-site'
const { appName } = useSite()
</script>

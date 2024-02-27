<template>
  <footer class="bg-gray-800 text-white text-center py-4">&copy; {{ appName }} 2024</footer>
</template>

<script setup>
import { useSite } from '@/composables/use-site'
const { appName } = useSite()
</script>

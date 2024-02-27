<script setup>
import { RouterView } from 'vue-router'

import FooterCompo from './components/FooterCompo.vue'
import NavbarCompo from './components/NavbarCompo.vue'
</script>

<template>
  <NavbarCompo />

  <transition name="fade" mode="out-in">
    <RouterView />
  </transition>

  <FooterCompo />
</template>

<style scoped>
/* Enter - Active and To */
.fade-enter-active,
.fade-leave-to {
  transition: opacity 0.9s ease;
}

/* Enter - From and Leave - Active */
.fade-enter-from,
.fade-leave-active {
  opacity: 0;
}
</style>

<template>
  <div class="container mx-auto px-4 py-12">
    <section class="flex flex-col md:flex-row justify-between items-center mb-8">
      <h1 class="text-3xl font-bold mb-4 md:mb-0 text-blue-500">Acme LLC</h1>
      <p class="text-lg mb-4 md:mb-0 text-gray-700">
        We create innovative software solutions to empower your teams.
      </p>
    </section>

    <section class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
      <ProductCompo title="Foo">
        <template #image>
          <img src="../assets/logo.svg" alt="Foo icon" class="w-16 h-16 mb-4" />
        </template>

        <template #content>
          <p>
            Boost your team's efficiency with the ultimate project management tool.
            <br />
            Organize tasks, collaborate seamlessly, and track progress effortlessly.
          </p>
        </template>
      </ProductCompo>

      <ProductCompo title="Bar">
        <template #image>
          <img src="../assets/logo.svg" alt="Bar icon" class="w-16 h-16 mb-4" />
        </template>

        <template #content>
          <p>
            Organize your company's knowledge effectively with our collaborative wiki.
            <br />
            Facilitate knowledge sharing, break down silos, and empower informed decision-making.
          </p>
        </template>
      </ProductCompo>
    </section>
  </div>
</template>

<script setup>
import ProductCompo from '@/components/ProductCompo.vue'
import { useSite } from '@/composables/use-site'
const { appName } = useSite()
</script>

<style scoped>
.product-card {
  /* Additional card styles */
  transition: transform 0.9s ease-in-out;
}

.grid-cols-1 .product-card:nth-child(1) {
  /* First card animations */
  transform: translateX(-100%);
  animation: slideLeftIn 0.9s ease-in-out forwards;
}

.grid-cols-1 .product-card:nth-child(2) {
  /* Second card animations */
  transform: translateX(100%);
  animation: slideRightIn 0.9s ease-in-out forwards;
}

@keyframes slideLeftIn {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes slideRightIn {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}
</style>

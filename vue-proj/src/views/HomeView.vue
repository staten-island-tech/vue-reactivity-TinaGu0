<template>
  <div>
    <ProductCard class="parent"/>
  </div>
</template>

<script setup>
  import ProductCard from '@/components/ProductCard.vue';

</script>

<style scoped>
.parent {
  display: flex;
  flex-direction: column;
}
</style>
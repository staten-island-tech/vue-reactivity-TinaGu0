<template>
  <div>
    <ProductCard class="parent"/>
  </div>
</template>

<script setup>
  import ProductCard from '@/components/ProductCard.vue';
  import { snapshots } from '../components/SnapshotArr';

</script>

<style scoped>
.parent {
  display: flex;
  flex-direction: column;
  background-color: rgb(233, 236, 223);
  width: 100%;
  height: 50vw;
}
</style>
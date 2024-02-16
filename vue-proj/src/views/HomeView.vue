<template>
  <div>
    <ProductCard class="parent"
     v-for="snapshots in snapshots" 
     :key="snapshots.name"
     :snapshots = "snapshots"
     />
  </div>
</template>

<script setup>
  import ProductCard from '@/components/ProductCard.vue';
  import { snapshots } from '../components/SnapshotArr';

</script>

<style scoped>
.parent {
  background-color: rgb(233, 236, 223);
  width: 100%;
  height: 50vw;
  margin-bottom: 30vw;
}
</style>
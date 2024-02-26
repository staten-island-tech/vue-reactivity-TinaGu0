<template>
  <div class="parent">
    <ProductCard class="card" v-for="snapshot in snapshots" 
     :key="snapshot.name"
     :Snapshot = "snapshot"
     />
  </div>
</template>

<script setup>
  import ProductCard from '@/components/ProductCard.vue';
  import { snapshots } from '@/components/SnapshotArr';

</script>

<style scoped>
.card {
  background-color: rgb(233, 236, 223);
  width: 30%;
  height: 50vw;
  margin-right: 50%;
}

.parent { 
  display: flex;
  flex-direction: column;
}
</style>
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
  
  const props = defineProps({
    Snapshot: Object,
});

</script>

<style scoped>
.card {
  background-color: rgb(233, 236, 223);
  width: 30%;
  height: 20vw;
  margin-right: 10%;
  padding-right: 10vw;
  display: flexbox;
}

.parent { 
  display: flex;
  width: 100%;
  flex-flow: row wrap;
}
</style>
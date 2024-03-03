<template>
  <h1 class="center">Buy snapshot cards</h1>
  <div class="parent">
    <ProductCard v-for="snapshot in snapshots" 
     :key="snapshot.name"
     :Snapshot = "snapshot"
     />
  </div>
</template>

<script>
  import ProductCard from '../components/ProductCard.vue';
  import { snapshots } from '@/components/SnapshotArr';

export default {
  name: "HomeView", 
  components: { ProductCard }, 
  props: {
    snapshots: Array, 
    Snapshot: Object,
  }

}

</script>

<style scoped>

.parent { 
  display: flex;
  width: 100%;
  flex-flow: row wrap;
}

</style>./SnapshotArr../components/SnapshotArr
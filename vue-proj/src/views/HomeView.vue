<template>
  <h1 class="center">Buy snapshot cards</h1>
  <div class="parent">
    <ProductCard v-for="snapshot in snapshots" 
     :key="snapshot.name"
     :snapshot="snapshot"
     />
  </div>
</template>

<script> 
import ProductCard from '../components/ProductCard.vue';

export default { 
  name: "HomeView",
  components: { 
    ProductCard,
  },
  props: {
    snapshots: Array,
    snapshot: Object,
  }
};
</script>

<style scoped>
.parent { 
  display: flex;
  width: 100%;
  flex-flow: row wrap;
}
</style>
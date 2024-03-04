<template>
    <div class="parent">
      <ProductCard v-for="snapshot in snapshots" 
       :key="snapshot.name"
       :snapshot="snapshot"
       />
    </div>
  </template>
  
  <script> 
  import { snapshots } from '../views/SnapshotArr.js'
  import ProductCard from './ProductCard.vue'
  
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
    text-align: center;
    align-items: center;
    margin-left: 7%;
  }
  </style>
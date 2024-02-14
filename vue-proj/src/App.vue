<template>
  <h1 class="center">Buy snapshot cards + gambling</h1>
  <div>
    <HomeView />
  </div>
</template>

<script setup>
import { snapshots } from "./components/SnapshotArr";
import HomeView from './views/HomeView.vue';
console.log(snapshots);

</script>

<style scoped>
.center {
  text-align: center;
}

</style>
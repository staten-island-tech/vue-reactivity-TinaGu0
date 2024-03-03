<template>
  <div>
    <HomeView :snapshots="snapshots" />
  </div>
</template>

<script>
import HomeView from './views/HomeView.vue';
import { snapshots } from './views/SnapshotArr';

export default {
  name: "App",
  components: { HomeView },
  data() {
    return {
      snapshots: snapshots 
    };
  }
};
</script>

<style scoped>
</style>
<template>
  <div class="bg">
<h2>Store</h2>
  <div>
    <HomeView :snapshots="snapshots" />
  </div>
</div>
</template>

<script>
import HomeView from '../components/HomeView.vue'
import { snapshots } from './SnapshotArr';
  
  export default { 
    name: "StoreFront",
    components: { 
      HomeView,
    },
    props: {
      snapshot: Object,
    },
    data() {
    return {
      snapshots: snapshots,
    }
  },
  };
</script>

<style scoped>
.bg {
  background-color: rgba(255, 255, 255, 0.7);
  margin-right: 2vw;
}
</style>
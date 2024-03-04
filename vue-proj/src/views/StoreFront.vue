<template>
  <div class="bg">
<h1>Store</h1>
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
  margin-right: 3vw;
  margin-left: 3vw;
}
</style>
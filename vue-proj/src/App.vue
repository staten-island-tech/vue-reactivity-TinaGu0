<template>
  <section class="banner">
    <button class="btn" @click="goStore">Storefront</button>
    <button class="btn" @click="goGacha">Gacha</button>
  </section>
  <RouterView></RouterView>
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
    }
  },
  methods: {
    goStore() {
      this.$router.push({path: '/HomeView'})
    },
    goGacha() {
      this.$router.push({path: '/GachaScreen'})
    }
  }
};
</script>

<style scoped>

.banner {
  width: 100%;
  align-items: center;
}

.btn {
  width: 20%;
  height: 3vw;
  background: transparent;
  border-radius: 5px;
  margin-right: 40%;
}
</style>
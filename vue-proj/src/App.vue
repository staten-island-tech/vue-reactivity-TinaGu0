<template>
  <section class="banner">
    <button class="btn" @click="goStore">Storefront</button>
    <button class="btn" @click="goGacha">Gacha</button>
  </section>
  <RouterView></RouterView>
</template>

<script>
import HomeView from './components/HomeView.vue';
import { snapshots } from './views/SnapshotArr';
import { items } from './views/ArrayStuff.js'

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
      this.$router.push({path: '/StoreFront'})
    },
    goGacha() {
      this.$router.push({path: '/GachaScreen'});
      console.log(items)
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
  width: 40%;
  height: 3vw;
  background: var(--white);
  border-radius: 5px;
  margin-right: 40%;
  margin-left: 30%;
}
</style>
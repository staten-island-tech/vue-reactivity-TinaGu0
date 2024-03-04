<template>
    <div class="card">
        <h2>{{ snapshot.name }}</h2>
        <img v-bind:src="snapshot.img" class="img" :alt="snapshot.name"/>
        <p>${{ snapshot.price }}</p>
        <BuyItem :snapshot="snapshot" />
    </div>
</template>

<script>
import BuyItem from './BuyItem.vue';

export default { 
    name: "ProductCard",
    components: { 
        BuyItem, 
    },
    props: {
        snapshot: Object,
    }
};
</script>

<style>
.card {
  background: transparent;
  border: 2px solid #000;
  width: 20vw;
  height: auto;
  margin-right: 10%;
  margin-bottom: 5vw;
  text-align: center;
  
}

.img {
    height: 20vw;
    width: 20vw;
    margin-right: 50%;
}

</style>
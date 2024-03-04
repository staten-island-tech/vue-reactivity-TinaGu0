<template>
    <div class="item">
        <h2>{{ snapshot.name }}</h2>
        <img v-bind:src="snapshot.img" class="img"/>
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
.item {
  background-color: var(--white);
  width: 30vw;
  height: auto;
  margin-right: 10%;
  margin-bottom: 5vw;
}

.img {
    height: 20vw;
    width: 20vw;
    margin-right: 50%;
}

.btn {
    margin-right: 100%;
    height: 5vw;
    width: 10vw;
}
</style>
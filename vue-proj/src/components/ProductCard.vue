<template>
    <div class="item">
        <h2>{{ Snapshot.name }}</h2>
        <img v-bind:src="Snapshot.img" class="img"/>
        <BuyItem :Snapshot="snapshots"/>
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
        Snapshot: Object,
    },
};


</script>

<style scoped>
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
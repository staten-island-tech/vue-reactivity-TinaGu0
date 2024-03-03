<template>
    <div>
        <button class="coolButton">{{ Snapshot.price }}</button>
    </div>
</template>

<script>
import ProductCard from './ProductCard.vue';

export default { 
    name: "BuyItem",
    components: {},
    props: {
        Snapshot: Object,
    }
};


</script>

<style lang="scss" scoped>

</style>
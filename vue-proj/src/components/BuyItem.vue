<template>
    <div>
        <input type="button" v-bind:value="Snapshot.price" class="btn"/>
    </div>
</template>

<script setup>
import ProductCard from './ProductCard.vue';

const props = defineProps({
    Snapshot: Object,
});

</script>

<style lang="scss" scoped>

</style>
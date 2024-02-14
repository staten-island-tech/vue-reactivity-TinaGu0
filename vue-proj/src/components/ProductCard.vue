<template>
    <div class="product"> 
        <h2>{{ah}}</h2>
    </div>
</template>

<script setup>
import { snapshots } from './SnapshotArr';
let ah = snapshots.forEach((a) => snapshots.name)
</script>

<style scoped>

.product {
    width: 20%;
    background-color: antiquewhite;
    height: 30%;
}
</style>
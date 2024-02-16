<template>
    <p>{{ snapshots.name }}</p>
</template>

<script setup>
import { snapshots } from './SnapshotArr';
// snapshots.forEach((name) => console.log(name.name));
</script>

<style scoped>

.product {
    width: 20%;
    height: 30%;
}
</style>
<template>
    <h2>{{ Snapshot.name }}</h2>
    <h3>{{ Snapshot.price }}</h3>
    <input type="button" />
</template>

<script setup>

const props = defineProps({
    Snapshot: Object,
});

</script>

<style scoped>

</style>
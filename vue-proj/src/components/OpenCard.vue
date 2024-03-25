<template>
    <div>
        <button @click="">Open</button>
    </div>
</template>

<script>
import MysteryBag from './MysteryBag.vue';

export default {
    name: "OpenCard",
    props: {
        item: Object,
    },
}

</script>

<style lang="scss" scoped>

</style>
<template>
    <div class="card">
        <h3>{{ item.name }}</h3>
        <button @click="remove()">Refund</button>
    </div>
</template>

<script>
export default {
    name: "MysteryBag", 
    props: {
        item: Object,
        index: Number, 
    },
    methods: {
        remove() {
            this.$emit('remove', this.index); 
        }
    }
}
</script>

<style scoped>
.card {
    background-color: rgb(220, 226, 231);
    margin-right: 10vw;
    margin-bottom: 3vw;
    padding-bottom: 10vw;
    width: 13vw;
}
</style>
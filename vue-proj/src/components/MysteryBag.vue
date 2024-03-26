<template>
    <div class="card">
        <h3>{{ item.name }}</h3>
        <button @click="yes()">Open</button>
        <button @click="remove()">Refund</button>
    </div>
</template>

<script>
import { snapshots } from '@/views/SnapshotArr';

export default {
    name: "MysteryBag", 
    components: {  },
    props: {
        item: Object,
        index: Number, 
    },
    methods: {
        remove() {
            this.$emit('remove', this.index); 
        },
        yes() {
            let cardName = this.item.name
            let obj = snapshots.find((a) => a.name ==cardName)
            let lengths = obj.cards.length
            let num = Math.floor(Math.random() * lengths)
            let obj2 = obj.cards.find((a) => a.index == num)
            console.log(obj2)
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
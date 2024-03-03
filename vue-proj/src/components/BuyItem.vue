<template>
    <div>
        <button class="coolButton" @click="spent++, add()">Purchase</button>
        <p>Amount Purchased: {{ spent }}</p>
    </div>
</template>

<script>
import { items } from '@/views/ArrayStuff';
import { snapshots } from '@/views/SnapshotArr';

export default { 
    name: "BuyItem",
    components: {},
    data() {
        return {
            spent: 0,
            items: Array,
        }
    },
    props: {
        snapshots: Array, 
        snapshot: Object,
    },
    methods: {
        add() {
            console.log(this.snapshot.name);
            let bought = snapshots.filter(item => item.name == this.snapshot.name)
            items.push(bought)
            console.log(bought)
        }
    }
};



</script>

<style lang="scss" >

</style>
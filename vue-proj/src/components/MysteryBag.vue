<template>
    <div>
        <div class="card">
            <h3>{{ item.name }}</h3>
            <button @click="randomizer()">Open</button>
            <button @click="remove()">Refund</button>
        </div>
    </div>
    <div class="a"></div>
</template>

<script>
import { ref } from 'vue';
import { snapshots } from '@/views/SnapshotArr';

const random = ref({});

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
        randomizer() {
            let cardName = this.item.name
            let obj = snapshots.find((a) => a.name ==cardName) //the card that the user wants to open
            let lengths = obj.cards.length
            let num = Math.floor(Math.random() * lengths) //gets a random index value/number to filter by 
            let obj2 = obj.cards.find((a, index) => { //looking in the cards array to find the value with the generated index
                return index == num
            })
            random.value = obj2
            console.log(random.value)
            this.$emit('remove', this.index) //removes mysterybag card
            let h = random.value.cardName
            let stuff = document.querySelector(".a") 
            stuff.insertAdjacentHTML('afterbegin', 
            `<p>hi</p>`
            )
        },
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

.a {
    background-color: aliceblue;
    position: relative;
}

</style>
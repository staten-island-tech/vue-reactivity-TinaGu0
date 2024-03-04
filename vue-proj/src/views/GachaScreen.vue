<template>
    <h1>Cards that you buy will appear here!</h1>
    <div class="parent">
        <MysteryBag v-for="(item, index) in items" :key="index" :item="item" :index="index" @remove="removeItem()" />
    </div>
</template>

<script>
import { reactive } from 'vue';
import MysteryBag from '../components/MysteryBag.vue';
import { items } from './ArrayStuff';

export default {
    name: "GachaScreen",
    components: {
        MysteryBag,
    },
    data() {
        return {
            items: reactive(items),
        };
    },
    methods: {
        removeItem(index) {
            this.items.splice(index, 1);
        }
    }
}
</script>

<style>
body {
    background-image: url("https://wallpapercave.com/wp/wp6371886.jpg");
    height: 100%;
    width: 100%; 
}

.parent {
    display: flex;
    flex-flow: row wrap;
    margin-left: 20%;
}
</style>
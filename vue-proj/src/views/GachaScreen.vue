<template>
    <h2>Gamble away your life savings</h2>
    <div class="parent">
        <MysteryBag v-for="item in items" :key="index" :item="item" />
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
}
</style>
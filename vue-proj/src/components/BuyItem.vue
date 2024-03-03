<template>
    <div>
        <button class="coolButton">{{ Snapshot.price }}</button>
    </div>
</template>

<script>

export default { 
    name: "BuyItem",
    props: {
        Snapshot: Object,
    }
};


</script>

<style lang="scss" >

</style>
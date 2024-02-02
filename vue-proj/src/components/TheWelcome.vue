<template>
  <div>
    <h1 v-if="answer">Correct</h1>
    <h1 v-else>Incorrect</h1>
    <h3 v-for="animal in animals" :key="animal">{{ animal }}</h3>
  </div>
</template>

<script setup>
const answer = true;
const animals =["ape", "zebra", "monkey"];
</script>
<style scoped>

</style>
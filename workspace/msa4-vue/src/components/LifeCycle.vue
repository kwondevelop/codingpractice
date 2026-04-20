<script setup>

import { onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated } from 'vue';

import { ref } from 'vue';

const count = ref(0);

onBeforeMount(() => {
  console.log('onBeforeMount', count.value);
});

onMounted(() => {
  count.value++;
  console.log('onMounted', count.value);
});

onBeforeUpdate(() => {
  console.log('onBeforeUpdate');
});

onUpdated(() => {
  console.log('onUpdated');
});

onBeforeUnmount(() => {
  console.log('onBeforeUnmount');
});

onUnmounted(() => {
  console.log('onUnmounted');
});

</script>

<template>

  <h1>라이프 사이클 : {{ count }}</h1>
  <button type="button" @click="count++">증가</button>

</template>

<style>

</style>
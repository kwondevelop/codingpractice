<script setup>
  
  import { useCounterStore } from '../stores/useCounterStore.js';

  const counterStore = useCounterStore();

</script>

<template>

  <h1>피니아 테스트 {{ counterStore.count }}</h1>
  <h1>카운트 게터 {{ counterStore.getOnePlusCount }}</h1>

  <button type="button" @click="counterStore.addCount(10)">액션</button>

</template>

<style>

</style>
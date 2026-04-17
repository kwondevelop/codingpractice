<script setup>

import { ref } from 'vue';

const count = ref(0);

function resetCount() {
  count.value = 0;
}

</script>

<template>

  <h1>이벤트 핸들링 {{ count }}</h1>

  <button type="button" @click="count++">인라인 핸들러</button>

  <button type="button" @click="resetCount">메소드 핸들러</button>
  
  <input type="text" @keydown.up="count++" v-model="count">

</template>

<style>

</style>
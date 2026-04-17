<script setup>

import { ref } from 'vue';

const flag = ref(true);

const number = ref(0);

setInterval(() => {
  number.value++;
}, 100);

</script>

<template>

<button type="button" @click="flag = !flag">ON / OFF</button>

<h1 v-show="flag">그린 코딩 쇼</h1>

<h1 v-if="number % 3 === 0" style="color: red;">첫 충전 시 3만원 보너스 혜택</h1>

<h1 v-else-if="number % 2 === 0" style="color: blue;">첫 충전 시 3만원 보너스 혜택</h1>

<h1 v-else-if="number % 5 === 0" style="color: yellow;">첫 충전 시 3만원 보너스 혜택</h1>

<h1 v-else>첫 충전 시 3만원 보너스 혜택</h1>

<button type="button">지금 가입하기</button>

</template>

<style>

</style>
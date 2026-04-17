<script setup>

import { ref, watch } from 'vue';

// 반응형 속성이 변경될 때마다 감지하고 특정 로직을 실행
const email = ref('');
const flagEmail = ref(true);
const flagIsExecuted = ref(true);
const pw = ref('');
const pwClass = ref('');

watch(pw, () => {
  if(pw.value.includes('@')) {
    pwClass.value = 'outline-green';
  } else {
    pwClass.value = 'outline-yellow'
  }
})

watch(email, () => {
if(email.value.includes('@')) {
  flagEmail.value = true;
  } else {
    flagEmail.value = false;
  }
  flagIsExecuted.value = true;
});

</script>

<template>

  <h1>감시자</h1>
    <div v-if="flagIsExecuted">
      <span v-if="flagEmail">O</span>
      <span v-else>X</span>
    </div>
    <input type="text" v-model="email">
    <input type="text" v-model="pw" :class="pwClass">

</template>

<style>
  
  input {
    outline: none;
  }
  .outline-green {
    border: 2px solid blue;
  }
  .outline-yellow {
    border: 2px solid yellow;
  }

</style>
<script setup>

// 자식 컴포넌트에서는 defineProps()를 이용해 넘어온 데이터 선언
// 이때 부모 컴포넌트에서 넘겨줄 때 사용한 키를 사용해 선언
// 데이터 타입도 지정

// const Props = defineProps({
//   'count' : Number,
//   'page' : Number,
// });

defineProps(['count', 'page']);

</script>

<template>

  <h1>{{ page }} 프롭스 자식 컴포넌트 : {{ count }}</h1>
  <button type="button" @click="$emit('minusCount')">자식 감소</button>

</template>

<style scoped>

</style>
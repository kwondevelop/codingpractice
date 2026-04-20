<script setup>

// 템플릿 컨텐츠를 부모 컴포넌트에서 자식 컴포넌트에 전달하고, 자식 컴포넌트에서 렌더링
// 자식 컴포넌트에서는 출력하고 싶은 위치에 <slot> 태그를 작성

import SlotChild from './SlotChild.vue';
import { ref } from 'vue';
const count = ref(0);
const count2 = ref(0);

</script>

<template>

<h1>슬롯</h1>

<button type="button" @click="count++">보내줄 슬롯 +</button>
<button type="button" @click="count2++">보냈던 슬롯 +</button>

<SlotChild>
  <h2>보내줄 슬롯 : {{ count }}</h2>
  <h2>보냈던 슬롯 : {{ count2 }}</h2>
</SlotChild>

</template>

<style>

</style>
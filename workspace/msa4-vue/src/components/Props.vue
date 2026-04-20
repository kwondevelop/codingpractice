<script setup>

// 부모 컴포넌트에서 자식 컴포넌트로 데이터를 전달하는 사용자 정의 속성
// 기본 Readonly, 단방향 데이터 바인딩을 형성

import { ref } from 'vue';
import PropsChild from './PropsChild.vue';
const count = ref(0);

// Component Event : 컴포넌트 이벤트
// `$emit` 메소드를 사용해서 부모 컴포넌트와 자식 컴포넌트 간에 이벤트를 수신 or 발신
// 부모 컨테이너는 `v-on`을 사용하여 수신
// `@이벤트명="실행할 JS 코드"` 자식 컴포넌트 태그 속성으로 추가
// 자식 컴포넌트에서는 `$emit('이벤트명')` 으로 발신
// argument가 복수일 경우 가변 파라미터로 작성 `$emit('이벤트명', [,...argument])`

function minusCount() {
  count.value--;
}

</script>

<template>
  
  <h1>프롭스 : {{ count }}</h1>
  <button type="button" @click="count++">부모 증가</button>

  <!-- 자식 컴포넌트에 `키명="값"` 으로 이루어진 props 속성 부여 -->
  <PropsChild :count="count" :page="1" @minusCount="minusCount"/>
  
</template>

<style scoped>

</style>
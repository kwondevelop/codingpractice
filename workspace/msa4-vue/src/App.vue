<script setup>
  // JS 코드 작성 부분
  import DataBinding from './components/DataBinding.vue';
  import EventHandling from './components/EventHandling.vue';
  import ConditionalRendering from './components/ConditionalRendering.vue';
  import ListRendering from './components/ListRendering.vue';
  import Watchers from './components/Watchers.vue';
</script>

<template>
  <!-- HTML 작성 부분 -->
  <DataBinding v-if="false"/> <!-- 조건부 렌더링 -->
  <EventHandling v-if="false"/>
  <ConditionalRendering v-if="false"/>
  <ListRendering v-if="false"/>
  <Watchers/>
</template>

<style>
  /* CSS 작성 부분 */
</style>
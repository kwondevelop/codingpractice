<script setup>

  import { ref } from 'vue';

  import MgHeader from './components/MgHeader.vue';

  import MgList from './components/MgList.vue';
  
  import MgDetail from './components/MgDetail.vue';

  import PiniaTest from './components/PiniaTest.vue';

  const mainComponentList = ['MgList', 'MgDetail'];

  const selectedMainComponent = ref('MgList');

  function changeComponent(selectedComponent) {
    selectedMainComponent.value = selectedComponent;
  }

</script>

<template>

  <PiniaTest/>

  <MgHeader/>
  
  <div class="main">
    <!-- 현재 라우터 컴포넌트를 어디에 렌더링 할지 위치를 설정 -->
    <RouterView/>
  </div>

</template>

<style scoped>

.main {
  display: flex;
  flex-direction: column;
  align-items: center;
}

</style>
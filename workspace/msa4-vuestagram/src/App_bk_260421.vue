<script setup>

  import { ref } from 'vue';

  import MgHeader from './components/MgHeader.vue';

  import MgList from './components/MgList.vue';
  
  import MgDetail from './components/MgDetail.vue';

  const mainComponentList = ['MgList', 'MgDetail'];

  const selectedMainComponent = ref('MgList');

  function changeComponent(selectedComponent) {
    selectedMainComponent.value = selectedComponent;
  }

</script>

<template>

  <MgHeader/>
  
  <div class="main">
    <MgList
    :componentNameMgDetail="mainComponentList[1]"
    @changeComponent="changeComponent" 
    v-if="selectedMainComponent === mainComponentList[0]"
    />
    <MgDetail v-else-if="selectedMainComponent === mainComponentList[1]"/>
  </div>

</template>

<style scoped>

.main {
  display: flex;
  flex-direction: column;
  align-items: center;
}

</style>
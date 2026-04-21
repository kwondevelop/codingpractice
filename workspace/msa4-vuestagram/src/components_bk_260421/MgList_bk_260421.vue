<script setup>

import { ref, onBeforeMount } from 'vue';

import axios from 'axios';

const boardList = ref([]);

onBeforeMount(getBoardList);

async function getBoardList() {
  try {
    const res = await axios.get('/data/boards.json');
    console.log(res);
    boardList.value.push(...res.data);
  } catch(error) {
    console.error(error);
  }
}

const props = defineProps({
  'componentNameMgDetail': String,
})

const emit = defineEmits('changeComponent');

</script>

<template>

  <div class="container">
    <div class="card" v-for="item in boardList" 
    :key="item.id" 
    :style="{backgroundImage: `url('${item.img}')`}" 
    @click="emit('changeComponent', props.componentNameMgDetail)">
    </div>
  </div>

  <button type="button" class="button button-big button-gray" @click="getBoardList">Show more posts from OSHI</button>

</template>

<style scoped>

.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  width: 100%;
  padding: 20px 5px;
  gap: 10px;
}

.card {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 15px;
  padding-top: 70%;
}

</style>
<script setup>

import { ref, onBeforeMount } from 'vue';

import axios from 'axios';

import { useRouter } from 'vue-router';

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

// 라우터 사용 준비
const router = useRouter();
function pushShow(id) {
  router.push(`/show/${id}`);
}

</script>

<template>

  <div class="container">
    <div class="card"
    v-for="item in boardList" 
    :key="item.id" 
    :style="{backgroundImage: `url('${item.img}')`}" 
    @click="pushShow(item.id)">
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
  cursor: pointer;
}

</style>
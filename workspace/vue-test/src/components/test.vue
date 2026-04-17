<script setup>

import { ref } from 'vue';

import axios from 'axios';

const card = ref([]);

let page = 1;

async function getPicsum() {
  const res = await axios.get(`https://picsum.photos/v2/list?page=${++page}&limit=3`);
  card.value.push(...res.data);
}

function reset() {
  card.value = [];
  page = 1;
}

</script>

<template>

  <h1>한번에 3개씩만 획득하기</h1>

  <button @click="getPicsum" class="btn btn-yellow">소환</button>

  <button @click="reset" class="btn btn-green">초기화</button>

  <div class="card-container">
    <div v-for="item in card" :key="item.id" class="card">
      <div class="card-img" :style="{ backgroundImage: `url('${item.download_url}')` }"></div>
      <span>{{ item.author }}</span>
    </div>
  </div>
  
</template>

<style>

* {
  margin : 0;
  padding: 0;
  box-sizing: border-box;
}

.btn {
  background-color: black;
  border: 3px solid;
  font-size: 15px;
  font-weight: bold;
  margin: 5px;
  padding: 10px 50px;
  cursor: pointer;
}

.btn-yellow { color: yellow; border-color: red; }
.btn-green { color: lightgreen; border-color: blue; }

.card-container {
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 10px;
}

.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
}

.card-img {
  padding-top: 60%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

</style>
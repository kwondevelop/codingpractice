<script setup>

import axios from 'axios';
import { ref } from 'vue';

// const arr = [21, 22, 23, 24, 25]

const data = ref([]);

async function getPicsum() {
  try {
    const url = 'https://picsum.photos/v2/list?page=4&limit=2';
    const res = await axios.get(url);
    data.value = (res.data);
  } catch(error) {
    console.error(error);
  }
}
getPicsum();

</script>

<template>

<h1>리스트 렌더링</h1>

<div class="container">
  <div class="card" v-for="item in data" :key="item.id">
    <div class="card-img" :style="{backgroundImage: `url('${item.download_url}')`}"></div>
    <span>{{ item.author }}</span>
  </div>
</div>

<!-- <div v-for="value in 5">
  <p>{{ value }}회</p>
</div>

<br>

<div v-for="value in 5">
  <p>{{ value }}</p>
</div>

<br>

<div v-for="(value, key) in arr" :key="key">
  <p>{{ value }}</p>
</div> -->

</template>

<style scoped>

.container {
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
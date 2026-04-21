<script setup>

import { ref, onBeforeMount } from 'vue';

import axios from 'axios';

const board = ref({});

onBeforeMount(async () => {
  try {
    const res = await axios.get('/data/board.json');
    board.value = res.data;
  } catch(error) {
    console.error(error);
  }
});

</script>

<template>

  <div class="container">
    <div class="img" style="background-image: url('/dev/호시노루비.png');"></div>
    <span class="author">작성자 : ???</span>
    <span class="content">내용</span>
  </div>

</template>

<style scoped>
  
  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    padding: 20px 5px;
    gap: 10px;
  }

  .img {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    padding-top: 100%;
  }

  .content {
    font-size: 20px;
    font-weight: 900;
  }

</style>
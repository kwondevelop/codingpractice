<script setup>

import axios from 'axios';
import { onBeforeMount, ref} from 'vue';
import { useBoardDetailStore } from '../stores/useBoardDetailStore';

const boardDetailStore = useBoardDetailStore();
onBeforeMount(boardDetailStore.getBoard);

</script>

<template>

  <!-- 
      `v-if="board"` 사용 이유 : 데이터가 없는 상태에서 렌더링 시,
      에러 발생 가능성이 있어서 데이터가 있을 때만 렌더링하도록 유도하기 위함 
  -->
  <div class="container" v-if="boardDetailStore?.board">
    <div class="img" :style="{backgroundImage: `url('${boardDetailStore.board.img}')`}"></div>
    <span class="author">작성자 : {{boardDetailStore.board.writer}}</span>
    <span class="content">{{boardDetailStore.board.content}}</span>
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
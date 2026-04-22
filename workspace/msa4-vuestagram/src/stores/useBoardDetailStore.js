import { defineStore } from "pinia";
import axios from "axios";
import { ref } from 'vue';
import { useRoute } from 'vue-router';

export const useBoardDetailStore = defineStore('boardDetail', () => {
  const board = ref(null);
  const route = useRoute();
  
  async function getBoard() {
    try {
      const res = await axios.get('/data/boards.json');
      const boardId = parseInt(route.params.id);
      board.value = res.data.find(item => item.id === boardId) || null;
      console.log('로드된 게시물:', board.value);
    } catch(error) {
      console.error('게시물 로드 실패:', error);
    }
  }

  return {
    board,
    getBoard,
  }
});
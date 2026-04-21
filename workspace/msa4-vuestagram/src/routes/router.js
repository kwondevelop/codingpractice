import MgList from "../components/MgList.vue";
import MgDetail from "../components/MgDetail.vue";
import { createRouter, createWebHistory } from "vue-router";

// 라우터 정의
const routes = [
  {
    path: '/',
    component: MgList,
  },
  {
    // 세그먼트 파라미터 (아래 주소 `:id` 이 부분)
    // 내가 사용해야 하는 데이터를 path의 한 부분으로 작성하여,
    // 파라미터를 전송하는 방법
    // 세그먼트 파라미터명은 자유롭게 작성하되, 되도록 알기 쉬운 단어로 설정
    path: '/show/:id',
    component: MgDetail,
  },
];

// 라우터 객체 생성
const router = createRouter({
  history: createWebHistory(),
  routes, 
});

export default router;
<script setup>
  // JS 코드 작성 부분
  import { ref, reactive } from 'vue';

  // ref()
  // 타입 제한 없이 사용할 수 있으나, 프라이미티브 타입에 반응적 참조를 위해 사용
  // 프라이미티브 타입에 좀 더 나은 성능을 제공
  const count = ref(0);
  // ref 객체의 경우 js에서 접근 시, 해당 값은 ref.value 프로퍼티로 접근
  console.log(count.value);

  function add() {
    count.value++;
  }

  // reactive()
  // 객체만 사용 가능하고, 해당 객체의 반응적 참조를 위해 사용
  const info = reactive({
    name: 'kwon',
    age: 25
  })
  console.log(info.name);
  const color = ref('red');

  function btnToggle() {
    if(color.value === 'red') {
      color.value = 'blue';
    } else {
      color.value = 'red'
    }
  }

  const id = ref('');
</script>

<template>
  <!-- HTML 작성 부분 -->
  <!-- HTML 요소와 Vue 인스턴스의 데이터를 동적으로 연결하는 기능 -->
  <!-- template에서는 해당 객체명 만으로 값에 접근이 가능하다 -->

  <h1>데이터 바인딩 {{ count }}</h1>
  <button type="button" @click="count++">증가</button>
  <button type="button" @click="count--">감소</button>

  <!-- 태그 속성명 앞에 `:`을 붙이고, 속성 값에 데이터 바인딩 객체를 사용 -->
  <h3>{{ info.name + " : " + info.age }}</h3> <!-- 리터럴 가능 `{info.name}` -->
  
  <h3 :class="color">태그 속성 값 데이터 바인딩</h3>
  <button type="button" @click="btnToggle">색깔 토글</button>
  
  <!-- 양방향 데이터 바인딩 -->
  <input type="text" v-model="id">
  <p>{{ id }}</p>
</template>

<style>
  /* CSS 작성 부분 */
  .red {
    color: red;
  }
  .blue {
    color: blue;
  }
</style>
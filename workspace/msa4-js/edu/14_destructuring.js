// Destructuring(구조 분해) 문법
// 배열이나 객체에서 값을 추출하여 변수에 바로 할당하는 문법
const arr = [1, 2, 3, 4, 5];
// let arrVal1 = arr[0];
// let arrVal2 = arr[1];

// const [val1, val2, val3, val4, val5] = arr;
// 필요한 값만 추출 가능
// const [val1, , , , val5] = arr;
const [val1, val2] = arr;

const user = {
  name : '홍길동',
  age : 350,
  gender : 'null',
  addr : '평양시',
  info : {
    board : 1,
  }
}

const age = 0;
const { age : userAge, gender, addr = '주소 없음', info } = user;
console.log(addr);
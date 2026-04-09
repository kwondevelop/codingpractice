// 원본을 보존하면서 오름차순으로 정렬 해주세요.
const ARR1 = [ 6, 3, 5, 8, 92, 3, 7, 5, 100, 80, 40 ]; // sort
const NewARR1 = [...ARR1]
NewARR1.sort((a, b) => a - b);
console.log(NewARR1);

// 짝수와 홀수를 분리해서 각각 새로운 배열 만들어 주세요.
const ARR2 = [ 5, 7, 3, 4, 5, 1, 2, 0 ]; // filter
const JJAK = ARR2.filter((val) => val % 2 === 0);
const HOL = ARR2.filter((val) => val % 2 === 1);
console.log(JJAK, HOL);

// 각 요소에 3으로 나눈 나머지를 구해서, 새로운 배열로 생성해 주세요.
const ARR3 = [ 5, 7, 3, 4, 5, 1, 2, 0];
console.log(ARR3.map(val => val % 3));
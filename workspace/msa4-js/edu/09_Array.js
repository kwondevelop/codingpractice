// // 배열(Array) 객체
// // 하나의 변수에 여러 값을 순차적으로 저장할 수 있는 데이터 구조
// // 데이터 타입은 object
// // 배열의 크기가 동적으로 변화 가능
// // 인덱스(index) 번호가 각 요소에 부여되고 이를 이용해서 순서를 정함
// // 반복문을 통해 배열의 각 요소에 쉽게 접근 가능

// const arr1 = [1, 2, 3, 4, 5];
// console.log(arr1[4]);

// // length : 배열의 길이를 반환
// console.log(arr1.length);
// const obj = {
// // 속성(property) : 객체 안에 선언한 변수
//   length : 1,
// // 메소드(method) : 객체 안에 선언한 함수
//   function : () => {
//     console.log('Hello');
//   }
// }

// // Array.isArray(arg) : boolean
// // 배열 객체인지 아닌지 체크
// console.log(Array.isArray(arr1)); // true
// console.log(Array.isArray('어레이')); // false

// // Array.includes(searchElement) : boolean
// // 배열에 특정 요소 존재 여부 체크 후 true/false 반환
// console.log(arr1.includes(5)); // true
// console.log(arr1.includes(100)); // false

// // 강사님의 깜짝 퀴즈😋
// // 배열 [2, 4, 5, 6, 9]이 있다
// // 여기서 특정 요소가 있는지 확인하고 true/false를 반환하는
// // `myIncludes`라는 이름의 함수를 만들어보자
// // 특정 요소 : 1, 2
// const myArr = [4, 2, 7, 9, 6, 1, 5, 3, 8];
// function myIncludes(search, arr) {
// for(let i = 0; i < arr.length; i++)
//   if(search === arr[i]) {
//     return true;
//   }
//   return false;
// }
// console.log(myIncludes(1, myArr));
// console.log(myIncludes(2, myArr));

// // 강사님의 풀이🤪
// const idx = [4, 2, 7, 9, 6, 1, 5, 3, 8];
// let target = 10;
// let result = false;
// for(let i = 0; i < idx.length; i++) {
//   if(target === idx[i]) {
//     result = true;
//     break;
//   }
// }
// console.log(result);

// // 강사님의 또 다른 풀이😲
// // 함수 버전
// function myIncludes2(arr, search) {
//   let result = false;
//   for(let idx = 0; idx < arr.length; idx++) {
//     if(search === arr[idx]) {
//       return true;
//     }
//   }
//   return result;
// }
// console.log(`마이어레이: ${myIncludes2(myArr, 100)}`);
// console.log(`리터럴어레이:${myIncludes2([5, 4, 3], 5)}`);

// // Array.indexOf(searchElement) : number
// // 배열에서 특정 요소를 검색하고, 해당 인덱스를 반환
// // 없으면 `-1` 반환
// let arr = ['고길동', '둘리', '도우너'];
// console.log(arr.indexOf('고길동')); // 0
// console.log(arr.indexOf('둘리')); // 1
// console.log(arr.indexOf('셋리')); // -1
// console.log(arr.indexOf('넷리')); // -1
// console.log(arr.indexOf('도우너')); // 2

// // Array.push(...args) : number
// // 원본 배열에 마지막 요소를 추가하고, 변경된 length를 반환
// arr = [1, 2, 3];
// let arr2 = [...arr];
// let resultArr = arr2.push(5);
// console.log(resultArr, arr, arr2);

// let num = 1;
// let num2 = num;
// num2 = 3;
// console.log(num, num2);

// // Array.concat(...args) : T[]
// // 배열의 마지막 요소를 추가한 새로운 배열을 반환
// arr = [1, 2, 3];
// resultArr = arr.concat(4, 5, 6);
// console.log(arr, resultArr);

// // Array.pop() : T | undefined ** 원본 변경 **
// // 원본 배열에서 마지막 요소를 제거하고, 제거된 요소를 반환
// arr = [1, 2, 3];
// resultArr = arr.pop();
// console.log(arr, resultArr);

// // Array.unshift(...args) : number ** 원본 변경 **
// // 원본 배열의 첫 번째 요소를 추가하고, 변경된 length를 반환
// arr = [1, 2, 3];
// resultArr = arr.unshift(100, 200, 300);
// console.log(arr, resultArr);

// // Array.shift() : T | undefined ** 원본 변경 **
// // 원본 배열에서 첫 번째 요소를 제거하고, 제거된 요소를 반환
// arr = [1, 2, 3];
// resultArr = arr.shift();
// console.log(arr, resultArr);

// // Array.splice(start, count, ...args) : T[] ** 원본 변경 **
// // 원본 배열에서 특정 위치에 요소를 추가하거나 제거하는 메소드
// // start : 변경을 시작할 인덱스
// // count : 제거할 요소의 개수
// // args : 추가할 요소들

// // 1. start만
// // start 인덱스가 양수일 경우
// // start 인덱스 요소부터 모두 제거, 제거한 요소들을 배열로 반환
// // start 인덱스가 음수일 경우
// // 끝에서 start 인덱스 요소까지 모두 제거, 제거한 요소들을 배열로 반환
// arr = [1, 2, 3, 4, 5];
// resultArr = arr.splice(2);
// console.log(arr, resultArr);
// arr = [1, 2, 3, 4, 5];
// resultArr = arr.splice(-2);
// console.log(arr, resultArr);

// // 2. start, count
// // start 인덱스 요소부터 count 개수만큼 제거, 제거한 요소들을 배열로 반환
// arr = [1, 2, 3, 4, 5];
// resultArr = arr.splice(2, 2);
// console.log(arr, resultArr);

// // 3. start, count, ...args
// // start 인덱스 요소부터 count 개수만큼 제거, 제거한 요소들을 배열로 반환
// // start 인덱스에 args 요소들을 추가
// arr = [1, 2, 3, 4, 5];
// resultArr = arr.splice(2, 1, 100, 200, 300);
// console.log(arr, resultArr);

// Array.join(separator) : string
// 배열의 요소를 구분자로 연결한 문자열을 만들어서 반환
// 배열의 요소가 없으면 빈 문자열을 반환
// separator : 요소 사이에 삽입할 문자열, 생략 시 쉼표(,)가 기본값
arr = [1, 2, 3, 4, 5];
resultArr = arr.join(' 더하기 ');
console.log(arr, resultArr);
//
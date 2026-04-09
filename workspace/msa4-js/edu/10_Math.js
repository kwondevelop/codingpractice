// 수학(Math) 객체
// 수학적인 처리를 하기 위한 속성과 메소드를 가진 내장 객체
// number 타입만 지원

// Math.ceil(arg), Math.round(arg), Math.floor(arg)
// 올림, 반올림, 버림
Math.ceil(0.5); // 1
Math.round(0.5); // 1
Math.floor(0.5); // 0

Math.ceil(1); // 1

// Math.min(...args), Math.max(...args)
// 가장 작은 요소, 가장 큰 요소를 반환하는 메소드
Math.min(1, 2, 3, 4); // 1
let arr1 = [1, 2, 3, 4, 5];
Math.min(...arr1); // 1
let resultMax = Math.max(...arr1); // 5
console.log(resultMax);

// Math.abs(arg) : number
// 절대값 반환
Math.abs(1); // 1
Math.abs(0); // 0
Math.abs(-1); // 1
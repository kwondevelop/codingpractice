// 데이터 타입 : 여러 종류의 데이터를 식별하는 분류 체계
// JS는 하나의 변수에 어떤 타입의 데이터든 저장이 가능하다
let num = 1;
num = '111';

// number(num) : 숫자
// let num = 1;
// num : 변수 / 1 : 숫자(형식의) 리터럴(literal)
// 리터럴(literal) : 고정된 값을 의미하는 데이터
// 근데 변수명에 num이 있다고 해서 무조건 숫자가 아님, 그냥 진짜 이름만 num인 것 뿐
// 결국 리터럴 값에 의해 결정이 되는 것

// string(str) : 문자열
let str1 = '문자열';
let str2 = "문자열";
let str3 = `문자열 ${num}`; // 템플릿 리터럴 : 변수에 저장된 값을 이용해 문자열을 합칠때 사용

let id = '아이디';
let pw = '비밀번호';
let msg = '가 틀렸는데, 그거 하나 똑바로 입력 못해요? 어휴...';
`${id}${msg}`; // '아이디가 틀렸는데, 그거 하나 똑바로 입력 못해요? 어휴...'
`${pw}${msg}`; // '비밀번호가 틀렸는데, 그거 하나 똑바로 입력 못해요? 어휴...'

// boolean : 논리값, 참(true)과 거짓(false)을 나타내는 데이터
let bool1 = true;
let bool2 = false;

// undefined : 변수는 선언했으나 값이 할당되지 않은 상태
let undef; // undefined

// null : 변수에 값이 없음을 명시적으로 나타내는 데이터
let nul = null; // null

// symbol : 절대 중복되지 않는 원시 타입(primitive type), 선언 시 고유한 식별자 생성
const symbol1 = Symbol('심볼');
// reference type(참조 타입) : 
// 객체(object), 배열(array), 함수(function) 등과 같이 메모리 주소를 참조하는 데이터 타입
// 인데 나중에

// object(객체) : 키(key)와 값(value)을 쌍으로 저장하는 참조 타입
let obj = {
  key1: 'value1'
} 
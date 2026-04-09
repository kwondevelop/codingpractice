// Date 객체
// 시간과 날짜를 처리하기 위한 속성과 메소드를 가진 내장 객체
// 내부적으로 Local Time Zone(로컬 타임 존)에 따른 UNIX Timestamp(유닉스 타임스탬프) 기반의 동작

const now = new Date(); // 현재 날짜와 시간
console.log(now); // 현재 날짜와 시간 출력

const date1 = new Date('1995-12-17 13:59:36'); // 특정 날짜 생성
console.log(date1); // 생성된 날짜 출력

const date2 = new Date(545652135);
console.log(date2); // 1970-01-06T07:00:52.135Z (UNIX Timestamp로 생성된 날짜 출력)

const date3 = new Date(1955, 11, 17, 3, 24, 0); // 1955년 12월 17일 03시 24분 00초 (월은 0부터 시작하므로 11은 12월을 의미)
console.log(date3); // 생성된 날짜 출력

// Date.getFullYear() : number
// 연도를 정수로 반환
console.log(now.getFullYear()); // 현재 연도 출력

// Date.getMonth() : number
// 월을 정수로 반환 (0부터 11까지, 0은 1월, 11은 12월)
console.log(now.getMonth()); // 현재 월 출력 (0부터 시작하므로 +1 필요)

// Date.getDate() : number
// 일을 정수로 반환 (1부터 31까지)
console.log(now.getDate()); // 현재 일 출력

// Date.getHours() : number
// 시를 정수로 반환 (0부터 23까지)
console.log(now.getHours()); // 현재 시 출력

// Date.getMinutes() : number
// 분을 정수로 반환 (0부터 59까지)
console.log(now.getMinutes()); // 현재 분 출력

// Date.getSeconds() : number
// 초를 정수로 반환 (0부터 59까지)
console.log(now.getSeconds()); // 현재 초 출력

// Date.getTime() : number
// 1970년 1월 1일 00:00:00 UTC로부터의 밀리초를 정수로 반환
console.log(now.getTime()); // 현재 시간의 UNIX Timestamp 출력

// Date.getDay() : number
// 요일을 정수로 반환 (0부터 6까지, 0은 일요일, 6은 토요일)
console.log(now.getDay()); // 현재 요일 출력 (0부터 시작하므로 +1 필요)

let nowFormat = `${now.getFullYear()}년 ${now.getMonth() + 1}월 ${now.getDate()}일 ${now.getHours()}시 ${now.getMinutes()}분 ${now.getSeconds()}초`;
console.log(nowFormat); // 현재 날짜와 시간을 포맷팅하여 출력

const now2 = dayjs(); // dayjs 라이브러리를 사용하여 현재 날짜와 시간 생성
console.log(now2.format('YYYY-MM-DD-HH-mm-ss')); // dayjs를 사용하여 현재 날짜와 시간을 포맷팅하여 출력
let food = '마라탕';

// switch (검증 대상)
switch(food) {
// case 일치 검증 값
  case '마라샹궈' :
// 실행 할 처리
    console.log(`${food}와 조리 방식이 달라요`);
    break;
  case '훠궈' :
    console.log(`${food}와 비슷하지만 먹는 방식이 달라요`);
    break;
  case '마라탕' :
    console.log('맞아요, 바로 내가 먹고 싶던 음식이었습니다');
    break;
  default :
    console.log('먹는 것으로 장난치지 마세요');
}
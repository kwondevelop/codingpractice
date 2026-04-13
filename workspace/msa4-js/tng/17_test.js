// 1.`버튼` 클릭시 아래 문구 알러트로 출력
// 	안녕하세요.
// 	숨어있는 div를 찾아주세요.

// 2. 숨어있는 div에 마우스가 진입하면 아래 문구 알러트 출력
// 	- 두근두근

// 3. 숨어있는 div를 마우스로 클릭하면 아래 문구 알러트 출력 및 나타나기
// 	- 들켰다

// 4. 들킨 div에는 마우스가 진입해도 두근두근이 뜨지 않습니다.

// 5. 나타난 div를 다시 클릭하면 아래 문구 알러트 출력 및 사라지기
// 	- 숨는다

// 6. 다시 숨은 div에 마우스가 진입하면 아래 문구 알러트 출력
// 	- 두근두근

// -- 보너스 문제 --
// 다시 숨을 때 랜덤한 위치로 이동

// -------------------------------------------------------------------

// 숨겨진 박스 요소를 가져옴
const box = document.querySelector('#img');

// 박스를 화면 내 랜덤 위치로 이동시키는 함수
function moveRandom() {
  // 화면 너비 안에서 랜덤 x 좌표 생성 (박스가 밖으로 안 나가게 보정)
  const x = Math.random() * (window.innerWidth - box.offsetWidth);
  
  // 화면 높이 안에서 랜덤 y 좌표 생성
  const y = Math.random() * (window.innerHeight - box.offsetHeight);
  
  // position 설정
  box.style.position = 'fixed';
  
  // 계산된 좌표를 박스의 위치로 적용
  box.style.left = x + 'px';
  box.style.top = y + 'px';
}

// DOM이 모두 로드된 후 실행 (초기 위치 설정)
document.addEventListener('DOMContentLoaded', () => {
  moveRandom(); // 처음 시작할 때 박스를 랜덤 위치로 이동
});

// 시작 버튼 요소 가져오기
const startBtn = document.querySelector('#startBtn');

// 시작 버튼 클릭 시 실행
startBtn.addEventListener('click', () => {
  alert('안녕, 날 찾아봐~'); // 안내 메시지 출력
  moveRandom(); // 박스를 다시 랜덤 위치로 이동
});

// 박스가 현재 "찾힌 상태인지"를 저장하는 변수
// false = 아직 안 찾음 / true = 찾음
let find = false;

// 마우스가 박스에 올라갔을 때 실행
box.addEventListener('mouseenter', () => {
  // 아직 찾지 못한 상태일 때만 실행
  if (!find) {
    alert('두근두근'); // 긴장감 메시지 출력
  }
});

// 박스를 클릭했을 때 실행
box.addEventListener('click', () => {
  // 아직 찾지 못한 상태라면
  if (!find) {
    find = true; // 상태를 "찾음"으로 변경
    alert('들켰다'); // 들킨 메시지 출력
    box.style.opacity = '1'; // 박스를 보이게 함
  } else {
    // 이미 찾은 상태라면
    find = false; // 상태를 다시 "숨김"으로 변경
    alert('숨는다'); // 숨는 메시지 출력
    box.style.opacity = '0'; // 다시 안 보이게 만듦
    moveRandom(); // 숨을 때 새로운 랜덤 위치로 이동
  }
});
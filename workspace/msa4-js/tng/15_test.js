// 사과 게임 위에 장기 삽입
// 어메이징브릭에 베이지 배경색 추가
// 리스트의 요소들의 글자색을 짝수는 빨강, 홀수는 파랑으로 수정

// <ul id="ul">
// 	<li class="none-li">수박게임</li>
// 	<li class="none-li">지뢰찾기</li>
// 	<li>스페이스</li>
// 	<li id="apple" class="none-li">사과게임</li>
// 	<li class="none-li">체스</li>
// 	<li class="none-li">테트리스</li>
// 	<li class="none-li">고군분투</li>	
// 	<li class="none-li">죽림고수</li>
// 	<li class="none-li">어메이징브릭</li>
// </ul>

const janggi = document.createElement('li');
janggi.textContent = '장기';
const ul = document.querySelector('#ul');
ul.insertBefore(janggi, document.querySelector('#apple'));

const li = document.querySelector('#ul li:last-child');
li.style.backgroundColor = 'beige';

function setLineColor() { // 스타크래프트 추가 후 색상 부여
const li_color = document.querySelectorAll('li');
li_color.forEach((li, color) => {
  // if(color % 2 === 0) {
  if((color + 1) % 2 === 0) {
    li.style.color = 'red';
  } else {
    li.style.color = 'blue';
  }
});
}
setLineColor();

// color가 index인데 컴퓨터에서 index는 0부터 시작하므로 
// red와 blue의 위치를 변경
// 0 - 짝수
// 1 - 홀수
// 2 - 짝수
// . . .

// 또는 color에 +1을 주어서 처음부터 인덱스 값을 올림
// 그러므로 red와 blue의 위치가 다시 변경되어야함

// 요소 추가 시 주의 사항
const starcraft = document.createElement('li');
starcraft.textContent = '스타크래프트';
ul.insertBefore(starcraft, document.querySelector('#apple'));
setLineColor();
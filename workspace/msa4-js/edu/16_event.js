// Event 이벤트
// 웹 페이지에서 유저의 행위에 따라 특정 처리를 실행할 수 있는 기능

// inline 방식
// 이벤트 대상인 요소의 속성으로 이벤트를 지정하는 방법
// HTML 문서에 JS가 혼재되므로 관리 상의 문제가 발생

// property Listener 방식
// DOM을 이용하여 해당 노드에 이벤트 property를 통해 지정하는 방법
// const btn1 = document.querySelector('button');
// btn1.onclick = () => {
//   alert('프로퍼티 리스너');
// }

// addEventListener 방식
// DOM 요소에 이벤트 리스너를 추가하는 가장 현대적인 방법으로 권장
// 동일한 이벤트를 여러번 사용 가능
const btnNow = document.querySelector('#btnNow');
btnNow.addEventListener('click', () => {
  alert('첫번째 클릭 이벤트');
});
btnNow.addEventListener('click', () => {
  alert('두번째 클릭 이벤트');
});

// window.addEventListener('scroll', () => {
//   console.log('스크롤 실행');
// });
window.addEventListener('scroll', printScroll);

// removeEventListener 방식
// DOM 요소에 추가된 이벤트를 제거하는 방법
// window.removeEventListener('scroll', printScroll);
// 문제 : 처음에는 스크롤 이벤트가 살아 있다가,
// 삭제 버튼을 눌렀을 때, window의 스크롤 이벤트가 제거 되도록 수정해 봅시다

const btnDelete = document.querySelector('#btnDelete');
btnDelete.addEventListener('click', () => {
  window.removeEventListener('scroll', printScroll);
});

function printScroll() {
  console.log('스크롤 실행');
}

// 이벤트 객체
// 이벤트가 발생 했을 때 해당 이벤트에 대한 정보를 포함하는 객체
const btnObj = document.querySelector('#btnObj');
btnObj.addEventListener('click', e => {
  console.log(e);
  e.target.textContent = 'XXXXX';
});

function eventInformation(e) {
  console.log(e);
}

const container = document.querySelector('.container');
container.addEventListener('scroll', eventInformation);
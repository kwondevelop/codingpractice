// 요소 선택

const titleElement = document.getElementById('title');
titleElement.style.color = 'blue';

// document.getElementsByTagName('tagName') : 요소의 태그명으로 선택
// 해당 요소들을 HTMLCollection 객체로 반환
const tagElement = document.getElementsByTagName('h1');

for(let i = 0; i < tagElement.length; i++) {
    tagElement[i].style.color = 'red';
}

// document.getElementsByClassName(ClassName) : 요소의 클래스명으로 선택
// 해당 요소들을 HTMLCollection 객체로 반환
const classElement = document.getElementsByClassName('title2');

// *** 매우 중요 ***
// document.querySelector(selector) : CSS 선택자로 요소를 선택
// 선택된 요소가 복수일 경우, 가장 첫 번째 요소만 선택
const queryId = document.querySelector('#title');
queryId.style.color = 'skyblue';
const queryType = document.querySelector('.title2');
queryType.style.color = 'pink';

// *** 매우 중요 *** (얘는 현업에서 사용함)
// document.querySelectorAll(selector) : CSS 선택자로 요소를 선택
// 선택된 요소가 복수일 경우, 전부 선택
// 모든 요소를 NodeList 객체로 반환
const queryAll = document.querySelectorAll('h1');
queryAll.forEach(item => {
  item.style.fontSize = '5rem';
});

// ---------
// 요소 조작
// ---------

// Element.textContent : 요소의 텍스트 콘텐츠를 가져오거나 설정
const title1 = document.querySelector('#title');
title1.textContent; // 콘텐츠 접근
title1.textContent = '테스트'; // 콘텐츠 변경
title1.textContent = '<p>피 태그</p>';
// Element.innerHTML : 요소의 HTML 콘텐츠를 가져오거나 설정
// 태그는 태그로 인식해서 전달
title1.innerHTML = '<p>피 태그</p>';

// Element.setAttribute(attributeName, value) : 요소에 속성과 속성 값을 추가
const setAttrInput = document.querySelector('.set-attr');
setAttrInput.setAttribute('placeholder', 'js에서 추가');
setAttrInput.setAttribute('style', 'color : red;');

// Element.removeAttribute(attributeName) : 요소의 특정 속성을 제거
setAttrInput.removeAttribute('placeholder');

// -------------
// 요소 스타일링
// -------------

// Element.style : 요소에 인라인 스타일 추가
title1.style.color = 'gray';

// Element.classList : DOMTokenList 객체로 클래스를 제어
// add / remove / toggle
title1.classList.add('display-none', 'test'); // 클래스 추가
title1.classList.remove('display-none'); // 클래스 제거
title1.classList.toggle('display-none'); // 클래스 토글

// ----------------
// 새로운 요소 생성
// ----------------

// document.createElement(tagName): 해당 tag요소를 생성
const newP = document.createElement('p');
newP.textContent = '탕수육';
newP.style.color ='#8C33FF';

// Node.appendChild(node)
// 해당 부모 노드의 가장 마지막 자식 노드로 추가
const parentContainer = document.querySelector('.container');
parentContainer.appendChild(newP);

const newSpan = document.createElement('span');
newSpan.textContent = '크림새우';
parentContainer.appendChild(newSpan);

// Node.insertBefore(newNode, referenceNode);
const newH3 = document.createElement('h3');
newH3.textContent = '깐풍기';
parentContainer.insertBefore(newH3, newSpan);
// 탕수육과 크림새우 사이

// Node.removeChild(node) : 해당 부모 노드의 특정 자식 노드를 제거
parentContainer.removeChild(newH3);
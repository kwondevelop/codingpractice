// 0. 페이지 처음 로드시 카드는 아무것도 없습니다.
// 1. 다음 버튼을 누르면 다음 페이지를 3개 가져옵니다.
// 2. 리셋 버튼을 누르면 모든 카드가 초기화 됩니다.
// 2-1. 리셋 후 다음 버튼을 누르면 첫 페이지부터 불러옵니다.
// 3. 사용하는 API는 아래와 같습니다.
// 	- baseURL: https://picsum.photos/v2/list
// 	- parameters: 
// 	  - page: number
// 	  - limit: number

// async/await X

const baseUrl = 'https://picsum.photos/v2/list';
let page = 0;
let limit = 3;

const container = document.querySelector('.container');
const btnNext = document.querySelector('#btnNext');
const btnReset = document.querySelector('#btnReset');

btnNext.addEventListener('click', () => {
  page++;
  const url = `${baseUrl}?page=${page}&limit=${limit}`;

  axios.get(url)
    .then(response => {
      response.data.forEach(item => {
        
        // 카드 이미지 요소 생성
        const newCardImg = document.createElement('div');
        newCardImg.style.backgroundImage = `url('${item.download_url}')`;
        newCardImg.classList.add('card-img');

        // 카드 저작권자 요소 생성
        const newAuthor = document.createElement('span');
        newAuthor.textContent = `${item.id}: ${item.author}`;

        // 카드 요소 생성
        const newCard = document.createElement('div');
        newCard.classList.add('card');
        newCard.appendChild(newCardImg);
        newCard.appendChild(newAuthor);

        // 컨테이너에 카드 삽입
        container.appendChild(newCard);
      });
    })
    .catch(error => {
      console.error(error);
    });
});

btnReset.addEventListener('click', () => {
  container.textContent = '';
  page = 0;
});
// 0. 페이지 처음 로드시 카드는 아무것도 없습니다.
// 1. 다음 버튼을 누르면 다음 페이지를 3개 가져옵니다.
// 2. 리셋 버튼을 누르면 모든 카드가 초기화 됩니다.
// 2-1. 리셋 후 다음 버튼을 누르면 첫 페이지부터 불러옵니다.
// 3. 사용하는 API는 아래와 같습니다.
// 	- baseURL: https://picsum.photos/v2/list
// 	- parameters: 
// 	  - page: number
// 	  - limit: number

(() => { 
  let allowFlag = true; // 디바운싱 제어용 플래그
})

// const baseUrl = 'https://picsum.photos/v2/list';
// let page = 1;
// let limit = 3;

const btnNext = document.querySelector('#btnNext');
const btnReset = document.querySelector('#btnReset');
let page = 1; // page를 0으로 하면 에러 가능성이 큼, 그래서 1

btnNext.addEventListener('click', async () => {
  if(allowFlag) {}
  const baseUrl = 'https://picsum.photos/v2/list';
  // let page = 1;
  let limit = 3;

  const container = document.querySelector('.container');

  page++;
  const url = `${baseUrl}?page=${page}&limit=${limit}`;

  try {
  const response = await axios.get(url) // config
      // 객체의 property를 설정할때, 사용할 변수명과 키명이 일치하면
      // 아래처럼 단축 작성이 가능
      // page: page / limit: limit
      // const config = {
      //   params: {
      //     limit,
      //     page
      //   }
      // };
      response.data.forEach(item => {

        // const container = document.querySelector('.container');
        // const newCard = document.createElement('div');
        // const newCardImg = document.createElement('div');
        // const newCardAuthor = document.createElement('p');
        
        // newCardImg.classList.add('card-img');
        // newCardImg.style.backgroundImage = `url('${item.download_url}')`;
        // newCard.appendChild(newCardImg);

        // newCardAuthor.textContent = `${item.id}: ${item.author}`;
        // newCard.appendChild(newCardAuthor);

        // newCard.classList.add('card');
        // container.appendChild(newCard);

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
    } catch(error) {
      console.error(error);
    }
  });

btnReset.addEventListener('click', () => {
  const container = document.querySelector('.container');
  container.textContent = '';
  page = 1;
});

// const btnReset = document.querySelector('#btnReset');
// btnReset.addEventListener('click', () => {
//   document.querySelector('.container');
//   container.textContent = '';
//   page = 1;
// })

// 권민재씨 그만 주무세요.
// 수업에 집중 좀 하시죠?
// 언제까지 수업시간에 졸고 자고 그러실거죠??
// 내일 아침에 시험인데???
// 공부는 언제 하시려고
// 아. 이미 다 아는거라 수업이 지루하신건가....
// 역시 고수님..
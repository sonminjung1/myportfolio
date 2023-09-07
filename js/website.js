const  textUp = new IntersectionObserver((e)=> {
  e.forEach((message)=> {
      if (message.isIntersecting) {
          message.target.style.transform = 'translateY(0)';
          message.target.style.transform = 'translateX(0)';
          message.target.style.opacity = 1;
      }
  })
})
const message1 = document.querySelector(".project-header-title");
const message2 = document.querySelector(".project-header-text p");
const projectNum = document.querySelector(".project-num p");
const projectTitle = document.querySelector(".first-project-title h2");
const projectLeft = document.querySelector(".first-left");
const projectRight = document.querySelector(".first-right");
textUp.observe(message1);
textUp.observe(message2);
textUp.observe(projectNum);
textUp.observe(projectTitle);
textUp.observe(projectLeft);
textUp.observe(projectRight);


// 슬라이크 전체 크기(width 구하기)
const slide = document.querySelector(".slide");
let slideWidth = slide.clientWidth;

// 버튼 엘리먼트 선택하기
const prevBtn = document.querySelector(".slide_prev_button");
const nextBtn = document.querySelector(".slide_next_button");

// 슬라이드 전체를 선택해 값을 변경해주기 위해 슬라이드 전체 선택하기
const slideItems = document.querySelectorAll(".slide_item");
// 현재 슬라이드 위치가 슬라이드 개수를 넘기지 않게 하기 위한 변수
const maxSlide = slideItems.length;

// 버튼 클릭할 때 마다 현재 슬라이드가 어디인지 알려주기 위한 변수
let currSlide = 1;

// 프로젝트 개수
let startNum = document.querySelector(".start-num");
let endNum = document.querySelector(".end-num");
let slideItem = document.querySelectorAll(".slide_item");
console.log(slideItem.length);

let currentIndex = 1;


startNum.innerText = `0${currentIndex}`;
endNum.innerText = `0${maxSlide}`;


// 프로젝트 타이틀
let projectWebTitleArr = ["문화재청 경복궁 관리소", "제주 플라넷 아쿠아리움", "Old Movie Music", "Natural Video"];
let titleDisplay = document.querySelector(".project-title h2");
let currentWebTitleIndex = 0;
titleDisplay.textContent = projectWebTitleArr[currentWebTitleIndex];


// // 페이지네이션 생성
// const pagination = document.querySelector(".slide_pagination");

// for (let i = 0; i < maxSlide; i++) {
//   if (i === 0) pagination.innerHTML += `<li class="active">•</li>`;
//   else pagination.innerHTML += `<li>•</li>`;
// }

// const paginationItems = document.querySelectorAll(".slide_pagination > li");
// console.log(paginationItems);

nextBtn.addEventListener("click", () => {

  currSlide++;
  if (currSlide <= maxSlide) {  
    const offset = slideWidth * (currSlide - 1);
    slideItems.forEach((i) => {
      i.setAttribute("style", `left: ${-offset}px`);
    });
  
    // paginationItems.forEach((i) => i.classList.remove("active"));
    // paginationItems[currSlide - 1].classList.add("active");

    startNum.innerText = currSlide < maxSlide ? `0${currSlide}` : `0${maxSlide}`;
    currentWebTitleIndex = (currentWebTitleIndex + 1) % projectWebTitleArr.length;
    titleDisplay.innerText = projectWebTitleArr[currentWebTitleIndex];

  } else {
    currSlide--;
  }
});

// 버튼 엘리먼트에 클릭 이벤트 추가하기
prevBtn.addEventListener("click", () => {
  // 이전 버튼 누를 경우 현재 슬라이드를 변경
  startNum.innerText = `0${--currentIndex}`;
  currSlide--;
  // 1번째 슬라이드 이하로 넘어가지 않게 하기 위해서
  if (currSlide > 0) {
    // 슬라이드를 이동시키기 위한 offset 계산
    const offset = slideWidth * (currSlide - 1);
    // 각 슬라이드 아이템의 left에 offset 적용
    slideItems.forEach((i) => {
      i.setAttribute("style", `left: ${-offset}px`);
    });
    // 슬라이드 이동 시 현재 활성화된 pagination 변경
    // paginationItems.forEach((i) => i.classList.remove("active"));
    // paginationItems[currSlide - 1].classList.add("active");
    startNum.innerText = `0${currSlide}`;
    currentWebTitleIndex = (currentWebTitleIndex - 1 + projectWebTitleArr.length) % projectWebTitleArr.length;
    titleDisplay.innerText = projectWebTitleArr[currentWebTitleIndex];
  } else {
    currSlide++;
  }
  if(currSlide == 1) {
    startNum.innerText = `01`;
    titleDisplay.innerText = projectWebTitleArr[0];
  }
});

// 브라우저 화면이 조정될 때 마다 slideWidth를 변경하기 위해
window.addEventListener("resize", () => {
  slideWidth = slide.clientWidth;
});

// // 각 페이지네이션 클릭 시 해당 슬라이드로 이동하기
// for (let i = 0; i < maxSlide; i++) {
//   // 각 페이지네이션마다 클릭 이벤트 추가하기
//   paginationItems[i].addEventListener("click", () => {
//     // 클릭한 페이지네이션에 따라 현재 슬라이드 변경해주기(currSlide는 시작 위치가 1이기 때문에 + 1)
//     currSlide = i + 1;
//     // 슬라이드를 이동시키기 위한 offset 계산
//     const offset = slideWidth * (currSlide - 1);
//     // 각 슬라이드 아이템의 left에 offset 적용
//     slideItems.forEach((i) => {
//       i.setAttribute("style", `left: ${-offset}px`);
//     });
//     // 슬라이드 이동 시 현재 활성화된 pagination 변경
//     paginationItems.forEach((i) => i.classList.remove("active"));
//     paginationItems[currSlide - 1].classList.add("active");
//   });
// }
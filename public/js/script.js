$(function() {
    $("#nav").load("../nav.html");
    $("#footer").load("../footer.html");
});

// 가로 스크롤 
gsap.registerPlugin(ScrollTrigger);
function SectionGroup__init() {
    $('.section-group--horizontal-right').each(function(index, node) {
        var $group = $(node);
        var $section = $group.find('>.section');

        gsap.to($section, {
            xPercent: -100 * ($section.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: $group,
                start: "top top",
                end: "+=" + ($section.length - 1) + "00%",
                pin: true,
                scrub: true,
            }
        });
    });
}
SectionGroup__init();

// Main Video
function deactiveVideo() {
    $('video.active').removeClass('active');
}
function activeVideo(id) {
    $('video#' + id).addClass('active');
}

$(document).ready(function() {
    $('#h1-1, #h1-2, #h1-3').hover(
    function() {
        $('.developer-img video').css('display', 'none'); 
    },
    function() {
        $('.developer-img video').css('display', 'block');
        }
    );
});

// 코드 애니메이션
const  observer1 = new IntersectionObserver((e)=> {
    e.forEach((up)=> {
        if (up.isIntersecting) {
            up.target.style.transform = 'translateY(0)';
            up.target.style.opacity = 1;
        } else {
            up.target.style.transform = 'translateY(100%)';
            up.target.style.opacity = 0;
        }
    })
});
const  codeImg1 = document.querySelector(".code-img1");
const codeImg2 = document.querySelector(".code-img2");
const codeImg3 = document.querySelector(".code-img3");
const ifArrow = document.querySelector(".if-arrow");
const codeText = document.querySelector(".code-txt-inner");

observer1.observe(codeImg1);
observer1.observe(codeImg2);
observer1.observe(codeImg3);
observer1.observe(ifArrow);
observer1.observe(codeText);

let index = 0,
    interval = 1000;

const rand = (min, max) => 
  Math.floor(Math.random() * (max - min + 1)) + min;

const animate = star => {
  star.style.setProperty("--star-left", `${rand(-10, 100)}%`);
  star.style.setProperty("--star-top", `${rand(-40, 80)}%`);

  star.style.animation = "none";
  star.offsetHeight;
  star.style.animation = "";
}

for(const star of document.getElementsByClassName("magic-star")) {
  setTimeout(() => {
    animate(star);
    
    setInterval(() => animate(star), 1000);
  }, index++ * (interval / 3))
}


// 필름카메라 이미지 슬라이드 섹션
var slides = document.querySelector('.slides'),
    slide = document.querySelectorAll('.slides li'),
    currentIdx = 0,
    slideCount = slide.length,
    slideWidth = 370,
    slideMargin = 30,
    moveAmt = slideWidth + slideMargin,
    maxSlides = 3,
    responsiveMargin = 20,
    newslide,
    newslideWidth,
    // prevBtn = document.querySelector('.controls .prev'),
    // nextBtn = document.querySelector('.controls .next');

    newslideWidth = slideWidth;


    //복사본 생성하기
    for(var i = 0;i<maxSlides;i++){
        var cloneSlide = slide[i].cloneNode(true);
        cloneSlide.classList.add('clone');
        slides.appendChild(cloneSlide);
    }
    for(var i = slideCount -1; i>=0 ; i--){
        var cloneSlide = slide[i].cloneNode(true);
        cloneSlide.classList.add('clone');
        slides.prepend(cloneSlide);
    }

    //가로배열하기
    function slideLayout(sw, sm){
        newslide = document.querySelectorAll('.slides li');
        moveAmt = sw + sm;
        newslide.forEach(function(item,index){
            item.style.left = moveAmt*index +'px';
            item.style.width = sw +'px';
        });        
    }
    slideLayout(slideWidth, slideMargin);

    //중앙 배치하기  transform translateX(???)
    function setSlide(){
        var ulMoveAmt = -slideCount * moveAmt + 'px';
        slides.style.transform = 'translateX(' + ulMoveAmt +')';
        slides.classList.add('animated');
    }
    setSlide();

//    //좌우 버튼으로 이동하기
//     nextBtn.addEventListener('click', function(){
//         moveSlide(currentIdx + 1);
//     });
//     prevBtn.addEventListener('click', function(){
//         moveSlide(currentIdx - 1);
//     });

    //moveSlide 함수
    function moveSlide(num){
        slides.style.left = moveAmt * -num + 'px';
        currentIdx = num;
        // console.log(currentIdx, slideCount);

        if(currentIdx == slideCount || currentIdx == -slideCount){
            setTimeout(function(){
                slides.classList.remove('animated');
                slides.style.left = '0px'; 
                currentIdx = 0;
            },500);

            setTimeout(function(){
                slides.classList.add('animated');
            },600);
        }
        
    }

    //자동슬라이드
    var timer = undefined;
    var slideWrapper = document.querySelector('.slide_wrapper');

    function autoSlide(){
        if(timer == undefined){
            timer = setInterval(function(){
                moveSlide(currentIdx + 1);
            }, 2000);
        }
    }
    autoSlide();

    function stopSlide(){
        clearInterval(timer);
        timer = undefined;
    }

    slideWrapper.addEventListener('mouseenter', function(){
        stopSlide();
    });

    slideWrapper.addEventListener('mouseleave', function(){
        autoSlide();
    });

    //반응형 슬라이드
    window.addEventListener('resize',function(){
        var currentWidth = document.querySelector('body').offsetWidth;

        if(currentWidth < 700){            
            var slidesWidth = slides.offsetWidth;
            newslideWidth = (slidesWidth - (responsiveMargin * maxSlides -1))/3;
            responsiveMargin = 20; 
        }else{
            newslideWidth = slideWidth;
            responsiveMargin = slideMargin;
        }
        if(currentWidth <= 500){
            newslideWidth = slides.offsetWidth;            
            responsiveMargin = 20;
        } 
        slideLayout(newslideWidth, responsiveMargin);
        setSlide();      
        // console.log(newslideWidth); 

    });  
    


// 마이스킬 리스트
const mySkill = document.querySelectorAll(".my-skill-head");
const mySkillDetail = document.querySelectorAll(".mySkill-list-details");

mySkill.forEach((list, index) => {
    list.addEventListener("click", (e) => {    
        e.currentTarget.classList.toggle("btn");
        const isOpen = mySkillDetail[index].classList.contains("open");
        closeAllDetail();
        if (!isOpen) {
            mySkillDetail[index].classList.add("open");
            list.classList.add("btn");
        }
    });
});

function closeAllDetail() {
    mySkillDetail.forEach(detail => {
        detail.classList.remove("open");
    });
    mySkill.forEach(list => {
        list.classList.remove("btn");
    });
}

// 아이폰 애니메이션
const clock = document.querySelector(".clock");
const getClock = () => {
    const today = new Date();
    let hours = today.getHours();
    let min = today.getMinutes();
    
    if(hours == 0) {
        hours = 12;
    } else if (hours >= 13) {
        hours = hours - 12;
    }

    hours = (hours < 10) ? "0" + hours : hours;
    min = (min < 10) ? "0" + min : min;

    clock.innerText = `${hours}:${min}`;
}

getClock();
setInterval(getClock, 10000)

const  observer2 = new IntersectionObserver((e)=> {
    e.forEach((message)=> {
        if (message.isIntersecting) {
            // message.target.style.transform = 'translateX(0)';
            message.target.style.opacity = 1;
            message.target.style.scale = 1;
        } else {
            message.target.style.scale = 0;
        }
    })
})

const message1 = document.querySelector(".message1");
const message2 = document.querySelector(".message2");
const message3 = document.querySelector(".message3");
const message4 = document.querySelector(".message4");
observer2.observe(message1);
observer2.observe(message2);
observer2.observe(message3);
observer2.observe(message4);
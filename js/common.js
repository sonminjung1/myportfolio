// 커스텀 마우스커서
$(document).ready(function() {
    $(document).mousemove(function(e) {
    gsap.to(".cursor", {duration: 0.4, left: e.pageX - 5, top: e.pageY - 5 });
    });
    $("body").hover(function(){
        $(".cursor").addClass("active1");
    }, function(){
        $(".cursor").removeClass("active1");
    });

    $(".next-click").hover(function(){
        $(".cursor").addClass("active2");
    }, function(){
        $(".cursor").removeClass("active2");
    });
    $(".project-img").hover(function(){
        $(".cursor").addClass("active3");
    }, function(){
        $(".cursor").removeClass("active3");
    });
    $(".modal-custom-button").hover(function(){
        $(".cursor").addClass("active4");
    }, function(){
        $(".cursor").removeClass("active4");
    });
});


const navBtnInner = document.querySelector(".l-nav");
const menuSpan = document.querySelector(".menu");
const closeSpan = document.querySelector(".close");
const fullscreenMenu = document.querySelector(".fullscreen-menu");

menuSpan.style.opacity = 1;
closeSpan.style.opacity = 0;


navBtnInner.addEventListener("click", () => {
    if (menuSpan.style.opacity == 1) {
        fullscreenMenu.classList.add("menuOpen");
        menuSpan.style.opacity = 0;
        closeSpan.style.opacity = 1;
    } else {
        fullscreenMenu.classList.remove("menuOpen");
        fullscreenMenu.classList.add("menuClose");
        menuSpan.style.opacity = 1;
        closeSpan.style.opacity = 0;
    }
});



var lastScrollTop = 0;

$(window).scroll(function(){
    var scrollTop = $(this).scrollTop();
    
    if(scrollTop >= 100) { 
        if ((scrollTop > lastScrollTop) && (lastScrollTop>0)) { 
            $(".nav-wrapper").css("top","-100px");
        } else {
            $(".nav-wrapper").css("top","0px");
        }

        lastScrollTop = scrollTop;
    } 

    $(".section").each(function () {
        var contentIndex = $(this).attr("id");
        if(scrollTop >= $(this).offset().top) {
            $(".scroll_03 a").removeClass("on");
            $(".scroll_03 a[href=#"+contentIndex+"]").addClass("on");
        }
    })
});

// nav / footer 불러오기
$(function() {
    $("#nav").load("../nav.html");
    $("#footer").load("../footer.html");
});

const  navUp = new IntersectionObserver((e)=> {
    e.forEach((up)=> {
        if (up.isIntersecting) {
            up.target.style.transform = 'translateY(0)';
            up.target.style.opacity = 1;
            up.target.style.borderBottom = `1px solid #eee`;
        }
    })
});

const nav = document.querySelector(".nav-inner");
navUp.observe(nav);


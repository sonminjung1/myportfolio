// 가로 스크롤 
// gsap.registerPlugin(ScrollTrigger);
// function SectionGroup__init() {
//     $('.section-group--horizontal-right').each(function(index, node) {
//         var $group = $(node);
//         var $section = $group.find('>.section');

//         gsap.to($section, {
//             xPercent: -100 * ($section.length - 1),
//             ease: "none",
//             scrollTrigger: {
//                 trigger: $group,
//                 start: "top top",
//                 end: "+=" + ($section.length - 1) + 100,
//                 pin: true,
//                 scrub: true,
//             }
//         });
//     });
// }
// SectionGroup__init();


// 이미지 업
const imgUp = new IntersectionObserver((e)=> {
    e.forEach((img)=> {
        if (img.isIntersecting) {
            img.target.style.transform = 'translateY(0)';
            img.target.style.opacity = 1;
            img.target.style.transitionDelay = `0.5s`;
        }
    })
})
const imgBox1 = document.querySelectorAll(".view-content img");
const imgBox2 = document.querySelector(".pamphlet img");

imgBox1.forEach((box) => {
    imgUp.observe(box);
});
imgUp.observe(imgBox2);


// 각 ID에 맞는 모달창
const btn = document.querySelectorAll(".modal-custom-button");
const modals = document.querySelectorAll('.modal-custom');
const spans = document.getElementsByClassName("close-modal");

for (let i = 0; i < btn.length; i++) {
    btn[i].onclick = function (e) {
        e.preventDefault();
        modal = document.querySelector(e.target.getAttribute("href"));
        modal.style.display = "flex";
    }
    
    spans[i].onclick = function () {
        for (var index in modals) {
            if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";
        }
    }
}

window.onclick = function (event) {
    if (event.target.classList.contains('modal-custom')) {
        for (let index in modals) {
            if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";
        }
    }
}
const  textUp = new IntersectionObserver((e)=> {
    e.forEach((message)=> {
        if (message.isIntersecting) {
            message.target.style.transform = 'translateY(0)';
            message.target.style.opacity = 1;
            message.target.style.transitionDelay = `1s`;
        }
    })
  })
const message1 = document.querySelector(".project-header-title");
const message2 = document.querySelector(".project-header-text p");
textUp.observe(message1);
textUp.observe(message2);

const imgUp = new IntersectionObserver((e)=> {
    e.forEach((img)=> {
        if (img.isIntersecting) {
            img.target.style.transform = 'translateX(0)';
            img.target.style.opacity = 1;
            img.target.style.transitionDelay = `1s`;
        }
    })
})
const imgBox = document.querySelectorAll(".project-box");

imgBox.forEach((box) => {
    imgUp.observe(box);
});




const btn = document.querySelectorAll(".modal-custom-button");
const modals = document.querySelectorAll('.modal-custom');
const spans = document.getElementsByClassName("close-modal");

// 각 ID에 맞는 모달창
for (let i = 0; i < btn.length; i++) {
    btn[i].onclick = function (e) {
        e.preventDefault();
        modal = document.querySelector(e.target.getAttribute("href"));
        modal.style.display = "block";
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

const olBtn = document.querySelector(".nav-container > button");
const overlay = document.querySelector("#overlay-nav");
const body = document.querySelector("body");

function nav() {
    overlay.classList.toggle("active");
    body.classList.toggle("hidden");
}

olBtn.addEventListener("click", nav);


//slide
// const arrow = document.querySelector;
const rgBtn = document.querySelector(".btn-right");
const lgBtn = document.querySelector(".btn-left");
const img = document.querySelector(".img-container  >img");
const trans = document.querySelector(".img-trans");
const bar = document.querySelector(".slide-zone");
let angle = 0;
let barAg = 0;

function rgSlide() {
    // move 
    console.dir(trans)
    const limit = img.offsetWidth;
    const barlimit = bar.offsetWidth;
    if (angle <= -limit*3) {
        angle = 0;
        barAg = 0;
        trans.style.transform = `translate(${angle}px, 0)`;
        bar.style.transform = `translate(${barAg}px, 0)`;
    }
    else{
        angle -= limit;
        barAg += barlimit;
        trans.style.transform = `translate(${angle}px, 0)`;
        bar.style.transform = `translate(${barAg}px, 0)`;
    }
}

function lgSlide() {
    // move 
    const limit = img.offsetWidth;
    const barlimit = bar.offsetWidth;
    if (angle === 0) {
        angle = -limit*3; 
        barAg = +barlimit*3;
        trans.style.transform = `translate(${angle}px, 0)`;
        bar.style.transform = `translate(${barAg}px, 0)`;
    }
    else{
        angle += limit;
        barAg -= barlimit;
        trans.style.transform = `translate(${angle}px, 0)`;
        bar.style.transform = `translate(${barAg}px, 0)`;
    }
}

lgBtn.addEventListener("click", lgSlide);
rgBtn.addEventListener("click", rgSlide);
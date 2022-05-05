// top btn
const olBtn = document.querySelector(".nav-container > button");
const overlay = document.querySelector("#overlay-nav");
const homeBtn = document.querySelector(".ol-nav-container > button");
const body = document.querySelector("body");

function nav() {
    overlay.classList.toggle("active");
    body.classList.toggle("hidden");
}

olBtn.addEventListener("click", nav);
homeBtn.addEventListener("click", nav);


//slide
const rgBtn = document.querySelector(".btn-right");
const lgBtn = document.querySelector(".btn-left");
const img = document.querySelector(".img-container > img");
const imgbox = document.querySelector(".img-container");
const trans = document.querySelector(".img-trans");
const bar = document.querySelector(".slide-zone");
let angle = 0;
let barAg = 0;
let limit = img.offsetWidth;
let barlimit = bar.offsetWidth;

window.addEventListener("resize", function () {
    angle = 0;
    barAg = 0;
    limit = 0;
    barlimit = 0;
    trans.style.transform = `translate(${angle}px, 0)`;
    bar.style.transform = `translate(${barAg}px, 0)`;
    console.log()
});
    
function rgSlide() {
    limit = img.offsetWidth;
    barlimit = bar.offsetWidth;
    // move 
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
    limit = img.offsetWidth;
    barlimit = bar.offsetWidth;
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


setInterval(function () {
    rgBtn.click();
}, 3000);

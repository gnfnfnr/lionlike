const list = document.querySelector(".list");
list.addEventListener("click", function (e) {
    tab(e.target.dataset.id);
    console.log(e.target.dataset.id);
});

function tab(e) {
    const tabBtn = document.querySelectorAll(".tab-btn");
    const tabBox = document.querySelectorAll(".tab-box");
    for (let i = 0; i < tabBtn.length; i++) {
        tabBtn[i].classList.remove("active");
        tabBox[i].classList.add("hidden");
    }
    tabBtn[e].classList.add("active");
    tabBox[e].classList.remove("hidden");
}


//스크롤
const scrollBr =  document.querySelector(".scroll-bar");
const scrollWrap = document.querySelector(".scroll-info");
scrollWrap.addEventListener("scroll", function () {
    let scrollTop = scrollWrap.scrollTop;
    let scrollHeight = scrollWrap.scrollHeight - scrollWrap.clientHeight;
    let per = scrollTop / scrollHeight;
    scrollBr.style.width = `${per*400}px`;
    console.log(scrollTop, scrollWrap.scrollHeight, scrollWrap.clientHeight)
});

//타이머
let timeout = 7;
setInterval(function name(params) {
    timeout --;
    document.querySelector(".timeout").innerText = `${timeout}초 후 사라짐`
}, 1000);

setTimeout(function name(params) {
    document.querySelector(".timeout").style.display = 'none';
}, 7000);

//hard
const input = prompt();
if (!input) {
    console.log("입력값이 없습니다");
} else{
    console.log(input);
}
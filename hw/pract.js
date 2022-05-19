const list = document.querySelector(".list");
list.addEventListener("click", function (e) {
    tab(e.target.dataset.id);
    console.log(e.target.dataset.id);
})

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

// for (let i = 0; i < tabBtn.length; i++) {
//     tabBtn[i].addEventListener("click", function () {
//         tabBtn[i].classList.toggle("active");
//         tabBox[i].classList.toggle("hidden");
//     })  
// };
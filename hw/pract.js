document.getElementById("lion").style.color = "blue";
document.getElementById("tiger").style.color = "red";
document.getElementsByTagName("li")[0].style.border = "1px yellow solid";
document.getElementsByClassName("animal")[0].style.backgroundColor = "orange"
document.querySelectorAll("li")[1].style.fontSize = "20px";

document.querySelector("#tiger").innerHTML = "바꾸었지롱";
const li = document.createElement("li");
const box = document.querySelector(".container");
box.appendChild(li);
li.innerText = "heelod";
box.innerHTML += "<li class='add'>또 추가했다</li>"

//이벤트 타입
const btn = document.querySelector(".btn");
btn.addEventListener("click", function () {
    document.querySelector("div").classList.toggle("color");
    btn.innerText = "눌렸어";
})


const fontPlus = document.querySelector(".font-plus");
const fontMius = document.querySelector(".font-mius");
const font = document.querySelector(".font > span");
let fontNum = 16;
fontPlus.addEventListener("click", function () {
    fontNum += 1;
    font.style.fontSize = `${fontNum}px`;
})

fontMius.addEventListener("click", function () {
    fontNum -= 1;
    font.style.fontSize = `${fontNum}px`;

})
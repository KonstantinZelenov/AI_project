
const text = document.getElementById("prompt");
const changeText = document.getElementsByClassName("btn");
function change () {
    text.innerText = "New text";
};
changeText[0].ontouchmove = change;


const item = document.querySelector("div");
function changeColor() {
    item.innerText = "try";
}
item.addEventListener("touchmove", changeColor);
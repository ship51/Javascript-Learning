const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");


const center = document.querySelector(".center");

// console.log(window.getComputedStyle(red).backgroundColor);

const getBGColor = (selectedElement) => {
    return window.getComputedStyle(selectedElement).backgroundColor;
}

var pinkElementColor = getBGColor(pink);
pink.addEventListener('mouseenter', () => {
    center.style.background = pinkElementColor;
})

var redElementColor = getBGColor(red);
red.addEventListener('mouseenter', () => {
    center.style.background = redElementColor;
})



const btn = document.querySelector('button');

function random(number) {
    return Math.floor(Math.random() * (number + 1));
}

btn.onclick = function () {
    const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    document.getElementsByClassName(".button1").color = rndCol;
}
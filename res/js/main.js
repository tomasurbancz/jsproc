/*function fce() {
    console.log("Ahoj svete");
}

const fce2 = () => {
    console.log("Ahoj svete");
}

fce();
fce2();

//              parametr
function konsel(item) {
    console.log(`Prinesl jsem ${item}`);
}

//               parametr
const konsel2 = (item, item2) => {
    console.log(`Prinesl jsem ${item} a ${item2}`);
}

//     argument
konsel("piti");

//     argument
konsel("urban");

//      argument
konsel2("zidle", "bobika");

//      argument
konsel2("jidlo", "piti");*/

/*function sum(num1, num2) {
    return num1 + num2;
}

console.log(sum(5, 1) + sum(8, 6));*/

/*let numberOne = 5;
let numberTwo = 8;

let numberThree = 6;
let numberFour = 7;

function sumF(num1, num2) {
    return num1 + num2;
}

const sum = (num1, num2) => num1 + num2;

let resultOne = sum(numberOne, numberTwo);
let resultTwo = sum(numberThree, numberFour);
console.log(sum(resultOne, resultTwo));

let name = "Ondra";
let age = 18;

const getSentence = (person, age) => `Tvoje jméno je ${person} a je ti ${age} let`;


let sentence = getSentence(name, age);
console.log(sentence);*/

const cube = document.getElementById("cube");
const cube2 = document.getElementById("cube2");
const clickCounter = document.getElementById("clickCounter");
const timeStat = document.getElementById("timeStat");
const audio = new Audio("res/audio/halien.mp3");

let gameInterval;

let lastClickTime = 0;

document.body.onload = () => {
    console.log("HEIGHT: " + getScreenHeight())
    moveElement(cube2, getScreenWidth()/2 - 50, getScreenHeight()/2 - 50);
}

audio.onended = () => {
    audio.play();
}

cube.onclick = () => {
    audio.play();
    cube.innerHTML = "STOP";
    cube.style.display = "none";
    changeColor(cube, 0, 128, 0);
    startGameInterval();
    setNumber(clickCounter, 0);
    setCookieClicker(cube2);
    timeStat.innerHTML = "Last click: WAITING FOR CLICK";
    lastClickTime = performance.now();    
}

cube2.onclick = () => {
}

const randomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const changeColor = (element, red, green, blue) => {
    element.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
}

const getScreenWidth = () => window.innerWidth;
/*const getScreenHeight = () => Math.max(
    document.documentElement["clientHeight"],
    document.body["scrollHeight"],
    document.documentElement["scrollHeight"],
    document.body["offsetHeight"],
    document.documentElement["offsetHeight"]
);*/

const getScreenHeight = () => window.innerHeight;

const setNumber = (element, value) => {
    element.innerHTML = value;
}

const setCookieClicker = (element) => {
    element.onclick = () => {
        let currentTime = performance.now();
        timeStat.innerHTML = `Last click: ${Math.floor(currentTime - lastClickTime)} ms`;
        lastClickTime = currentTime;
        clickCounter.innerText++;
        let wh = randomNum(50, 120);
        changeSize(element, wh, wh);
        moveElement(element, randomNum(50, getScreenWidth() - 150), randomNum(50, getScreenHeight() - 150));
        changeColor(element, randomNum(0, 255), randomNum(0, 255), randomNum(0, 255));
    }
}

const startGameInterval = () => {
    clearInterval(gameInterval);
    gameInterval = setInterval(() => {
        moveElement(cube2, randomNum(50, getScreenWidth() - 150), randomNum(50, getScreenHeight() - 150));
        let wh = randomNum(50, 120);
        changeSize(cube2, wh, wh);
    }, 1000);    
}

const moveElement = (element, x, y) => {
    element.style.left = `${x}px`;
    element.style.top = `${y}px`;
}

const changeSize = (element, width, height) => {
    element.style.width = `${width}px`;
    element.style.height = `${height}px`;
}
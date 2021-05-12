/* IMPORTANTE averiguar sistema de plantillas */
/* IMPORTANTE averiguar templates -- blade + laravel = backend */

/*  hex Variables */
const hexNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const colorBtn = document.querySelector('.colorBtn');
const bodyBcg = document.querySelector('body');
const hex = document.querySelector('.hex');
if (colorBtn != null) colorBtn.addEventListener('click', changeColor); //este IF esta hecho para que si no hay un colorBtn, no me tire error JS

/* Q&Q Variables */
const simpleQuotes = [{
        name: `Robert`,
        quote: `Hey I'm Robert and I'm famous`,
    },
    {
        name: `Paul`,
        quote: `Hey I'm Paul and I'm famous`,
    },
    {
        name: `George`,
        quote: `Hey I'm George and I'm famous`,
    },
    {
        name: `Mary`,
        quote: `Hey I'm Mary and I'm famous`,
    },
    {
        name: `Linda`,
        quote: `Hey I'm Linda and I'm famous`,
    },
    {
        name: `Lucy`,
        quote: `Hey I'm Lucy and I'm famous`,
    }
];
const quoteBtn = document.querySelector('#quoteBtn');
const quoteAuthor = document.querySelector('#quoteAuthor');
const quote = document.querySelector('#quote');
if (quoteBtn != null) quoteBtn.addEventListener('click', displayQuote);

/* Message Variables */
const messageInput = document.querySelector('#messageInput');
const messageBtn = document.querySelector('#messageBtn');
const messageSent = document.querySelector('#messageSent');
if (messageBtn != null) messageBtn.addEventListener('click', addMessage);

/* Counter Variables */
let counter = document.querySelector('.counter');
const addCount = document.querySelector('#addCountBtn');
const lowCount = document.querySelector('#lowerCountBtn');
let count = 0;

if (addCount != null) addCount.addEventListener('click', addCounter);
if (lowCount != null) lowCount.addEventListener('click', lowCounter);

/* Slider Variables */
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');
const sliderBox = document.querySelector('.sliderBox');
let sliderCounter = 0;

if (prevBtn != null) prevBtn.addEventListener('click', lastPic);
if (nextBtn != null) nextBtn.addEventListener('click', nextPic);

/* Calculator Variables */
const btns = document.querySelectorAll(`.btn`);
const screen = document.querySelector(`.screen`);
const equalBtn = document.querySelector(`.btn-equal`);
const clearBtn = document.querySelector(`.btn-clear`);



/* -------------------------- FUNCTIONS ------------------------- */

/* ---------------- HexColor Function --------------- */
function changeColor() {
    let hexCol = '#';

    /* el for Loop este, arma una variable i=0, que va a tener hasta 6 "numeros" dentro (para hacer el cambio de color #0.1.2.3.4.5), y 
    los "numeros" van a formarse gracias a la variable random dentro del forLoop, que va a tomar todas las posiciones (o index) 
    del array hexNumbers, esto lo va a hacer 6 veces y una vez terminado, me va a dar el valor final de hexCol. */
    for (i = 0; i < 6; i++) {
        let random = Math.floor(Math.random() * hexNumbers.length);
        hexCol += hexNumbers[random];

        /* Math.floor me redondea un num -- EJEMPLO: 2.3 a 2 

        // Math.random me da un numero random de 0 a >1 y si le agrego array.length va a darme la cantidad 
        max de array pero sin llegar al maximo -- EJEMPLO: 5 arrays, me va a dar 4.99 y con el .floor, me redondea a 4 */
    }
    bodyBcg.style.backgroundColor = hexCol;
    /* 1 - esto se lee asi: la constante bodyBcg (creada por mi) tiene un cambio en el style.css 
          que es el fondo a otra variable que yo cree (DENTRO DE LA FUNCION) "changeColor" que se llama hexCol */

    hex.innerHTML = hexCol; /* 2 - esto se lee asi: la constante hex (creada por mi y que corresponde al <span> en el h2 del index.html) */
}

/* ---------------- Q&Q Function ---------------*/
function displayQuote() {
    let number = Math.floor(Math.random() * simpleQuotes.length);
    quoteAuthor.innerHTML = simpleQuotes[number].name; //Aca me cambia el Html del id quoteAuthor en el .html
    quote.innerHTML = simpleQuotes[number].quote; //Aca me cambia el Html del id quote en el .html
}

/* ---------------- Message List Function ---------------*/
function addMessage() {
    let content = messageInput.value;
    let alert = document.getElementById(`alert`);
    if (content === '') {
        alert.classList.remove('d-none');
        alert.innerHTML = 'Please add a message';
    } else {
        messageSent.innerHTML = content;
        messageInput.value = '';
        alert.classList.add('d-none');
    }
}

/* ---------------- Counter Function ---------------*/

function addCounter() {
    count++;
    counter.innerHTML = count;
    if (counter.innerHTML > 0) {
        counter.style.color = '#009B72';
    } else if (counter.innerHTML === '0') {
        counter.style.color = '#F2F3D9';
    }
    counter.animate([{
        opacity: '0.2'
    }, {
        opacity: '1.0'
    }], {
        duration: 500,
        fill: 'forwards'
    });
}

function lowCounter() {
    count--;
    counter.innerHTML = count;
    if (counter.innerHTML < 0) {
        counter.style.color = '#EF271B';
    } else if (counter.innerHTML === '0') {
        counter.style.color = '#F2F3D9';
    }
    counter.animate([{
        opacity: '0.2'
    }, {
        opacity: '1.0'
    }], {
        duration: 500,
        fill: 'forwards'
    });
}

/* ---------------- Slider Function ---------------*/
function nextPic() {
    sliderBox.animate([{
        opacity: `0.1`
    }, {
        opacity: `1.0`
    }], {
        duration: 1500,
        fill: `forwards`
    });
    if (sliderCounter === 4) {
        sliderCounter = -1;
    }

    sliderCounter++;
    sliderBox.style.backgroundImage = `url(../assets/imgs/nyc/nyc-${sliderCounter}.jpg)`;
};

function lastPic() {
    sliderBox.animate([{
        opacity: `0.1`
    }, {
        opacity: `1.0`
    }], {
        duration: 1500,
        fill: `forwards`
    });
    if (sliderCounter === 0) {
        sliderCounter = 5;
    }
    sliderCounter--;
    sliderBox.style.backgroundImage = `url(../assets/imgs/nyc/nyc-${sliderCounter}.jpg)`;
};

/* ---------------- Calculator Function ---------------*/
for (let i = 0; i < btns.length; i++) {
    if (btns[i] != null) btns[i].addEventListener(`click`, function () {
        let numberC = btns[i].getAttribute(`data-num`);
        screen.value += numberC;
    })
}
if (equalBtn != null) equalBtn.addEventListener(`click`, function () {
    if (screen.value === '') {
        alert('Input empty, please add numbers');
    } else {
        let valueC = eval(screen.value);
        screen.value = valueC;
    }
})

if (clearBtn != null) clearBtn.addEventListener(`click`, function () {
    screen.value = ``;
})
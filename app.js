const deg = 6;
const hour = document.querySelector('#h');
const min = document.querySelector('#min');
const sec = document.querySelector('#sec');

setInterval(() => {

let day = new Date();
let h = day.getHours() * 30;
let m = day.getMinutes() * deg;
let s = day.getSeconds() * deg;

hour.style.transform = `rotateZ(${(h)+(m/12)}deg)`;
min.style.transform = `rotateZ(${m}deg)`;
sec.style.transform = `rotateZ(${s}deg)`;

})
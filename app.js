///////////////////////////////////////////////////////////////
/* DARK LIGHT MODE */

var checkbox = document.querySelector('input[name=theme]');

checkbox.addEventListener('change', function() {
    if(this.checked) {
        trans()
        document.documentElement.setAttribute('data-theme', 'dark')
    } else {
        trans()
        document.documentElement.setAttribute('data-theme', 'light')
    }
})

let trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition')
    }, 1000)
}





//////////////////////////////////////////////////////////

const clock = document.querySelector('.clockFrame');
const clockBtn = document.querySelector('.clock-btn');

clockBtn.addEventListener('click', (e) => {
    clock.style.visibility = 'visible';
    

})
/* CLOCK JS */
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

});

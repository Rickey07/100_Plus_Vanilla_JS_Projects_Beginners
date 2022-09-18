const toggleButton = document.querySelector('.toggleButton');
const hoursEle = document.querySelector('#hours');
const minutesEle = document.querySelector('#minutes');
const secondsEle = document.querySelector('#seconds');
const statusEle = document.querySelector('#status');
const darkModeId = document.querySelector('#darkId');


toggleButton.addEventListener('click' , () => {
    document.body.classList.toggle('dark-mode');
    let classList = document.body.classList;
    if (classList[0] === 'dark-mode') {
        darkModeId.textContent = 'Light-mode';
        darkModeId.style.color = 'black';
    } else {
        darkModeId.textContent = 'Dark-mode'
        darkModeId.style.color = 'black';
    }
})


let now = new Date;
let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();


const updateTime = (hours , minutes , seconds) => {
    setInterval(() => {
        if (seconds>=60) {
            seconds = 0;
            minutes++
            if(minutes>=60) {
                minutes = 0;
                hours++;
                if (hours>23) {
                    hours = 0;
                }
            }
        }
        renderTime(hours,minutes,seconds)
        seconds++
    },1000)
}


function renderTime (hours,minutes,seconds,status) {
    hoursEle.innerText = hours>=10?hours:`0${hours}`;
    minutesEle.innerText = minutes>=10?minutes:`0${minutes}`;
    secondsEle.innerText = seconds>=10?seconds:`0${seconds}`;
    statusEle.innerText =  hours>12?"PM":"AM";
}

updateTime(hours,minutes,seconds);

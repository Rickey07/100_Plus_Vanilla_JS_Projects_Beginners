// Get ref to the body :- 

const bodyEle = document.querySelector('#body');

// Get ref to the button

const btnElement = document.querySelector('#btn');

// Get ref to the text color button input

const textColor = document.querySelector('#hex-value');

// We will declare an array of the following items;

const hexValues = ['a','b','c','d','e','f',0,1,2,3,4,5,6,7,8,9];

btnElement.addEventListener('click' , () => {
    let hex = "#";

    for (let i=0; i<6; i++) {
        let randomNumber = Math.floor(Math.random()*hexValues.length);
        hex = hex + hexValues[randomNumber];
    }
    bodyEle.style.background = hex;
    textColor.innerText = hex;    
})
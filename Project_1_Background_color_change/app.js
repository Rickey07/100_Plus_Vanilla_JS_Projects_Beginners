// Get ref to the container 
const containerEle = document.querySelector('#container');

// Get ref to the button
const btnEle = document.querySelector('#btn');

// An array of  predefined colors
const colors = ['blue','red','green','yellow','gray','black'];


let i = 0;

// Add a event listener
btnEle.addEventListener('click' , () => {
    containerEle.style.background = colors[i];
    // If the array index comes last index reinitialize it to 0
    if (i === colors.length-1) {
        i = 0;
    } else {
        i++;
    }
})


// Another way of doing the same 

/*Choose a random color
const button = document.querySelector('button')
const body = document.querySelector('body')
const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple']

body.style.backgroundColor = 'violet'
button.addEventListener('click', changeBackground)

function changeBackground(){
const colorIndex= parseInt(Math.random()*colors.length)
body.style.backgroundColor = colors[colorIndex]
}
*/
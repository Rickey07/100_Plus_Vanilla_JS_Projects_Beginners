// Get ref to the button

const button = document.querySelector('#submitBtn');
const msgVal = document.querySelector('#message');
const msgContent = document.querySelector('.message-content');



button.addEventListener ('click' , (e) => {
    e.preventDefault();
    msgContent.innerText = msgVal.value;
    msgVal.value = '';
})


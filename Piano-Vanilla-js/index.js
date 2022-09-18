// Get ref to all the keys

const keys = document.querySelectorAll('.key');
const regulars = document.querySelectorAll('.key.white');
const sharps = document.querySelectorAll('.key.black');


// Loop over the array and add an event listener to the individual key.

keys.forEach((key) => {
    key.addEventListener('click', () => playNote(key));
})


let playNote = (key) => {
    const noteSound = document.getElementById(key.dataset.note);
    noteSound.currentTime = 0;
    noteSound.play();
    key.classList.add('active');
    noteSound.addEventListener('ended' , () => {
        key.classList.remove('active');
    })
}
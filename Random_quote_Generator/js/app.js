// Get ref to the button 

const button = document.querySelector('.generate-btn');
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');

let newArrray = [];

class authorQuote {
    constructor (quote , author) {
        this.quote = quote;
        this.author = author;
    }

    newArray () {
        newArrray.push({Quote:this.quote,Author:this.author});
        return newArrray;
    }
}

const author1 = new authorQuote("Life is too short and sweet to be spent by cribbing and complaining about things. Here are some random quotes about the most wonderful gift that we've got" , "Life")
const author2 = new authorQuote("God save me from my friends. I can protect myself from my enemies." , "Prabadhya Upadhyay");
const author3 = new authorQuote("Life is like a landscape. You live in the midst of it but can describe it only from the vantage point of distance." , "Harshit Kumawat");
const author4 = new authorQuote("A critic is someone who never actually goes to the battle, yet who afterwards comes out shooting the wounded." , "Akash Malviya");
const author5 = new authorQuote("The price of anything is the amount of life you exchange for it." , "Unknown Author");


author1.newArray()
author2.newArray()
author3.newArray()
author4.newArray()
author5.newArray()



button.addEventListener('click' , () => {
    let indexNumber = Math.floor(Math.random()*newArrray.length);
    console.log(indexNumber);
    let quoteIn = newArrray[indexNumber].Quote;
    let authorIn = newArrray[indexNumber].Author;
    quote.textContent = quoteIn;
    author.textContent = authorIn;
})



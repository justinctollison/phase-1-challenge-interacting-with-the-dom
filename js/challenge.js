//Selectors or references to the DOM
const counter = document.getElementById("counter")
const minus = document.getElementById("minus")
const plus  = document.getElementById("plus")
const heart = document.getElementById("heart")
const pause = document.getElementById("pause")

const commentForm = document.getElementById("comment-form")
const commentList = document.getElementById("list")

//Attach event listeners to buttons
plus.addEventListener('click', function(e){
    increase()
    console.log("I was clicked")
})

minus.addEventListener('click', function(e){
    decrease()
    console.log("I was clicked")
})

pause.addEventListener('click', function(e){
    clearInterval(timer)
    console.log("I was clicked")
})

heart.addEventListener('click', function(e){
    console.log("I was clicked")
})

//set interval to execute increase function to increase interval by 1
let i = 0
timer = setInterval(() => {
    if (i < 1000){
        increase()
    }
}, 1000);

//function to increase counter by 1
function increase(){
    counter.innerText = i
    i++
}

//function to decrease counter by 1
function decrease(){
    counter.innerText = i
    i--
}

commentForm.addEventListener('submit', function(e){
    e.preventDefault();
})
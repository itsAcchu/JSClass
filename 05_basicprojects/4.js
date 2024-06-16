let random = (parseInt(Math.random() * 100 + 1));

const submit = document.querySelector('#subt')
const input = document.querySelector('#guessField')
const guesses = document.querySelector('.Guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

let p = document.createElement('p')

let prevGuess = []
let numGuesses = 1

let playGame = true
if (playGame) {
    submit.addEventListener('click',(x)=>{
        x.preventDefault()
        const guess = parseInt(input.value)
        console.log(guess);
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if (isNaN(guess)) {
        alert('Enter Valid Number..!')
    }else if (guess < 1){
        alert('Enter a Number more than 1..!')
    }else if (guess > 100){
        alert('Enter a Number lessthan 100..!')
    }else{
        prevGuess.push(guess)
        if (numGuesses === 11) {
            displayGuess(guess)
            displayMsg(`Game Over. Random number was ${random}`)
            endGame()
        }else{
            displayGuess(guess)
            displayMsg(guess)
        }
    }
}

function checkGuess(guess){
    if (guess === random) {
        displayMsg(`You Guessed a ringht Number..!`)
        endGame()
    }   else if(guess < random){
        displayMsg(`Number is low`)
    }   else if(guess > random){
        displayMsg(`Number is High`)
    }
}

function displayGuess(guess){
    input.value = ''
    guesses.innerHTML += `${guess}.`
    numGuesses++;
    remaining.innerHTML = `${11 - numGuesses}`
}

function displayMsg(msg){
    lowOrHi.innerHTML = `<h2>${msg}</h2>`
}

function endGame() {
    input.value = ''
    input.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id='newGame'>Start New Game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}

function newGame() {
    const but = document.querySelector('#newGame')
    but.addEventListener('click', function(x){
        random = (parseInt(Math.random() * 100 + 1));
        prevGuess = []
        numGuesses = 1
        guesses.innerHTML = ''
        remaining.innerHTML = `${11 - numGuesses}`
        input.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true
    })
}







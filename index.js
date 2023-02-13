let player = {
    name: "Arun",
    chips: 145
}
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")
let messageEl = document.getElementById("message-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let randomNumber = Math.floor( Math.random() * 13 ) + 1
    console.log(randomNumber)
    if (randomNumber === 1) {
        return 11
    }
    else if (randomNumber > 10) {
        return 10
    }
    else {
        return randomNumber
    }
}

function startGame() {
    if(isAlive === false) {
        isAlive = true
        let firstCard = getRandomCard()
        let secondCard = getRandomCard()
        cards = [firstCard, secondCard]
        sum = firstCard + secondCard
        renderGame()
    }
}

function renderGame() {
    cardsEl.textContent = "Cards: "

    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum

    if(sum <= 20) {
        message = "Do you want to draw a new card? 🙂"
    }
    else if(sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳"
        hasBlackJack = true 
        isAlive = false
    }
    else {
        message = "You're out of the game! 😭"
        isAlive = false 
    }
    messageEl.textContent = message
}

function newCard() {
    if(isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        console.log(cards)
        renderGame()
    }
    // cardsEl.textContent += " " + card
}

function resetGame() {
    messageEl.textContent = "Want to play a round?"
    cardsEl.textContent = "Cards: " 
    sumEl.textContent = "Sum: "
}
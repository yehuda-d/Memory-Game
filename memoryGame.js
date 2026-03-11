
let cards = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"];

let flippedCount = 0;
let firstCard = "";
let secondCard = "";
let firstIndex = -1;
let matchedPairs = 0;

function gameStart() {
    matchedPairs = 0;
    flippedCount = 0;
    firstCard = "";
    secondCard = "";

    // ערבוב הקלפים
 for (let i = cards.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); 
    let temp =cards[i];
    cards[i] = cards[j];
    cards[j] = temp;
 }

    let board = document.getElementById("s");
    board.innerHTML = "";

    for (let i = 0; i < cards.length; i++) {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = "?";
        card.onclick = function () {
            cardFlip(card, i);
        };
        board.appendChild(card);
    }

    document.getElementById("message").innerHTML = "";
}

function cardFlip(card, index) {
    if (flippedCount === 2 || card.innerHTML !== "?") 
        return; 

    card.innerHTML = cards[index];
    flippedCount++;

    if (flippedCount === 1) {
        firstCard = card;
        firstIndex = index;
    } else if (flippedCount === 2) {
        secondCard = card; 

        if (cards[firstIndex] === cards[index]) { 
            // התאמה
            firstCard.style.backgroundColor = "lightblue";
            secondCard.style.backgroundColor = "lightblue";
            firstCard.style.color = "blue";
            secondCard.style.color = "blue";

            matchedPairs += 2;
            flippedCount = 0; 

            if (matchedPairs === cards.length) {
                document.getElementById("message").innerHTML = "You Won!";
            }
        } 
        else {
            // אין התאמה
            setTimeout(() => {
                firstCard.innerHTML = "?";
                secondCard.innerHTML = "?";
                flippedCount = 0;
            }, 1000);
        }
    }
}








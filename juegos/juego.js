
	
	const gameBoard = document.getElementById("gameBoard");
const imagesOrNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,]; // Puedes agregar imágenes aquí si lo prefieres
const cards = [...imagesOrNumbers, ...imagesOrNumbers];
let flippedCards = [];
let pairsFound = 0;
let canFlip = true;

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function createCard(content, index) {
    const card = document.createElement("div");
    card.classList.add("game-card", "hidden");
    card.textContent = content;
    card.addEventListener("click", () => flipCard(card, index));
    return card;
}

function flipCard(card, index) {
    if (!canFlip || flippedCards.includes(index)) return;

    card.classList.remove("hidden");
    flippedCards.push(index);

    if (flippedCards.length === 2) {
        canFlip = false;
        setTimeout(checkPairs, 1000);
    }
}

function checkPairs() {
    const [index1, index2] = flippedCards;
    const cardsElements = document.querySelectorAll(".game-card");

    if (cards[index1] === cards[index2]) {
        pairsFound++;
        if (pairsFound === imagesOrNumbers.length) {
            alert("¡Has encontrado todas las parejas!");
            resetGame();
        }
    } else {
        cardsElements[index1].classList.add("hidden");
        cardsElements[index2].classList.add("hidden");
    }

    flippedCards = [];
    canFlip = true;
}

function resetGame() {
    const cardsElements = document.querySelectorAll(".game-card");
    cardsElements.forEach(card => card.remove());
    pairsFound = 0;
    startGame();
}

function startGame() {
    shuffle(cards);
    cards.forEach((content, index) => {
        const card = createCard(content, index);
        gameBoard.appendChild(card);
    });
}

startGame();
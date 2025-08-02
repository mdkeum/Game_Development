const square = document.getElementById('square');
const scoreDisplay = document.getElementById('score');
const gameArea = document.getElementById('gameArea');

let score = 0;

function getRandomPosition() {
  const areaWidth = gameArea.clientWidth;
  const areaHeight = gameArea.clientHeight;

  const x = Math.random() * (areaWidth - 50);
  const y = Math.random() * (areaHeight - 50);

  return { x, y };
}

function moveSquare() {
  const { x, y } = getRandomPosition();
  square.style.left = `${x}px`;
  square.style.top = `${y}px`;
}

square.addEventListener('click', () => {
  score++;
  scoreDisplay.textContent = score;
  moveSquare();
});

// Start the game
moveSquare();
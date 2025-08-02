const square = document.getElementById('square');
const scoreDisplay = document.getElementById('score');
const timeDisplay = document.getElementById('time');
const startBtn = document.getElementById('startBtn');
const gameArea = document.getElementById('gameArea');

let score = 0;
let timeLeft = 30;
let timerInterval;
let moveInterval;

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

  // Visual feedback
  square.classList.add('clicked');
  setTimeout(() => square.classList.remove('clicked'), 200);

  moveSquare();
});

function startGame() {
  // Reset everything
  score = 0;
  timeLeft = 30;
  scoreDisplay.textContent = score;
  timeDisplay.textContent = timeLeft;
  square.style.display = 'block';
  moveSquare();

  // Clear existing intervals if restarting
  clearInterval(timerInterval);
  clearInterval(moveInterval);

  timerInterval = setInterval(() => {
    timeLeft--;
    timeDisplay.textContent = timeLeft;

    if (timeLeft <= 0) {
      endGame();
    }
  }, 1000);

  moveInterval = setInterval(() => {
    moveSquare();
  }, 5000);
}

function endGame() {
  clearInterval(timerInterval);
  clearInterval(moveInterval);
  square.style.display = 'none';
  alert(`⏰ Time's up! Your final score is ${score}.`);
}

startBtn.addEventListener('click', startGame);

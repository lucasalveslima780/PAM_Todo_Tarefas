
//Toda a lógica do jogo da velha.

const board = document.getElementById('board');
const status = document.getElementById('status');
let currentPlayer = 'X';
let gameActive = true;
let cells = Array(9).fill('');

function createBoard() {
  board.innerHTML = '';
  cells.forEach((cell, index) => {
    const div = document.createElement('div');
    div.classList.add('cell');
    div.dataset.index = index;
    div.textContent = cell;
    div.addEventListener('click', handleMove);
    board.appendChild(div);
  });
  updateStatus();
}

function handleMove(e) {
  const index = e.target.dataset.index;
  if (cells[index] || !gameActive) return;
  cells[index] = currentPlayer;
  createBoard();
  if (checkWin()) {
    status.textContent = `Jogador ${currentPlayer} venceu!`;
    gameActive = false;
  } else if (!cells.includes('')) {
    status.textContent = 'Empate!';
    gameActive = false;
  } else {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    updateStatus();
  }
}

function updateStatus() {
  status.textContent = `Vez do jogador ${currentPlayer}`;
}

function checkWin() {
  const wins = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
  ];
  return wins.some(comb => 
    cells[comb[0]] && cells[comb[0]] === cells[comb[1]] && cells[comb[1]] === cells[comb[2]]
  );
}

function resetGame() {
  cells = Array(9).fill('');
  currentPlayer = 'X';
  gameActive = true;
  createBoard();
}

createBoard();
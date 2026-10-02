/**
 * Tic-Tac-Toe Game Logic
 * Pure Vanilla JavaScript implementation with zero external dependencies.
 */

document.addEventListener('DOMContentLoaded', () => {
  // DOM Elements
  const statusDisplay = document.getElementById('status');
  const boardElement = document.getElementById('board');
  const restartButton = document.getElementById('restart-btn');
  const cells = document.querySelectorAll('.cell');

  // Game State
  let board = Array(9).fill('');
  let currentPlayer = 'X';
  let isGameActive = true;

  // Winning Combinations (Rows, Columns, Diagonals)
  const WINNING_CONDITIONS = [
    [0, 1, 2], // Row 1
    [3, 4, 5], // Row 2
    [6, 7, 8], // Row 3
    [0, 3, 6], // Column 1
    [1, 4, 7], // Column 2
    [2, 5, 8], // Column 3
    [0, 4, 8], // Diagonal top-left to bottom-right
    [2, 4, 6]  // Diagonal top-right to bottom-left
  ];

  /**
   * Helper to format player indicator with themed class
   * @param {string} player - 'X' or 'O'
   * @returns {string} HTML string
   */
  const formatPlayer = (player) => {
    const playerClass = player === 'X' ? 'player-x' : 'player-o';
    return `<span class="player-indicator ${playerClass}">${player}</span>`;
  };

  /**
   * Updates the game status display
   * @param {string} message - Message HTML to display
   */
  const setStatus = (message) => {
    statusDisplay.innerHTML = message;
  };

  /**
   * Sets the initial status message
   */
  const displayTurn = () => {
    setStatus(`Player ${formatPlayer(currentPlayer)}'s Turn`);
  };

  /**
   * Evaluates if the current board state contains a win or a draw
   */
  const evaluateBoard = () => {
    let roundWon = false;
    let winningCombo = null;

    // Check all winning combinations
    for (let i = 0; i < WINNING_CONDITIONS.length; i++) {
      const [a, b, c] = WINNING_CONDITIONS[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        roundWon = true;
        winningCombo = WINNING_CONDITIONS[i];
        break;
      }
    }

    if (roundWon) {
      isGameActive = false;
      setStatus(`Player ${formatPlayer(currentPlayer)} Wins! 🎉`);

      // Highlight winning cells
      winningCombo.forEach((index) => {
        cells[index].classList.add('win');
      });

      // Disable remaining interactive cells
      cells.forEach((cell) => {
        cell.disabled = true;
      });
      return;
    }

    // Check for a draw (no empty cells left)
    const isRoundDraw = !board.includes('');
    if (isRoundDraw) {
      isGameActive = false;
      setStatus("Game ended in a draw! 🤝");
      return;
    }

    // Switch turn to the other player
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    displayTurn();
  };

  /**
   * Handles cell selection by a player
   * @param {Event} event - Click event
   */
  const handleCellClick = (event) => {
    const clickedCell = event.target.closest('.cell');

    // Return if not a cell button or if game is inactive
    if (!clickedCell || !isGameActive) return;

    const cellIndex = parseInt(clickedCell.getAttribute('data-cell-index'), 10);

    // Return if cell is already populated
    if (board[cellIndex] !== '') return;

    // Update state
    board[cellIndex] = currentPlayer;

    // Update cell UI
    clickedCell.textContent = currentPlayer;
    clickedCell.classList.add(currentPlayer.toLowerCase());
    clickedCell.disabled = true;
    clickedCell.setAttribute(
      'aria-label',
      `Row ${Math.floor(cellIndex / 3) + 1} Column ${(cellIndex % 3) + 1}: ${currentPlayer}`
    );

    // Evaluate result
    evaluateBoard();
  };

  /**
   * Resets the entire game state and UI to original starting conditions
   */
  const restartGame = () => {
    board = Array(9).fill('');
    currentPlayer = 'X';
    isGameActive = true;

    // Reset cells
    cells.forEach((cell, index) => {
      cell.textContent = '';
      cell.classList.remove('x', 'o', 'win');
      cell.disabled = false;
      cell.setAttribute('aria-label', `Row ${Math.floor(index / 3) + 1} Column ${(index % 3) + 1}`);
    });

    displayTurn();
  };

  // Event Listeners
  boardElement.addEventListener('click', handleCellClick);
  restartButton.addEventListener('click', restartGame);

  // Initialize
  displayTurn();
});
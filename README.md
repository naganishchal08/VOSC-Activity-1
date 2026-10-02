# Modern Vanilla Tic-Tac-Toe

A lightweight, fully responsive, and accessible Tic-Tac-Toe game built strictly with semantic HTML5, modern CSS, and vanilla JavaScript—zero external frameworks or libraries.

---

## 🎮 Features

- **Strict Vanilla Stack**: Built without any external frameworks, libraries, or build tools.
- **Modern Responsive Design**: Centered board layout with a dark glassmorphic card, smooth transitions, and mobile-friendly touch targets.
- **Clear Player Distinction**: Custom color palettes and subtle neon glow effects for Player **X** (electric blue) and Player **O** (vibrant rose).
- **Robust Game Logic**:
  - Turn alternation starting with Player X.
  - Automatic detection of horizontal, vertical, and diagonal wins.
  - Draw detection when all 9 cells are occupied without a winner.
  - Instant gameplay lock upon game completion with animated highlight for winning cells.
- **One-Click Restart**: Fully resets board state, UI indicators, and active turn.
- **Accessibility (a11y)**: Semantic `<button>` elements, full keyboard navigation support, focus indicators, and `aria-live` status announcements.

---

## 📁 File Structure

```text
tic-tac-toe/
├── index.html   # Markup containing the 3x3 grid, status bar, and controls
├── style.css    # Clean, modern CSS styling and responsive grid rules
├── script.js    # State management, win/draw evaluation, and UI bindings
└── README.md    # Project overview and local execution guide
This is readme what to do?
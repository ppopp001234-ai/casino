// 🎰 符號與機率設定
const symbolPool = [
  { symbol: '🍒', weight: 30 },  // 常見
  { symbol: '🍋', weight: 25 },
  { symbol: '🍊', weight: 20 },
  { symbol: '🍉', weight: 15 },
  { symbol: '⭐', weight: 7 },   // 稀有
  { symbol: '🔔', weight: 3 }   // 最稀有
];

// 🎧 音效設定
const spinSound = new Audio('sounds/spin.mp3');
const winSound = new Audio('sounds/win.mp3');
const bgm = new Audio('sounds/bgm.mp3');
bgm.loop = true;
bgm.volume = 0.3;
bgm.play();

let score = 0;

// 🎯 登入流程
function login() {
  const username = document.getElementById('username').value.trim();
  if (!username) {
    alert('請輸入暱稱');
    return;
  }
  document.getElementById('player-name').textContent = username;
  document.getElementById('login-section').style.display = 'none';
  document.getElementById('game-section').style.display = 'block';
}

// 🎲 抽出符號（依照權重）
function getRandomSymbol() {
  const total = symbolPool.reduce((sum, s) => sum + s.weight, 0);
  let rand = Math.random() * total;
  for (let s of symbolPool) {
    if (rand < s.weight) return s.symbol;
    rand -= s.weight;
  }
}

// 🧮 判斷中獎
function checkWin(matrix) {
  const rows = matrix;
  const diagonals = [
    [matrix[0][0], matrix[1][1], matrix[2][2]],
    [matrix[0][2], matrix[1][1], matrix[2][0]]
  ];
  const allLines = [...rows, ...diagonals];

  for (let line of allLines) {
    if (line.every(s => s === line[0])) {
      return { symbol: line[0], type: 'line' };
    }
  }

  const flat = matrix.flat();
  if (flat.every(s => s === flat[0])) {
    return { symbol: flat[0], type: 'full' };
  }

  return null;
}

// 💰 根據符號給分
function getPrize(symbol, type) {
  const base = {
    '🍒': 50,
    '🍋': 100,
    '🍊': 150,
    '🍉': 300,
    '⭐': 500,
    '🔔': 1000
  }[symbol] || 0;

  return type === 'full' ? base * 3 : base;
}

// 🎰 轉輪主邏輯
function spin() {
  spinSound.play();
  const grid = document.getElementById('slot-grid');
  grid.innerHTML = '';
  const cells = [];
  const resultMatrix = [];

  for (let row = 0; row < 3; row++) {
    const rowSymbols = [];
    for (let col = 0; col < 3; col++) {
      const cell = document.createElement('div');
      cell.className = 'cell';
      grid.appendChild(cell);
      cells.push(cell);
      rowSymbols.push(null);
    }
    resultMatrix.push(rowSymbols);
  }

  const delays = [500, 800, 1100];
  for (let col = 0; col < 3; col++) {
    setTimeout(() => {
      for (let row = 0; row < 3; row++) {
        const index = row * 3 + col;
        const cell = cells[index];
        const symbol = getRandomSymbol();
        resultMatrix[row][col] = symbol;

        const span = document.createElement('span');
        span.className = 'symbol';
        span.textContent = symbol;
        cell.innerHTML = '';
        cell.appendChild(span);
      }
    }, delays[col]);
  }

  setTimeout(() => {
    const resultText = document.getElementById('result');
    const scoreDisplay = document.getElementById('score');
    const win = checkWin(resultMatrix);

    if (win) {
      const prize = getPrize(win.symbol, win.type);
      score += prize;
      scoreDisplay.textContent = score;
      resultText.textContent = `🎉 恭喜中獎！符號 ${win.symbol}，獲得 ${prize} 分`;
      winSound.play();
      flashEffect();
      dropCoins();
    } else {
      resultText.textContent = '😢 沒中獎，再試一次吧！';
    }
  }, 1400);
}

// ✨ 閃爍動畫
function flashEffect() {
  const container = document.getElementById('game-container');
  container.classList.add('flash');
  setTimeout(() => container.classList.remove('flash'), 500);
}

// 🪙 金幣動畫
function dropCoins() {
  const container = document.getElementById('game-container');
  for (let i = 0; i < 5; i++) {
    const coin = document.createElement('div');
    coin.className = 'coin';
    coin.textContent = '🪙';
    coin.style.left = `${20 + i * 30}px`;
    container.appendChild(coin);
    setTimeout(() => coin.remove(), 1000);
  }
}

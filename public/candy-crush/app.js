// Tile types (6 different colors/shapes)
const tileTypes = [
    { color: 'bg-red-400', shape: '🍬' },
    { color: 'bg-blue-400', shape: '🍭' },
    { color: 'bg-green-400', shape: '🍪' },
    { color: 'bg-yellow-400', shape: '🧁' },
    { color: 'bg-purple-400', shape: '🍫' },
    { color: 'bg-pink-400', shape: '🍩' }
];

// Game state
let board = [];
let selectedTile = null;
let score = 0;
let timeLeft = 120;
let timer;
let soundEnabled = true;
let volume = 70;
let highScore = localStorage.getItem('highScore') || 0;
// Preload match sound
let matchAudio = null;
// Shared AudioContext (used by oscillator fallback)
let sharedAudioCtx = null;
function ensureAudioContext() {
    try {
        if (!sharedAudioCtx) sharedAudioCtx = new (window.AudioContext || window.webkitAudioContext)();
        if (sharedAudioCtx.state === 'suspended') {
            sharedAudioCtx.resume().then(() => console.log('ensureAudioContext: resumed')).catch((e) => console.warn('ensureAudioContext: resume failed', e));
        }
        return sharedAudioCtx;
    } catch (e) {
        console.warn('ensureAudioContext error', e);
        return null;
    }
}
function initMatchAudio() {
    try {
        matchAudio = new Audio('pop-402324.mp3');
        matchAudio.preload = 'auto';
        matchAudio.volume = volume / 100;
        console.log('initMatchAudio: created Audio object, src=', matchAudio.src);
        // Some browsers require a user gesture before play; we'll still attempt to play when matches happen
        matchAudio.addEventListener('error', (e) => {
            console.warn('Match audio failed to load:', e);
            matchAudio = null; // fallback to oscillator
        });
        matchAudio.addEventListener('canplaythrough', () => {
            console.log('Match audio canplaythrough event fired');
        });
    } catch (e) {
        console.warn('Audio init error:', e);
        matchAudio = null;
    }
}

// DOM elements
const mainMenu = document.getElementById('main-menu');
const gameScreen = document.getElementById('game-screen');
const gameOverScreen = document.getElementById('game-over');
const gameBoard = document.getElementById('game-board');
const scoreDisplay = document.getElementById('score');
const timerDisplay = document.getElementById('timer');
const finalScoreDisplay = document.getElementById('final-score');
const highScoreDisplay = document.getElementById('high-score');
const highScoreMessage = document.getElementById('high-score-message');
const settingsModal = document.getElementById('settings-modal');
const soundToggle = document.getElementById('sound-toggle');
const volumeSlider = document.querySelector('input[type="range"]');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    highScoreDisplay.textContent = highScore;

    // Load settings from localStorage
    if (localStorage.getItem('soundEnabled') !== null) {
        soundEnabled = localStorage.getItem('soundEnabled') === 'true';
        soundToggle.checked = soundEnabled;
    }
    if (localStorage.getItem('volume') !== null) {
        volume = parseInt(localStorage.getItem('volume'));
        volumeSlider.value = volume;
    }
    // Initialize match audio after settings applied
    initMatchAudio();
});

// Game functions
function startGame() {
    mainMenu.classList.add('hidden');
    gameScreen.classList.remove('hidden');

    // Ensure AudioContext is resumed on user gesture (Start Game)
    try { ensureAudioContext(); } catch (e) { /* ignore */ }

    score = 0;
    timeLeft = 120;
    scoreDisplay.textContent = score;
    timerDisplay.textContent = timeLeft;

    initializeBoard();
    renderBoard();

    // Start timer
    clearInterval(timer);
    timer = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer);
            endGame();
        }
    }, 1000);
}

function initializeBoard() {
    board = [];
    for (let row = 0; row < 8; row++) {
        board[row] = [];
        for (let col = 0; col < 8; col++) {
            board[row][col] = getRandomTile();
        }
    }

    // Ensure no matches at start
    while (findMatches().length > 0) {
        for (let match of findMatches()) {
            for (let tile of match) {
                board[tile.row][tile.col] = getRandomTile();
            }
        }
    }
}

function getRandomTile() {
    return tileTypes[Math.floor(Math.random() * tileTypes.length)];
}

function renderBoard() {
    gameBoard.innerHTML = '';
    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            const tile = document.createElement('div');
            tile.className = `tile w-10 h-10 ${board[row][col].color} flex items-center justify-center text-xl rounded-lg cursor-pointer shadow-md`;
            tile.textContent = board[row][col].shape;
            tile.dataset.row = row;
            tile.dataset.col = col;

            tile.addEventListener('click', () => handleTileClick(row, col, tile));

            gameBoard.appendChild(tile);
        }
    }
}

function handleTileClick(row, col, tileElement) {
    if (!selectedTile) {
        // First tile selected
        selectedTile = { row, col, element: tileElement };
        tileElement.classList.add('ring-4', 'ring-purple-300');
    } else {
        // Second tile selected
        const firstTile = selectedTile;
        const secondTile = { row, col, element: tileElement };

        // Check if tiles are adjacent
        if (areAdjacent(firstTile, secondTile)) {
            // Swap tiles
            swapTiles(firstTile, secondTile);

            // Check for matches after swap
            const matches = findMatches();

            if (matches.length > 0) {
                // Valid move
                processMatches(matches);
            } else {
                // Invalid move - swap back
                setTimeout(() => {
                    swapTiles(firstTile, secondTile);
                }, 300);
            }
        }

        // Reset selection
        firstTile.element.classList.remove('ring-4', 'ring-purple-300');
        selectedTile = null;
    }
}

function areAdjacent(tile1, tile2) {
    return (
        (Math.abs(tile1.row - tile2.row) === 1 && tile1.col === tile2.col) ||
        (Math.abs(tile1.col - tile2.col) === 1 && tile1.row === tile2.row)
    );
}

function swapTiles(tile1, tile2) {
    // Swap in board array
    const temp = board[tile1.row][tile1.col];
    board[tile1.row][tile1.col] = board[tile2.row][tile2.col];
    board[tile2.row][tile2.col] = temp;

    // Animate the swap
    tile1.element.classList.add('transform', 'transition-all', 'duration-300');
    tile2.element.classList.add('transform', 'transition-all', 'duration-300');

    // Update display
    tile1.element.textContent = board[tile1.row][tile1.col].shape;
    tile1.element.className = `tile w-10 h-10 ${board[tile1.row][tile1.col].color} flex items-center justify-center text-xl rounded-lg cursor-pointer shadow-md`;

    tile2.element.textContent = board[tile2.row][tile2.col].shape;
    tile2.element.className = `tile w-10 h-10 ${board[tile2.row][tile2.col].color} flex items-center justify-center text-xl rounded-lg cursor-pointer shadow-md`;

    // Reset animation classes after swap
    setTimeout(() => {
        tile1.element.classList.remove('transform', 'transition-all', 'duration-300');
        tile2.element.classList.remove('transform', 'transition-all', 'duration-300');
    }, 300);
}

function findMatches() {
    const matches = [];

    // Check horizontal matches
    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 6; col++) {
            if (
                board[row][col].shape === board[row][col + 1].shape &&
                board[row][col].shape === board[row][col + 2].shape
            ) {
                // Found a match of 3
                const match = [
                    { row, col },
                    { row, col: col + 1 },
                    { row, col: col + 2 }
                ];

                // Check for longer matches
                let i = col + 3;
                while (i < 8 && board[row][i].shape === board[row][col].shape) {
                    match.push({ row, col: i });
                    i++;
                }

                matches.push(match);
                col = i - 1; // Skip ahead
            }
        }
    }

    // Check vertical matches
    for (let col = 0; col < 8; col++) {
        for (let row = 0; row < 6; row++) {
            if (
                board[row][col].shape === board[row + 1][col].shape &&
                board[row][col].shape === board[row + 2][col].shape
            ) {
                // Found a match of 3
                const match = [
                    { row, col },
                    { row: row + 1, col },
                    { row: row + 2, col }
                ];

                // Check for longer matches
                let i = row + 3;
                while (i < 8 && board[i][col].shape === board[row][col].shape) {
                    match.push({ row: i, col });
                    i++;
                }

                matches.push(match);
                row = i - 1; // Skip ahead
            }
        }
    }

    return matches;
}

function processMatches(matches) {
    // Play pop sound for each match (gives per-match feedback)

    // Calculate score
    let comboMultiplier = 1;
    let totalScore = 0;

    for (let match of matches) {
        // Play pop sound only for exact 3-tile matches (skip 4+ matches)
        if (soundEnabled && match.length === 3) {
            try { playMatchSound(); } catch (e) { console.warn('processMatches: playMatchSound error', e); }
        }
        const baseScore = 10 + (match.length - 3) * 5;
        totalScore += Math.floor(baseScore * comboMultiplier);
        comboMultiplier += 0.5;

        // Mark tiles as matched
        for (let tile of match) {
            const tileElement = gameBoard.children[tile.row * 8 + tile.col];
            tileElement.classList.add('matched');
        }
    }

    // Update score
    score += totalScore;
    scoreDisplay.textContent = score;

    // Remove matched tiles after animation
    setTimeout(() => {
        for (let match of matches) {
            for (let tile of match) {
                board[tile.row][tile.col] = null;
            }
        }

        // Drop tiles from above
        dropTiles();

        // Fill empty spaces
        fillEmptySpaces();

        // Check for new matches from the drops
        const newMatches = findMatches();
        if (newMatches.length > 0) {
            setTimeout(() => processMatches(newMatches), 500);
        }
    }, 500);
}

function dropTiles() {
    for (let col = 0; col < 8; col++) {
        let emptyRow = 7;

        for (let row = 7; row >= 0; row--) {
            if (board[row][col] !== null) {
                if (row !== emptyRow) {
                    board[emptyRow][col] = board[row][col];
                    board[row][col] = null;
                }
                emptyRow--;
            }
        }
    }
}

function fillEmptySpaces() {
    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            if (board[row][col] === null) {
                board[row][col] = getRandomTile();
            }
        }
    }
    renderBoard();
}

function playMatchSound() {
    if (!soundEnabled) {
        console.log('playMatchSound: soundEnabled=false — skipping');
        return;
    }

    console.log('playMatchSound: attempt, matchAudio=', !!matchAudio, 'volume=', volume);

    // Try to play the preloaded MP3 first
    if (matchAudio) {
        try {
            // Ensure position & volume
            try { matchAudio.currentTime = 0; } catch (e) { /* ignore */ }
            matchAudio.volume = volume / 100;

            const playPromise = matchAudio.play();
            if (playPromise !== undefined) {
                playPromise.then(() => {
                    console.log('playMatchSound: matchAudio.play() resolved');
                }).catch((err) => {
                    console.warn('playMatchSound: matchAudio.play() rejected, will try clone/fallback', err);
                    // Try clone if original failed
                    try {
                        const instance = matchAudio.cloneNode();
                        instance.volume = volume / 100;
                        instance.addEventListener('playing', () => console.log('playMatchSound: clone playing'));
                        instance.addEventListener('error', (ev) => console.warn('playMatchSound: clone error', ev));
                        const p2 = instance.play();
                        if (p2 !== undefined) {
                            p2.catch((err2) => {
                                console.warn('playMatchSound: clone playback failed, falling back to oscillator:', err2);
                                playOscillatorSound();
                            });
                        }
                    } catch (e2) {
                        console.warn('playMatchSound: clone play error, falling back to oscillator:', e2);
                        playOscillatorSound();
                    }
                });
            } else {
                console.log('playMatchSound: play() returned undefined (no promise) — assuming started');
            }
            return;
        } catch (e) {
            console.warn('playMatchSound: MP3 play error, falling back to oscillator:', e);
        }
    }

    // Fallback: simple oscillator beep
    console.log('playMatchSound: no MP3 available, using oscillator fallback');
    playOscillatorSound();
}

function playOscillatorSound() {
    try {
        const audioCtx = ensureAudioContext() || new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();

        oscillator.type = 'triangle';
        oscillator.frequency.value = 800;
        gainNode.gain.value = (volume / 100) * 0.5;

        oscillator.connect(gainNode);
        gainNode.connect(audioCtx.destination);

        oscillator.start();
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.3);
        oscillator.stop(audioCtx.currentTime + 0.3);
    } catch (e) {
        console.log('Audio error:', e);
    }
}

function endGame() {
    gameScreen.classList.add('hidden');
    gameOverScreen.classList.remove('hidden');

    finalScoreDisplay.textContent = score;

    if (score > highScore) {
        highScore = score;
        localStorage.setItem('highScore', highScore);
        highScoreDisplay.textContent = highScore;
        highScoreMessage.classList.remove('hidden');

        // Play victory sound if enabled
        if (soundEnabled) {
            try {
                const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
                const oscillator = audioCtx.createOscillator();
                const gainNode = audioCtx.createGain();

                oscillator.type = 'sine';
                oscillator.frequency.setValueAtTime(440, audioCtx.currentTime);
                oscillator.frequency.exponentialRampToValueAtTime(880, audioCtx.currentTime + 0.5);
                gainNode.gain.value = volume / 100 * 0.3;

                oscillator.connect(gainNode);
                gainNode.connect(audioCtx.destination);

                oscillator.start();
                gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.6);
                oscillator.stop(audioCtx.currentTime + 0.6);
            } catch (e) {
                console.log('Audio error:', e);
            }
        }
    }
}

function restartGame() {
    gameOverScreen.classList.add('hidden');
    startGame();
}

function backToMenu() {
    gameOverScreen.classList.add('hidden');
    mainMenu.classList.remove('hidden');
    highScoreDisplay.textContent = highScore;
}

function showSettings() {
    console.log('showSettings: opening settings modal');
    settingsModal.classList.remove('hidden');
}

// Helper to test the match sound from UI/console
function playTestSound() {
    console.log('playTestSound: attempting to play match sound, soundEnabled=', soundEnabled, 'volume=', volume);
    if (!soundEnabled) {
        console.log('playTestSound: sound is disabled');
        return;
    }

    // Try direct play on the preloaded audio first (user gesture should allow this)
    if (matchAudio) {
        try { ensureAudioContext(); } catch (e) { /* ignore */ }
        try {
            try { matchAudio.currentTime = 0; } catch (e) { /* ignore */ }
            matchAudio.volume = volume / 100;
            const p = matchAudio.play();
            if (p !== undefined) {
                p.then(() => console.log('playTestSound: matchAudio.play() resolved')).catch((err) => {
                    console.warn('playTestSound: matchAudio.play() failed, delegating to playMatchSound for clone/fallback', err);
                    playMatchSound();
                });
            }
            return;
        } catch (e) {
            console.warn('playTestSound: direct matchAudio.play() threw', e);
        }
    }

    // Fallback to existing flow
    playMatchSound();
}

function hideSettings() {
    soundEnabled = soundToggle.checked;
    volume = parseInt(volumeSlider.value);

    localStorage.setItem('soundEnabled', soundEnabled);
    localStorage.setItem('volume', volume);

    // Apply volume to preloaded audio if available
    if (matchAudio) {
        try {
            matchAudio.volume = volume / 100;
        } catch (e) {
            console.warn('Failed to set matchAudio volume:', e);
        }
    }

    settingsModal.classList.add('hidden');
}

// Variables globales del juego
let currentMode = null;
let currentWord = '';
let currentHint = '';
let currentCategory = '';
let guessedLetters = [];
let wrongGuesses = 0;
let maxWrongGuesses = 6;
let score = 0;
let wordsCompleted = 0;
let gameStartTime = null;
let gameTimer = null;
let timeLimit = null;

// Lista de palabras con pistas y categorías
const wordsList = [
    // Geografía
    { word: 'MADRID', hint: 'Capital de España, conocida por el Museo del Prado', category: 'Geografía' },
    { word: 'AMAZONAS', hint: 'El río más largo del mundo, ubicado en Sudamérica', category: 'Geografía' },
    { word: 'SAHARA', hint: 'El desierto más grande del mundo, ubicado en África', category: 'Geografía' },
    { word: 'EVEREST', hint: 'La montaña más alta del mundo, en el Himalaya', category: 'Geografía' },
    { word: 'PACIFICO', hint: 'El océano más grande del planeta', category: 'Geografía' },
    { word: 'ANTARTIDA', hint: 'Continente helado en el polo sur', category: 'Geografía' },
    { word: 'TOKIO', hint: 'Capital de Japón, una de las ciudades más pobladas', category: 'Geografía' },
    { word: 'NILO', hint: 'Río más largo de África, cuna de la civilización egipcia', category: 'Geografía' },
    { word: 'PARIS', hint: 'Ciudad de la luz, capital de Francia', category: 'Geografía' },
    { word: 'LONDRES', hint: 'Capital del Reino Unido, famosa por el Big Ben', category: 'Geografía' },
    { word: 'ROMA', hint: 'Ciudad eterna, capital de Italia', category: 'Geografía' },
    { word: 'BERLIN', hint: 'Capital de Alemania, dividida por un muro hasta 1989', category: 'Geografía' },
    { word: 'MOSCU', hint: 'Capital de Rusia, famosa por la Plaza Roja', category: 'Geografía' },
    { word: 'PEKIN', hint: 'Capital de China, sede de los Juegos Olímpicos 2008', category: 'Geografía' },
    { word: 'CAIRO', hint: 'Capital de Egipto, cerca de las pirámides', category: 'Geografía' },
    
    // Ciencia
    { word: 'EINSTEIN', hint: 'Físico alemán, creador de la teoría de la relatividad', category: 'Ciencia' },
    { word: 'DARWIN', hint: 'Naturalista inglés, propuso la teoría de la evolución', category: 'Ciencia' },
    { word: 'NEWTON', hint: 'Físico inglés que descubrió la ley de la gravedad', category: 'Ciencia' },
    { word: 'OXIGENO', hint: 'Gas esencial para la respiración, símbolo O', category: 'Ciencia' },
    { word: 'HIDROGENO', hint: 'El elemento más simple y abundante del universo', category: 'Ciencia' },
    { word: 'CARBONO', hint: 'Elemento base de la vida orgánica, símbolo C', category: 'Ciencia' },
    { word: 'FOTOSINTESIS', hint: 'Proceso por el cual las plantas producen oxígeno', category: 'Ciencia' },
    { word: 'GRAVEDAD', hint: 'Fuerza que atrae los objetos hacia la Tierra', category: 'Ciencia' },
    { word: 'ELECTRON', hint: 'Partícula subatómica con carga negativa', category: 'Ciencia' },
    { word: 'MOLECULA', hint: 'Unidad más pequeña de un compuesto químico', category: 'Ciencia' },
    { word: 'TELESCOPIO', hint: 'Instrumento para observar objetos lejanos en el espacio', category: 'Ciencia' },
    { word: 'MICROSCOPIO', hint: 'Instrumento para ver objetos muy pequeños', category: 'Ciencia' },
    { word: 'ANTIBIOTICO', hint: 'Medicamento que combate las infecciones bacterianas', category: 'Ciencia' },
    { word: 'VACUNA', hint: 'Preparado que estimula las defensas del cuerpo', category: 'Ciencia' },
    { word: 'GENETICA', hint: 'Ciencia que estudia la herencia y los genes', category: 'Ciencia' },
    
    // Historia
    { word: 'NAPOLEON', hint: 'Emperador francés que conquistó gran parte de Europa', category: 'Historia' },
    { word: 'CLEOPATRA', hint: 'Última reina del antiguo Egipto', category: 'Historia' },
    { word: 'COLON', hint: 'Navegante que llegó a América en 1492', category: 'Historia' },
    { word: 'PIRAMIDES', hint: 'Monumentos funerarios del antiguo Egipto', category: 'Historia' },
    { word: 'GLADIADOR', hint: 'Luchador del antiguo Imperio Romano', category: 'Historia' },
    { word: 'VIKINGO', hint: 'Guerrero y navegante escandinavo medieval', category: 'Historia' },
    { word: 'RENACIMIENTO', hint: 'Período de renovación cultural en Europa (siglos XV-XVI)', category: 'Historia' },
    { word: 'REVOLUCION', hint: 'Cambio radical en la organización política o social', category: 'Historia' },
    { word: 'IMPERIO', hint: 'Estado que domina territorios y pueblos diversos', category: 'Historia' },
    { word: 'FARAON', hint: 'Título de los reyes del antiguo Egipto', category: 'Historia' },
    { word: 'COLISEO', hint: 'Anfiteatro romano donde luchaban los gladiadores', category: 'Historia' },
    { word: 'MEDIEVAL', hint: 'Período histórico entre la Antigüedad y el Renacimiento', category: 'Historia' },
    { word: 'CRUZADAS', hint: 'Expediciones militares cristianas a Tierra Santa', category: 'Historia' },
    { word: 'AZTECA', hint: 'Civilización precolombina de México', category: 'Historia' },
    { word: 'INCA', hint: 'Imperio precolombino de los Andes sudamericanos', category: 'Historia' },
    
    // Cultura y Arte
    { word: 'PICASSO', hint: 'Pintor español, creador del cubismo', category: 'Arte' },
    { word: 'MOZART', hint: 'Compositor austriaco, genio de la música clásica', category: 'Arte' },
    { word: 'BEETHOVEN', hint: 'Compositor alemán, creó la Novena Sinfonía', category: 'Arte' },
    { word: 'SHAKESPEARE', hint: 'Dramaturgo inglés, escribió Romeo y Julieta', category: 'Arte' },
    { word: 'CERVANTES', hint: 'Escritor español, autor del Quijote', category: 'Arte' },
    { word: 'MONALISA', hint: 'Famoso cuadro de Leonardo da Vinci', category: 'Arte' },
    { word: 'GUERNICA', hint: 'Obra maestra de Picasso sobre la guerra', category: 'Arte' },
    { word: 'OPERA', hint: 'Género musical que combina canto y teatro', category: 'Arte' },
    { word: 'BALLET', hint: 'Danza clásica de origen francés', category: 'Arte' },
    { word: 'ESCULTURA', hint: 'Arte de crear formas en tres dimensiones', category: 'Arte' },
    { word: 'PINTURA', hint: 'Arte de representar imágenes con colores', category: 'Arte' },
    { word: 'LITERATURA', hint: 'Arte de la expresión escrita', category: 'Arte' },
    { word: 'POESIA', hint: 'Expresión artística a través de versos', category: 'Arte' },
    { word: 'TEATRO', hint: 'Arte escénico de representar historias', category: 'Arte' },
    { word: 'MUSEO', hint: 'Lugar donde se exhiben obras de arte y cultura', category: 'Arte' },
    
    // Deportes
    { word: 'FUTBOL', hint: 'Deporte más popular del mundo, se juega con los pies', category: 'Deportes' },
    { word: 'BALONCESTO', hint: 'Deporte donde se encesta una pelota en una canasta', category: 'Deportes' },
    { word: 'TENIS', hint: 'Deporte de raqueta, famoso por Wimbledon', category: 'Deportes' },
    { word: 'NATACION', hint: 'Deporte acuático, se practica en piscinas o mar', category: 'Deportes' },
    { word: 'ATLETISMO', hint: 'Conjunto de deportes de pista y campo', category: 'Deportes' },
    { word: 'OLIMPIADAS', hint: 'Competición deportiva internacional cada 4 años', category: 'Deportes' },
    { word: 'MARATÓN', hint: 'Carrera de larga distancia de 42 kilómetros', category: 'Deportes' },
    { word: 'GIMNASIA', hint: 'Deporte que requiere fuerza, flexibilidad y agilidad', category: 'Deportes' },
    { word: 'BOXEO', hint: 'Deporte de combate con guantes', category: 'Deportes' },
    { word: 'CICLISMO', hint: 'Deporte que se practica en bicicleta', category: 'Deportes' },
    { word: 'GOLF', hint: 'Deporte donde se golpea una pelota hacia un hoyo', category: 'Deportes' },
    { word: 'VOLEIBOL', hint: 'Deporte de equipo que se juega con una red', category: 'Deportes' },
    { word: 'ESQUI', hint: 'Deporte de invierno que se practica en la nieve', category: 'Deportes' },
    { word: 'SURF', hint: 'Deporte acuático que se practica sobre las olas', category: 'Deportes' },
    { word: 'KARATE', hint: 'Arte marcial de origen japonés', category: 'Deportes' },
    
    // Tecnología
    { word: 'INTERNET', hint: 'Red mundial de computadoras conectadas', category: 'Tecnología' },
    { word: 'COMPUTADORA', hint: 'Máquina electrónica para procesar información', category: 'Tecnología' },
    { word: 'TELEFONO', hint: 'Dispositivo para comunicarse a distancia', category: 'Tecnología' },
    { word: 'TELEVISION', hint: 'Aparato que recibe y muestra imágenes y sonido', category: 'Tecnología' },
    { word: 'SATELITE', hint: 'Objeto que orbita alrededor de la Tierra', category: 'Tecnología' },
    { word: 'ROBOT', hint: 'Máquina programada para realizar tareas', category: 'Tecnología' },
    { word: 'SOFTWARE', hint: 'Programas y aplicaciones de computadora', category: 'Tecnología' },
    { word: 'HARDWARE', hint: 'Componentes físicos de una computadora', category: 'Tecnología' },
    { word: 'LASER', hint: 'Haz de luz concentrada y coherente', category: 'Tecnología' },
    { word: 'RADAR', hint: 'Sistema de detección por ondas de radio', category: 'Tecnología' },
    
    // Naturaleza
    { word: 'ELEFANTE', hint: 'Mamífero terrestre más grande del mundo', category: 'Naturaleza' },
    { word: 'BALLENA', hint: 'Mamífero marino más grande del planeta', category: 'Naturaleza' },
    { word: 'AGUILA', hint: 'Ave rapaz, símbolo de poder y libertad', category: 'Naturaleza' },
    { word: 'TIBURON', hint: 'Depredador marino con dientes afilados', category: 'Naturaleza' },
    { word: 'MARIPOSA', hint: 'Insecto con alas coloridas, símbolo de transformación', category: 'Naturaleza' },
    { word: 'DINOSAURIO', hint: 'Reptil gigante extinto hace millones de años', category: 'Naturaleza' },
    { word: 'VOLCAN', hint: 'Montaña que expulsa lava y gases del interior terrestre', category: 'Naturaleza' },
    { word: 'TERREMOTO', hint: 'Movimiento brusco de la corteza terrestre', category: 'Naturaleza' },
    { word: 'HURACAN', hint: 'Tormenta tropical con vientos muy fuertes', category: 'Naturaleza' },
    { word: 'ARCOIRIS', hint: 'Fenómeno óptico que muestra los colores del espectro', category: 'Naturaleza' }
];

// Inicialización del juego
document.addEventListener('DOMContentLoaded', function() {
    showModeSelection();
    createVirtualKeyboard();
});

// Mostrar selección de modo
function showModeSelection() {
    document.getElementById('mode-selection').style.display = 'block';
    document.getElementById('game-section').style.display = 'none';
    document.getElementById('results-modal').style.display = 'none';
    
    // Resetear variables del juego
    resetGame();
}

// Iniciar juego con modo seleccionado
function startGame(mode) {
    currentMode = mode;
    
    // Configurar límite de tiempo según el modo
    switch(mode) {
        case '10min':
            timeLimit = 10 * 60; // 10 minutos en segundos
            break;
        case '5min':
            timeLimit = 5 * 60; // 5 minutos en segundos
            break;
        default:
            timeLimit = null; // Sin límite
    }
    
    // Mostrar sección del juego
    document.getElementById('mode-selection').style.display = 'none';
    document.getElementById('game-section').style.display = 'block';
    
    // Configurar interfaz según el modo
    setupGameInterface();
    
    // Iniciar el juego
    resetGame();
    getNewWord();
    startTimer();
}

// Configurar interfaz del juego
function setupGameInterface() {
    const timerDisplay = document.getElementById('timer-display');
    
    if (timeLimit) {
        timerDisplay.style.display = 'block';
        updateTimerDisplay();
    } else {
        timerDisplay.style.display = 'none';
    }
}

// Crear teclado virtual
function createVirtualKeyboard() {
    const keyboard = document.getElementById('virtual-keyboard');
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    
    keyboard.innerHTML = '';
    
    for (let letter of letters) {
        const key = document.createElement('button');
        key.className = 'key';
        key.textContent = letter;
        key.onclick = () => guessLetter(letter);
        key.id = `key-${letter}`;
        keyboard.appendChild(key);
    }
}

// Obtener nueva palabra
function getNewWord() {
    const randomIndex = Math.floor(Math.random() * wordsList.length);
    const wordData = wordsList[randomIndex];
    
    currentWord = wordData.word.toUpperCase();
    currentHint = wordData.hint;
    currentCategory = wordData.category;
    
    // Actualizar interfaz
    document.getElementById('hint-text').textContent = currentHint;
    document.getElementById('category').textContent = `Categoría: ${currentCategory}`;
    
    // Crear cajas para las letras
    createWordDisplay();
    
    // Resetear estado del juego para la nueva palabra
    guessedLetters = [];
    wrongGuesses = 0;
    updateLivesDisplay();
    resetHangman();
    resetKeyboard();
}

// Crear display de la palabra
function createWordDisplay() {
    const wordDisplay = document.getElementById('word-display');
    wordDisplay.innerHTML = '';
    
    for (let letter of currentWord) {
        const letterBox = document.createElement('div');
        letterBox.className = 'letter-box';
        letterBox.id = `letter-${currentWord.indexOf(letter)}-${letter}`;
        
        if (letter === ' ') {
            letterBox.style.border = 'none';
            letterBox.style.background = 'transparent';
        }
        
        wordDisplay.appendChild(letterBox);
    }
}

// Adivinar letra
function guessLetter(letter) {
    // Verificar si la letra ya fue usada
    if (guessedLetters.includes(letter)) {
        return;
    }
    
    guessedLetters.push(letter);
    
    // Actualizar teclado
    const key = document.getElementById(`key-${letter}`);
    key.classList.add('used');
    
    // Verificar si la letra está en la palabra
    if (currentWord.includes(letter)) {
        // Letra correcta
        key.classList.add('correct');
        revealLetter(letter);
        
        // Verificar si se completó la palabra
        if (isWordComplete()) {
            wordCompleted();
        }
    } else {
        // Letra incorrecta
        wrongGuesses++;
        updateLivesDisplay();
        drawHangmanPart();
        
        // Verificar si se perdió el juego
        if (wrongGuesses >= maxWrongGuesses) {
            gameOver();
        }
    }
}

// Revelar letra en la palabra
function revealLetter(letter) {
    const letterBoxes = document.querySelectorAll('.letter-box');
    
    for (let i = 0; i < currentWord.length; i++) {
        if (currentWord[i] === letter) {
            letterBoxes[i].textContent = letter;
            letterBoxes[i].classList.add('revealed');
        }
    }
}

// Verificar si la palabra está completa
function isWordComplete() {
    for (let letter of currentWord) {
        if (letter !== ' ' && !guessedLetters.includes(letter)) {
            return false;
        }
    }
    return true;
}

// Palabra completada
function wordCompleted() {
    wordsCompleted++;
    score += calculateScore();
    
    // Actualizar interfaz
    document.getElementById('score').textContent = score;
    document.getElementById('word-counter').textContent = wordsCompleted + 1;
    
    // Efecto visual de celebración
    document.querySelector('.game-area').classList.add('game-won');
    setTimeout(() => {
        document.querySelector('.game-area').classList.remove('game-won');
    }, 600);
    
    // Obtener nueva palabra después de un breve delay
    setTimeout(() => {
        getNewWord();
    }, 1500);
}

// Calcular puntuación
function calculateScore() {
    const baseScore = 100;
    const bonusPerLife = 10;
    const livesRemaining = maxWrongGuesses - wrongGuesses;
    
    return baseScore + (bonusPerLife * livesRemaining);
}

// Game Over
function gameOver() {
    // Efecto visual de derrota
    document.querySelector('.game-area').classList.add('game-lost');
    
    setTimeout(() => {
        showResults('defeat');
    }, 1000);
}

// Dibujar parte del ahorcado
function drawHangmanPart() {
    const parts = ['head', 'body', 'leftArm', 'rightArm', 'leftLeg', 'rightLeg'];
    
    if (wrongGuesses <= parts.length) {
        const part = document.getElementById(parts[wrongGuesses - 1]);
        if (part) {
            part.style.display = 'block';
        }
    }
}

// Resetear dibujo del ahorcado
function resetHangman() {
    const parts = ['head', 'body', 'leftArm', 'rightArm', 'leftLeg', 'rightLeg'];
    
    parts.forEach(partId => {
        const part = document.getElementById(partId);
        if (part) {
            part.style.display = 'none';
        }
    });
}

// Actualizar display de vidas
function updateLivesDisplay() {
    const livesRemaining = maxWrongGuesses - wrongGuesses;
    document.getElementById('lives').textContent = livesRemaining;
}

// Resetear teclado
function resetKeyboard() {
    const keys = document.querySelectorAll('.key');
    keys.forEach(key => {
        key.classList.remove('used', 'correct');
    });
}

// Iniciar temporizador
function startTimer() {
    if (!timeLimit) return;
    
    gameStartTime = Date.now();
    
    gameTimer = setInterval(() => {
        const elapsed = Math.floor((Date.now() - gameStartTime) / 1000);
        const remaining = timeLimit - elapsed;
        
        if (remaining <= 0) {
            clearInterval(gameTimer);
            showResults('timeout');
        } else {
            updateTimerDisplay(remaining);
        }
    }, 1000);
}

// Actualizar display del temporizador
function updateTimerDisplay(remaining = timeLimit) {
    if (!timeLimit) return;
    
    const minutes = Math.floor(remaining / 60);
    const seconds = remaining % 60;
    
    document.getElementById('timer').textContent = 
        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Mostrar pista (función adicional)
function showHint() {
    // Revelar una letra aleatoria que no haya sido adivinada
    const unguessedLetters = [];
    
    for (let letter of currentWord) {
        if (letter !== ' ' && !guessedLetters.includes(letter) && !unguessedLetters.includes(letter)) {
            unguessedLetters.push(letter);
        }
    }
    
    if (unguessedLetters.length > 0) {
        const randomLetter = unguessedLetters[Math.floor(Math.random() * unguessedLetters.length)];
        guessLetter(randomLetter);
        
        // Penalizar por usar pista
        score = Math.max(0, score - 25);
        document.getElementById('score').textContent = score;
    }
}

// Resetear juego
function resetGame() {
    score = 0;
    wordsCompleted = 0;
    wrongGuesses = 0;
    guessedLetters = [];
    gameStartTime = null;
    
    if (gameTimer) {
        clearInterval(gameTimer);
        gameTimer = null;
    }
    
    // Actualizar interfaz
    document.getElementById('score').textContent = score;
    document.getElementById('word-counter').textContent = 1;
    updateLivesDisplay();
    resetHangman();
    resetKeyboard();
}

// Mostrar resultados
function showResults(reason) {
    if (gameTimer) {
        clearInterval(gameTimer);
    }
    
    const modal = document.getElementById('results-modal');
    const resultTitle = document.getElementById('result-title');
    const resultIcon = document.getElementById('result-icon');
    const finalScore = document.getElementById('final-score');
    const wordsCompletedSpan = document.getElementById('words-completed');
    const timePlayed = document.getElementById('time-played');
    const resultMessage = document.getElementById('result-message');
    
    // Calcular tiempo jugado
    const totalTime = gameStartTime ? Math.floor((Date.now() - gameStartTime) / 1000) : 0;
    const minutes = Math.floor(totalTime / 60);
    const seconds = totalTime % 60;
    
    // Configurar contenido según el resultado
    switch(reason) {
        case 'defeat':
            resultTitle.textContent = '¡Juego Terminado!';
            resultIcon.innerHTML = '<i class="fas fa-skull"></i>';
            resultIcon.className = 'result-icon failure';
            resultMessage.textContent = `La palabra era: ${currentWord}. ¡Inténtalo de nuevo!`;
            break;
            
        case 'timeout':
            resultTitle.textContent = '¡Tiempo Agotado!';
            resultIcon.innerHTML = '<i class="fas fa-clock"></i>';
            resultIcon.className = 'result-icon timeout';
            resultMessage.textContent = '¡El tiempo se acabó! Pero has hecho un buen trabajo.';
            break;
            
        default:
            resultTitle.textContent = '¡Felicidades!';
            resultIcon.innerHTML = '<i class="fas fa-trophy"></i>';
            resultIcon.className = 'result-icon success';
            resultMessage.textContent = '¡Excelente trabajo! Sigue practicando para mejorar.';
    }
    
    // Actualizar estadísticas
    finalScore.textContent = score;
    wordsCompletedSpan.textContent = wordsCompleted;
    timePlayed.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    // Mostrar modal
    modal.style.display = 'flex';
}

// Cerrar modal
function closeModal() {
    document.getElementById('results-modal').style.display = 'none';
}

// Reiniciar juego
function restartGame() {
    closeModal();
    resetGame();
    getNewWord();
    startTimer();
}

// Ir al inicio
function goHome() {
    window.location.href = 'index.html';
}

// Manejo de teclado físico
document.addEventListener('keydown', function(event) {
    const key = event.key.toUpperCase();
    
    // Solo procesar letras
    if (key.match(/[A-Z]/) && key.length === 1) {
        // Verificar que el juego esté activo
        if (document.getElementById('game-section').style.display !== 'none' && 
            document.getElementById('results-modal').style.display === 'none') {
            guessLetter(key);
        }
    }
    
    // Teclas especiales
    switch(event.key) {
        case 'Enter':
            if (document.getElementById('results-modal').style.display !== 'none') {
                restartGame();
            }
            break;
        case 'Escape':
            if (document.getElementById('results-modal').style.display !== 'none') {
                closeModal();
            } else if (document.getElementById('game-section').style.display !== 'none') {
                showModeSelection();
            }
            break;
    }
});

// Prevenir comportamiento por defecto en algunos casos
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

// Funciones de utilidad para debugging (se pueden remover en producción)
function debugInfo() {
    console.log({
        currentWord,
        currentHint,
        currentCategory,
        guessedLetters,
        wrongGuesses,
        score,
        wordsCompleted
    });
}

// Exportar funciones para uso global
window.startGame = startGame;
window.showModeSelection = showModeSelection;
window.guessLetter = guessLetter;
window.getNewWord = getNewWord;
window.showHint = showHint;
window.closeModal = closeModal;
window.restartGame = restartGame;
window.goHome = goHome;
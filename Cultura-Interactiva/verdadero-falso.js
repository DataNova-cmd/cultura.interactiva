// Juego Verdadero o Falso - Cultura General
class VerdaderoFalsoGame {
    constructor() {
        this.statements = this.initializeStatements();
        this.currentStatementIndex = 0;
        this.gameState = {
            correct: 0,
            incorrect: 0,
            score: 0,
            answered: false
        };
        this.shuffledStatements = [];
        
        this.initializeDOM();
        this.setupEventListeners();
        this.startGame();
    }

    initializeStatements() {
        return [
            { statement: "La Tierra gira alrededor del Sol.", correct: true },
            { statement: "El río Amazonas es el más largo del mundo.", correct: true },
            { statement: "Australia es tanto un país como un continente.", correct: true },
            { statement: "La capital de Canadá es Toronto.", correct: false },
            { statement: "El cuerpo humano tiene 206 huesos.", correct: true },
            { statement: "La Gran Muralla China se puede ver a simple vista desde el espacio.", correct: false },
            { statement: "Leonardo da Vinci pintó la Mona Lisa.", correct: true },
            { statement: "El océano Pacífico es el más grande del planeta.", correct: true },
            { statement: "Los pingüinos pueden volar.", correct: false },
            { statement: "El hierro es un metal.", correct: true },
            { statement: "Japón está formado por miles de islas.", correct: true },
            { statement: "El desierto del Sahara es el más grande del mundo.", correct: true },
            { statement: "Los seres humanos respiran dióxido de carbono.", correct: false },
            { statement: "El Monte Everest es la montaña más alta del mundo.", correct: true },
            { statement: "El euro es la moneda oficial de España.", correct: true },
            { statement: "Los murciélagos son mamíferos.", correct: true },
            { statement: "La capital de Brasil es Río de Janeiro.", correct: false },
            { statement: "La sangre humana es de color azul dentro del cuerpo.", correct: false },
            { statement: "El planeta Marte es conocido como el planeta rojo.", correct: true },
            { statement: "El agua hierve a 100 grados Celsius al nivel del mar.", correct: true },
            { statement: "El cerebro humano deja de funcionar mientras dormimos.", correct: false },
            { statement: "El inglés es el idioma más hablado del mundo contando nativos y no nativos.", correct: true },
            { statement: "Las plantas realizan la fotosíntesis.", correct: true },
            { statement: "Cristóbal Colón llegó a América en 1492.", correct: true },
            { statement: "Los delfines son peces.", correct: false },
            { statement: "El Sol es una estrella.", correct: true },
            { statement: "La capital de Italia es Roma.", correct: true },
            { statement: "El ser humano utiliza solo el 10% del cerebro.", correct: false },
            { statement: "El tigre es el felino más grande del mundo.", correct: true },
            { statement: "La Antártida es el continente más frío del planeta.", correct: true },
            { statement: "El oro es un buen conductor de la electricidad.", correct: true },
            { statement: "El cuerpo humano tiene tres pulmones.", correct: false },
            { statement: "La Luna es un satélite natural de la Tierra.", correct: true },
            { statement: "El cuerpo humano tiene cinco sentidos principales.", correct: true },
            { statement: "El agua es un compuesto químico formado por hidrógeno y oxígeno.", correct: true },
            { statement: "La capital de Australia es Sídney.", correct: false },
            { statement: "Los elefantes son los animales terrestres más grandes.", correct: true },
            { statement: "El sonido no puede viajar en el vacío.", correct: true },
            { statement: "La capital de Japón es Tokio.", correct: true },
            { statement: "Las arañas son insectos.", correct: false },
            { statement: "El planeta Júpiter es el más grande del sistema solar.", correct: true },
            { statement: "La muralla romana de Lugo es Patrimonio de la Humanidad.", correct: true },
            { statement: "El cuerpo humano tiene más huesos en la mano que en cualquier otra parte.", correct: false },
            { statement: "El ser humano es un animal omnívoro.", correct: true },
            { statement: "El Polo Norte se encuentra en un continente.", correct: false },
            { statement: "El número π (pi) es un número racional.", correct: false },
            { statement: "La fotosíntesis necesita luz solar.", correct: true },
            { statement: "El cobre es un buen conductor de la electricidad.", correct: true },
            { statement: "El Everest se encuentra en la cordillera del Himalaya.", correct: true },
            { statement: "La capital de Estados Unidos es Nueva York.", correct: false },
            { statement: "El ADN contiene la información genética.", correct: true },
            { statement: "El continente africano está atravesado por el ecuador.", correct: true },
            { statement: "Los pulpos tienen tres corazones.", correct: true },
            { statement: "La velocidad de la luz es mayor que la del sonido.", correct: true },
            { statement: "El planeta Venus es el más frío del sistema solar.", correct: false },
            { statement: "La capital de México es Ciudad de México.", correct: true },
            { statement: "El ajedrez se originó en la Edad Media europea.", correct: false },
            { statement: "El oxígeno es necesario para la combustión.", correct: true },
            { statement: "El ser humano puede vivir varias semanas sin comida.", correct: true },
            { statement: "La Antártida tiene población permanente.", correct: false },
            { statement: "Los reptiles son animales de sangre fría.", correct: true },
            { statement: "El teléfono fue inventado por Alexander Graham Bell.", correct: true },
            { statement: "El Monte Everest mide más de 8.000 metros.", correct: true },
            { statement: "La capital de Rusia es Moscú.", correct: true },
            { statement: "El cerebro consume una gran parte de la energía del cuerpo.", correct: true },
            { statement: "El vidrio es un material completamente natural.", correct: false },
            { statement: "El planeta Mercurio es el más cercano al Sol.", correct: true },
            { statement: "Los seres humanos tienen cuatro grupos sanguíneos principales.", correct: true },
            { statement: "La capital de China es Shanghái.", correct: false },
            { statement: "El tiburón es un pez.", correct: true },
            { statement: "El desierto de Atacama es uno de los más secos del mundo.", correct: true },
            { statement: "La electricidad puede viajar por el plástico.", correct: false },
            { statement: "La capital de Egipto es El Cairo.", correct: true },
            { statement: "El Sol gira alrededor de la Tierra.", correct: false },
            { statement: "El cuerpo humano está formado en su mayoría por agua.", correct: true },
            { statement: "Los cocodrilos pueden vivir tanto en agua dulce como salada.", correct: true },
            { statement: "La capital de Suecia es Estocolmo.", correct: true },
            { statement: "Los volcanes solo existen en la Tierra.", correct: false },
            { statement: "El lenguaje de programación Java y JavaScript son lo mismo.", correct: false },
            { statement: "El ADN tiene forma de doble hélice.", correct: true },
            { statement: "El planeta Neptuno es el más lejano del sistema solar.", correct: true },
            { statement: "Las abejas son importantes para la polinización.", correct: true },
            { statement: "La capital de Colombia es Medellín.", correct: false },
            { statement: "El ser humano puede sobrevivir varios días sin dormir.", correct: true },
            { statement: "La velocidad del sonido es mayor que la de la luz.", correct: false },
            { statement: "El Monte Kilimanjaro está en África.", correct: true },
            { statement: "Los pingüinos viven solo en el Polo Norte.", correct: false },
            { statement: "El corazón humano tiene cuatro cavidades.", correct: true },
            { statement: "La capital de Turquía es Estambul.", correct: false },
            { statement: "Los rayos X pueden atravesar algunos materiales sólidos.", correct: true },
            { statement: "El planeta Saturno tiene anillos visibles.", correct: true },
            { statement: "El sistema solar pertenece a la galaxia Vía Láctea.", correct: true },
            { statement: "El azúcar es una fuente de energía para el cuerpo humano.", correct: true },
            { statement: "La capital de Perú es Lima.", correct: true },
            { statement: "Los delfines utilizan ecolocalización para orientarse.", correct: true },
            { statement: "El aluminio es más pesado que el hierro.", correct: false },
            { statement: "El cerebro humano sigue desarrollándose durante la adolescencia.", correct: true },
            { statement: "La Antártida es el continente más seco del mundo.", correct: true },
            { statement: "El fuego es un estado de la materia.", correct: false },
            { statement: "La Tierra tarda aproximadamente 365 días en dar una vuelta al Sol.", correct: true }
        ];
    }

    initializeDOM() {
        this.elements = {
            currentQuestion: document.getElementById('current-question'),
            correctAnswers: document.getElementById('correct-answers'),
            incorrectAnswers: document.getElementById('incorrect-answers'),
            score: document.getElementById('score'),
            progressFill: document.getElementById('progress-fill'),
            progressText: document.getElementById('progress-text'),
            questionNumberDisplay: document.getElementById('question-number-display'),
            statementText: document.getElementById('statement-text'),
            trueButton: document.getElementById('true-button'),
            falseButton: document.getElementById('false-button'),
            feedbackContainer: document.getElementById('feedback-container'),
            autoAdvanceContainer: document.getElementById('auto-advance-container'),
            countdown: document.getElementById('countdown'),
            restartBtn: document.getElementById('restart-btn'),
            helpBtn: document.getElementById('help-btn'),
            
            // Modals
            resultsModal: document.getElementById('results-modal'),
            helpModal: document.getElementById('help-modal'),
            modalClose: document.getElementById('modal-close'),
            helpModalClose: document.getElementById('help-modal-close'),
            playAgainBtn: document.getElementById('play-again-btn'),
            
            // Final results
            finalScore: document.getElementById('final-score'),
            finalCorrect: document.getElementById('final-correct'),
            finalIncorrect: document.getElementById('final-incorrect'),
            finalPercentage: document.getElementById('final-percentage'),
            performanceMessage: document.getElementById('performance-message')
        };
    }

    setupEventListeners() {
        // Botones principales
        this.elements.restartBtn.addEventListener('click', () => this.restartGame());
        this.elements.helpBtn.addEventListener('click', () => this.showHelp());
        
        // Botones Verdadero/Falso
        this.elements.trueButton.addEventListener('click', () => this.selectAnswer(true));
        this.elements.falseButton.addEventListener('click', () => this.selectAnswer(false));
        
        // Modales
        this.elements.modalClose.addEventListener('click', () => this.hideModal('results-modal'));
        this.elements.helpModalClose.addEventListener('click', () => this.hideModal('help-modal'));
        this.elements.playAgainBtn.addEventListener('click', () => {
            this.hideModal('results-modal');
            this.restartGame();
        });
        
        // Cerrar modales al hacer click fuera
        window.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal')) {
                e.target.style.display = 'none';
            }
        });
    }

    startGame() {
        // Mezclar afirmaciones aleatoriamente
        this.shuffledStatements = [...this.statements].sort(() => Math.random() - 0.5).slice(0, 50);
        this.currentStatementIndex = 0;
        this.gameState = {
            correct: 0,
            incorrect: 0,
            score: 0,
            answered: false
        };
        
        this.showCurrentStatement();
        this.updateStats();
        this.updateProgress();
    }

    showCurrentStatement() {
        if (this.currentStatementIndex >= this.shuffledStatements.length) {
            this.endGame();
            return;
        }

        const statement = this.shuffledStatements[this.currentStatementIndex];
        this.gameState.answered = false;
        
        // Actualizar número de afirmación
        this.elements.currentQuestion.textContent = this.currentStatementIndex + 1;
        this.elements.questionNumberDisplay.textContent = `Afirmación ${this.currentStatementIndex + 1}`;
        
        // Mostrar afirmación
        this.elements.statementText.textContent = statement.statement;
        
        // Resetear botones
        this.resetButtons();
        
        // Ocultar feedback y contador automático
        this.hideFeedback();
        this.hideAutoAdvance();
        
        // Animar entrada de afirmación
        this.elements.statementText.style.opacity = '0';
        setTimeout(() => {
            this.elements.statementText.style.opacity = '1';
        }, 100);
    }

    resetButtons() {
        [this.elements.trueButton, this.elements.falseButton].forEach(button => {
            button.className = button.id === 'true-button' ? 'vf-button true-button' : 'vf-button false-button';
        });
    }

    selectAnswer(userAnswer) {
        if (this.gameState.answered) return;
        
        this.gameState.answered = true;
        const statement = this.shuffledStatements[this.currentStatementIndex];
        const isCorrect = userAnswer === statement.correct;
        
        // Marcar botones
        const selectedButton = userAnswer ? this.elements.trueButton : this.elements.falseButton;
        const correctButton = statement.correct ? this.elements.trueButton : this.elements.falseButton;
        
        // Deshabilitar botones
        [this.elements.trueButton, this.elements.falseButton].forEach(button => {
            button.classList.add('disabled');
        });
        
        // Marcar respuesta correcta
        correctButton.classList.add('correct');
        
        // Si la respuesta es incorrecta, marcar la seleccionada
        if (!isCorrect) {
            selectedButton.classList.add('incorrect');
        }
        
        // Actualizar estadísticas
        if (isCorrect) {
            this.gameState.correct++;
            this.gameState.score += 10;
            this.showFeedback(true, "¡Correcto! Has seleccionado la respuesta correcta.");
        } else {
            this.gameState.incorrect++;
            this.showFeedback(false, `Incorrecto. La respuesta correcta era ${statement.correct ? 'Verdadero' : 'Falso'}.`);
        }
        
        this.updateStats();
        this.showAutoAdvance();
    }

    showFeedback(isCorrect, message) {
        const feedbackIcon = this.elements.feedbackContainer.querySelector('.feedback-icon i');
        const feedbackResult = this.elements.feedbackContainer.querySelector('.feedback-result');
        const feedbackExplanation = this.elements.feedbackContainer.querySelector('.feedback-explanation');
        
        if (isCorrect) {
            feedbackIcon.className = 'fas fa-check-circle';
            feedbackIcon.parentElement.className = 'feedback-icon correct';
            feedbackResult.textContent = '¡Correcto!';
        } else {
            feedbackIcon.className = 'fas fa-times-circle';
            feedbackIcon.parentElement.className = 'feedback-icon incorrect';
            feedbackResult.textContent = 'Incorrecto';
        }
        
        feedbackExplanation.textContent = message;
        this.elements.feedbackContainer.style.display = 'block';
    }

    hideFeedback() {
        this.elements.feedbackContainer.style.display = 'none';
    }

    showAutoAdvance() {
        this.elements.autoAdvanceContainer.style.display = 'block';
        
        let seconds = 2;
        this.elements.countdown.textContent = seconds;
        
        const interval = setInterval(() => {
            seconds--;
            this.elements.countdown.textContent = seconds;
            
            if (seconds <= 0) {
                clearInterval(interval);
                this.hideAutoAdvance();
                this.nextStatement();
            }
        }, 1000);
    }

    hideAutoAdvance() {
        this.elements.autoAdvanceContainer.style.display = 'none';
    }

    nextStatement() {
        this.currentStatementIndex++;
        this.updateProgress();
        
        if (this.currentStatementIndex >= this.shuffledStatements.length) {
            this.endGame();
        } else {
            this.showCurrentStatement();
        }
    }

    updateStats() {
        this.elements.correctAnswers.textContent = this.gameState.correct;
        this.elements.incorrectAnswers.textContent = this.gameState.incorrect;
        this.elements.score.textContent = this.gameState.score;
    }

    updateProgress() {
        const progress = (this.currentStatementIndex / this.shuffledStatements.length) * 100;
        this.elements.progressFill.style.width = `${progress}%`;
        this.elements.progressText.textContent = `${Math.round(progress)}%`;
    }

    endGame() {
        // Guardar puntuación
        this.saveScore();
        
        // Mostrar resultados
        this.showResults();
    }

    saveScore() {
        const userData = JSON.parse(localStorage.getItem('culturaGeneral')) || {};
        if (!userData.puntuaciones) userData.puntuaciones = {};
        
        if (!userData.puntuaciones.verdaderoFalso || this.gameState.score > userData.puntuaciones.verdaderoFalso) {
            userData.puntuaciones.verdaderoFalso = this.gameState.score;
            localStorage.setItem('culturaGeneral', JSON.stringify(userData));
        }
    }

    showResults() {
        const percentage = Math.round((this.gameState.correct / this.shuffledStatements.length) * 100);
        
        this.elements.finalScore.textContent = this.gameState.score;
        this.elements.finalCorrect.textContent = this.gameState.correct;
        this.elements.finalIncorrect.textContent = this.gameState.incorrect;
        this.elements.finalPercentage.textContent = `${percentage}%`;
        
        // Mensaje de rendimiento
        let message = '';
        if (percentage >= 90) {
            message = '¡Excelente! Tienes un conocimiento excepcional de cultura general. ¡Felicitaciones!';
        } else if (percentage >= 80) {
            message = '¡Muy bien! Demuestras tener una sólida base de conocimientos generales.';
        } else if (percentage >= 70) {
            message = '¡Buen trabajo! Tienes buenos conocimientos, pero puedes mejorar aún más.';
        } else if (percentage >= 60) {
            message = 'Bien hecho. Tienes una base decente, sigue practicando para mejorar.';
        } else if (percentage >= 50) {
            message = 'No está mal. Con más práctica y estudio puedes conseguir mejores resultados.';
        } else {
            message = 'No te desanimes. La cultura general se construye día a día. ¡Sigue aprendiendo!';
        }
        
        this.elements.performanceMessage.textContent = message;
        
        this.showModal('results-modal');
    }

    showHelp() {
        this.showModal('help-modal');
    }

    showModal(modalId) {
        document.getElementById(modalId).style.display = 'flex';
    }

    hideModal(modalId) {
        document.getElementById(modalId).style.display = 'none';
    }

    restartGame() {
        this.startGame();
    }
}

// Inicializar el juego cuando se carga la página
document.addEventListener('DOMContentLoaded', () => {
    new VerdaderoFalsoGame();
});
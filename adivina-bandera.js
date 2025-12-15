// Juego Adivina la Bandera - Cultura General
class AdivinaBanderaGame {
    constructor() {
        this.flags = this.initializeFlags();
        this.currentQuestionIndex = 0;
        this.gameState = {
            correct: 0,
            incorrect: 0,
            score: 0,
            answered: false,
            mode: null,
            timeLimit: null,
            startTime: null,
            timeRemaining: null
        };
        this.shuffledFlags = [];
        this.timerInterval = null;
        
        this.initializeDOM();
        this.setupEventListeners();
        this.showModeSelection();
    }

    initializeFlags() {
        return [
            {
                country: "España",
                flag: "https://flagcdn.com/w320/es.png",
                options: ["España", "Italia", "Portugal", "Francia"]
            },
            {
                country: "Francia",
                flag: "https://flagcdn.com/w320/fr.png",
                options: ["Francia", "Países Bajos", "Rusia", "Reino Unido"]
            },
            {
                country: "Italia",
                flag: "https://flagcdn.com/w320/it.png",
                options: ["Italia", "Irlanda", "México", "Hungría"]
            },
            {
                country: "Alemania",
                flag: "https://flagcdn.com/w320/de.png",
                options: ["Alemania", "Bélgica", "España", "Austria"]
            },
            {
                country: "Reino Unido",
                flag: "https://flagcdn.com/w320/gb.png",
                options: ["Reino Unido", "Australia", "Nueva Zelanda", "Estados Unidos"]
            },
            {
                country: "Estados Unidos",
                flag: "https://flagcdn.com/w320/us.png",
                options: ["Estados Unidos", "Liberia", "Malasia", "Reino Unido"]
            },
            {
                country: "Canadá",
                flag: "https://flagcdn.com/w320/ca.png",
                options: ["Canadá", "Perú", "Austria", "Polonia"]
            },
            {
                country: "México",
                flag: "https://flagcdn.com/w320/mx.png",
                options: ["México", "Italia", "Irán", "Bulgaria"]
            },
            {
                country: "Brasil",
                flag: "https://flagcdn.com/w320/br.png",
                options: ["Brasil", "Argentina", "Uruguay", "Paraguay"]
            },
            {
                country: "Argentina",
                flag: "https://flagcdn.com/w320/ar.png",
                options: ["Argentina", "Uruguay", "Guatemala", "El Salvador"]
            },
            {
                country: "Chile",
                flag: "https://flagcdn.com/w320/cl.png",
                options: ["Chile", "Texas", "Puerto Rico", "Cuba"]
            },
            {
                country: "Colombia",
                flag: "https://flagcdn.com/w320/co.png",
                options: ["Colombia", "Venezuela", "Ecuador", "Rumania"]
            },
            {
                country: "Perú",
                flag: "https://flagcdn.com/w320/pe.png",
                options: ["Perú", "Canadá", "Austria", "Polonia"]
            },
            {
                country: "Venezuela",
                flag: "https://flagcdn.com/w320/ve.png",
                options: ["Venezuela", "Colombia", "Ecuador", "España"]
            },
            {
                country: "Ecuador",
                flag: "https://flagcdn.com/w320/ec.png",
                options: ["Ecuador", "Colombia", "Venezuela", "España"]
            },
            {
                country: "Uruguay",
                flag: "https://flagcdn.com/w320/uy.png",
                options: ["Uruguay", "Argentina", "Grecia", "Malasia"]
            },
            {
                country: "Paraguay",
                flag: "https://flagcdn.com/w320/py.png",
                options: ["Paraguay", "Países Bajos", "Croacia", "Luxemburgo"]
            },
            {
                country: "Bolivia",
                flag: "https://flagcdn.com/w320/bo.png",
                options: ["Bolivia", "Ghana", "Guinea", "Mali"]
            },
            {
                country: "China",
                flag: "https://flagcdn.com/w320/cn.png",
                options: ["China", "Vietnam", "Marruecos", "Turquía"]
            },
            {
                country: "Japón",
                flag: "https://flagcdn.com/w320/jp.png",
                options: ["Japón", "Bangladesh", "Palau", "Corea del Sur"]
            },
            {
                country: "Corea del Sur",
                flag: "https://flagcdn.com/w320/kr.png",
                options: ["Corea del Sur", "Corea del Norte", "Taiwán", "Mongolia"]
            },
            {
                country: "India",
                flag: "https://flagcdn.com/w320/in.png",
                options: ["India", "Níger", "Costa de Marfil", "Irlanda"]
            },
            {
                country: "Rusia",
                flag: "https://flagcdn.com/w320/ru.png",
                options: ["Rusia", "Países Bajos", "Francia", "Eslovaquia"]
            },
            {
                country: "Australia",
                flag: "https://flagcdn.com/w320/au.png",
                options: ["Australia", "Nueva Zelanda", "Reino Unido", "Fiyi"]
            },
            {
                country: "Nueva Zelanda",
                flag: "https://flagcdn.com/w320/nz.png",
                options: ["Nueva Zelanda", "Australia", "Reino Unido", "Fiyi"]
            },
            {
                country: "Sudáfrica",
                flag: "https://flagcdn.com/w320/za.png",
                options: ["Sudáfrica", "Brasil", "India", "Seychelles"]
            },
            {
                country: "Egipto",
                flag: "https://flagcdn.com/w320/eg.png",
                options: ["Egipto", "Siria", "Yemen", "Irak"]
            },
            {
                country: "Marruecos",
                flag: "https://flagcdn.com/w320/ma.png",
                options: ["Marruecos", "Túnez", "Turquía", "China"]
            },
            {
                country: "Nigeria",
                flag: "https://flagcdn.com/w320/ng.png",
                options: ["Nigeria", "Pakistán", "Bangladesh", "Argelia"]
            },
            {
                country: "Kenia",
                flag: "https://flagcdn.com/w320/ke.png",
                options: ["Kenia", "Sudán del Sur", "Malawi", "Zambia"]
            },
            {
                country: "Países Bajos",
                flag: "https://flagcdn.com/w320/nl.png",
                options: ["Países Bajos", "Francia", "Luxemburgo", "Croacia"]
            },
            {
                country: "Bélgica",
                flag: "https://flagcdn.com/w320/be.png",
                options: ["Bélgica", "Alemania", "Chad", "Rumania"]
            },
            {
                country: "Suiza",
                flag: "https://flagcdn.com/w320/ch.png",
                options: ["Suiza", "Dinamarca", "Turquía", "Georgia"]
            },
            {
                country: "Austria",
                flag: "https://flagcdn.com/w320/at.png",
                options: ["Austria", "Letonia", "Líbano", "Polonia"]
            },
            {
                country: "Suecia",
                flag: "https://flagcdn.com/w320/se.png",
                options: ["Suecia", "Dinamarca", "Noruega", "Finlandia"]
            },
            {
                country: "Noruega",
                flag: "https://flagcdn.com/w320/no.png",
                options: ["Noruega", "Dinamarca", "Suecia", "Islandia"]
            },
            {
                country: "Dinamarca",
                flag: "https://flagcdn.com/w320/dk.png",
                options: ["Dinamarca", "Suiza", "Noruega", "Suecia"]
            },
            {
                country: "Finlandia",
                flag: "https://flagcdn.com/w320/fi.png",
                options: ["Finlandia", "Suecia", "Noruega", "Estonia"]
            },
            {
                country: "Polonia",
                flag: "https://flagcdn.com/w320/pl.png",
                options: ["Polonia", "Indonesia", "Mónaco", "Austria"]
            },
            {
                country: "República Checa",
                flag: "https://flagcdn.com/w320/cz.png",
                options: ["República Checa", "Filipinas", "Puerto Rico", "Chile"]
            },
            {
                country: "Hungría",
                flag: "https://flagcdn.com/w320/hu.png",
                options: ["Hungría", "Italia", "Bulgaria", "Irán"]
            },
            {
                country: "Grecia",
                flag: "https://flagcdn.com/w320/gr.png",
                options: ["Grecia", "Uruguay", "Argentina", "Israel"]
            },
            {
                country: "Portugal",
                flag: "https://flagcdn.com/w320/pt.png",
                options: ["Portugal", "España", "Brasil", "Marruecos"]
            },
            {
                country: "Irlanda",
                flag: "https://flagcdn.com/w320/ie.png",
                options: ["Irlanda", "Italia", "India", "Costa de Marfil"]
            },
            {
                country: "Turquía",
                flag: "https://flagcdn.com/w320/tr.png",
                options: ["Turquía", "Túnez", "Singapur", "China"]
            },
            {
                country: "Israel",
                flag: "https://flagcdn.com/w320/il.png",
                options: ["Israel", "Argentina", "Uruguay", "Grecia"]
            },
            {
                country: "Arabia Saudí",
                flag: "https://flagcdn.com/w320/sa.png",
                options: ["Arabia Saudí", "Pakistán", "Bangladesh", "Argelia"]
            },
            {
                country: "Tailandia",
                flag: "https://flagcdn.com/w320/th.png",
                options: ["Tailandia", "Costa Rica", "Paraguay", "Países Bajos"]
            },
            {
                country: "Vietnam",
                flag: "https://flagcdn.com/w320/vn.png",
                options: ["Vietnam", "China", "Marruecos", "Turquía"]
            },
            {
                country: "Singapur",
                flag: "https://flagcdn.com/w320/sg.png",
                options: ["Singapur", "Indonesia", "Polonia", "Mónaco"]
            }
        ];
    }

    initializeDOM() {
        this.elements = {
            // Mode selection
            modeSelection: document.getElementById('mode-selection'),
            modeCards: document.querySelectorAll('.mode-card'),
            
            // Game section
            gameSection: document.getElementById('flag-game-section'),
            currentQuestion: document.getElementById('current-question'),
            correctAnswers: document.getElementById('correct-answers'),
            incorrectAnswers: document.getElementById('incorrect-answers'),
            score: document.getElementById('score'),
            timerStat: document.getElementById('timer-stat'),
            timerDisplay: document.getElementById('timer-display'),
            progressFill: document.getElementById('progress-fill'),
            progressText: document.getElementById('progress-text'),
            questionNumberDisplay: document.getElementById('question-number-display'),
            flagImage: document.getElementById('flag-image'),
            answersContainer: document.getElementById('answers-container'),
            feedbackContainer: document.getElementById('feedback-container'),
            autoAdvanceContainer: document.getElementById('auto-advance-container'),
            countdown: document.getElementById('countdown'),
            
            // Controls
            restartBtn: document.getElementById('restart-btn'),
            changeModeBtn: document.getElementById('change-mode-btn'),
            
            // Modals
            resultsModal: document.getElementById('results-modal'),
            modalClose: document.getElementById('modal-close'),
            playAgainBtn: document.getElementById('play-again-btn'),
            
            // Final results
            finalScore: document.getElementById('final-score'),
            finalMode: document.getElementById('final-mode'),
            finalCorrect: document.getElementById('final-correct'),
            finalIncorrect: document.getElementById('final-incorrect'),
            finalPercentage: document.getElementById('final-percentage'),
            performanceMessage: document.getElementById('performance-message')
        };
    }

    setupEventListeners() {
        // Mode selection
        console.log('Setting up event listeners');
        console.log('Mode cards found:', this.elements.modeCards.length);
        
        this.elements.modeCards.forEach(card => {
            const button = card.querySelector('.mode-btn');
            if (button) {
                button.addEventListener('click', (e) => {
                    e.preventDefault();
                    const mode = card.dataset.mode;
                    console.log('Mode selected:', mode);
                    this.selectMode(mode);
                });
            }
        });
        
        // Game controls
        this.elements.restartBtn.addEventListener('click', () => this.restartGame());
        this.elements.changeModeBtn.addEventListener('click', () => this.showModeSelection());
        
        // Answer options
        this.elements.answersContainer.addEventListener('click', (e) => {
            const option = e.target.closest('.answer-option');
            if (option && !this.gameState.answered) {
                this.selectAnswer(option);
            }
        });
        
        // Modals
        this.elements.modalClose.addEventListener('click', () => this.hideModal('results-modal'));
        this.elements.playAgainBtn.addEventListener('click', () => {
            this.hideModal('results-modal');
            this.showModeSelection();
        });
        
        // Cerrar modales al hacer click fuera
        window.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal')) {
                e.target.style.display = 'none';
            }
        });
    }

    showModeSelection() {
        console.log('Showing mode selection');
        if (this.elements.modeSelection) {
            this.elements.modeSelection.style.display = 'block';
        }
        if (this.elements.gameSection) {
            this.elements.gameSection.style.display = 'none';
        }
        
        // Limpiar timer si existe
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
            this.timerInterval = null;
        }
    }

    selectMode(mode) {
        console.log('Selecting mode:', mode);
        this.gameState.mode = mode;
        
        // Configurar tiempo según el modo
        switch(mode) {
            case 'unlimited':
                this.gameState.timeLimit = null;
                if (this.elements.timerStat) {
                    this.elements.timerStat.style.display = 'none';
                }
                break;
            case '10min':
                this.gameState.timeLimit = 10 * 60; // 10 minutos en segundos
                this.gameState.timeRemaining = this.gameState.timeLimit;
                if (this.elements.timerStat) {
                    this.elements.timerStat.style.display = 'block';
                }
                break;
            case '5min':
                this.gameState.timeLimit = 5 * 60; // 5 minutos en segundos
                this.gameState.timeRemaining = this.gameState.timeLimit;
                if (this.elements.timerStat) {
                    this.elements.timerStat.style.display = 'block';
                }
                break;
        }
        
        console.log('Starting game with mode:', mode);
        this.startGame();
    }

    startGame() {
        console.log('Starting game');
        // Ocultar selección de modo y mostrar juego
        if (this.elements.modeSelection) {
            this.elements.modeSelection.style.display = 'none';
        }
        if (this.elements.gameSection) {
            this.elements.gameSection.style.display = 'block';
        }
        
        // Mezclar banderas aleatoriamente
        this.shuffledFlags = [...this.flags].sort(() => Math.random() - 0.5).slice(0, 50);
        this.currentQuestionIndex = 0;
        this.gameState = {
            ...this.gameState,
            correct: 0,
            incorrect: 0,
            score: 0,
            answered: false,
            startTime: new Date()
        };
        
        // Iniciar timer si es necesario
        if (this.gameState.timeLimit) {
            this.startTimer();
        }
        
        this.showCurrentFlag();
        this.updateStats();
        this.updateProgress();
    }

    startTimer() {
        this.timerInterval = setInterval(() => {
            this.gameState.timeRemaining--;
            
            const minutes = Math.floor(this.gameState.timeRemaining / 60);
            const seconds = this.gameState.timeRemaining % 60;
            this.elements.timerDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
            
            // Cambiar color cuando queda poco tiempo
            if (this.gameState.timeRemaining <= 60) {
                this.elements.timerDisplay.style.color = '#f44336';
            } else if (this.gameState.timeRemaining <= 120) {
                this.elements.timerDisplay.style.color = '#ff9800';
            }
            
            // Terminar juego cuando se acaba el tiempo
            if (this.gameState.timeRemaining <= 0) {
                clearInterval(this.timerInterval);
                this.endGame();
            }
        }, 1000);
    }

    showCurrentFlag() {
        if (this.currentQuestionIndex >= this.shuffledFlags.length) {
            this.endGame();
            return;
        }

        const flagData = this.shuffledFlags[this.currentQuestionIndex];
        this.gameState.answered = false;
        
        // Actualizar número de pregunta
        this.elements.currentQuestion.textContent = this.currentQuestionIndex + 1;
        this.elements.questionNumberDisplay.textContent = `Bandera ${this.currentQuestionIndex + 1}`;
        
        // Mostrar bandera
        this.elements.flagImage.src = flagData.flag;
        this.elements.flagImage.alt = `Bandera de ${flagData.country}`;
        
        // Mezclar opciones aleatoriamente
        const shuffledOptions = this.shuffleOptions(flagData.options, flagData.country);
        
        // Mostrar opciones
        const answerButtons = this.elements.answersContainer.querySelectorAll('.answer-option');
        answerButtons.forEach((button, index) => {
            const optionText = button.querySelector('.option-text');
            optionText.textContent = shuffledOptions.options[index];
            
            // Resetear clases
            button.className = 'answer-option';
            button.dataset.option = ['A', 'B', 'C', 'D'][index];
            button.dataset.isCorrect = shuffledOptions.correctIndex === index ? 'true' : 'false';
        });
        
        // Ocultar feedback y contador automático
        this.hideFeedback();
        this.hideAutoAdvance();
        
        // Animar entrada de bandera
        this.elements.flagImage.style.opacity = '0';
        setTimeout(() => {
            this.elements.flagImage.style.opacity = '1';
        }, 100);
    }

    shuffleOptions(options, correctAnswer) {
        const allOptions = [...options];
        
        // Mezclar opciones
        for (let i = allOptions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [allOptions[i], allOptions[j]] = [allOptions[j], allOptions[i]];
        }
        
        // Encontrar nueva posición de la respuesta correcta
        const newCorrectIndex = allOptions.indexOf(correctAnswer);
        
        return {
            options: allOptions,
            correctIndex: newCorrectIndex
        };
    }

    selectAnswer(selectedOption) {
        if (this.gameState.answered) return;
        
        this.gameState.answered = true;
        const isCorrect = selectedOption.dataset.isCorrect === 'true';
        const flagData = this.shuffledFlags[this.currentQuestionIndex];
        
        // Marcar todas las opciones como deshabilitadas
        const allOptions = this.elements.answersContainer.querySelectorAll('.answer-option');
        allOptions.forEach(option => {
            option.classList.add('disabled');
            
            if (option.dataset.isCorrect === 'true') {
                option.classList.add('correct');
            } else if (option === selectedOption && !isCorrect) {
                option.classList.add('incorrect');
            }
        });
        
        // Actualizar estadísticas
        if (isCorrect) {
            this.gameState.correct++;
            this.gameState.score += 10;
            this.showFeedback(true, `¡Correcto! Esta es la bandera de ${flagData.country}.`);
        } else {
            this.gameState.incorrect++;
            this.showFeedback(false, `Incorrecto. Esta es la bandera de ${flagData.country}.`);
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
                this.nextFlag();
            }
        }, 1000);
    }

    hideAutoAdvance() {
        this.elements.autoAdvanceContainer.style.display = 'none';
    }

    nextFlag() {
        this.currentQuestionIndex++;
        this.updateProgress();
        
        if (this.currentQuestionIndex >= this.shuffledFlags.length) {
            this.endGame();
        } else {
            this.showCurrentFlag();
        }
    }

    updateStats() {
        this.elements.correctAnswers.textContent = this.gameState.correct;
        this.elements.incorrectAnswers.textContent = this.gameState.incorrect;
        this.elements.score.textContent = this.gameState.score;
    }

    updateProgress() {
        const progress = (this.currentQuestionIndex / this.shuffledFlags.length) * 100;
        this.elements.progressFill.style.width = `${progress}%`;
        this.elements.progressText.textContent = `${Math.round(progress)}%`;
    }

    endGame() {
        // Limpiar timer
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
            this.timerInterval = null;
        }
        
        // Guardar puntuación
        this.saveScore();
        
        // Mostrar resultados
        this.showResults();
    }

    saveScore() {
        const userData = JSON.parse(localStorage.getItem('culturaGeneral')) || {};
        if (!userData.puntuaciones) userData.puntuaciones = {};
        
        if (!userData.puntuaciones.adivinaBandera || this.gameState.score > userData.puntuaciones.adivinaBandera) {
            userData.puntuaciones.adivinaBandera = this.gameState.score;
            localStorage.setItem('culturaGeneral', JSON.stringify(userData));
        }
    }

    showResults() {
        const percentage = Math.round((this.gameState.correct / this.shuffledFlags.length) * 100);
        
        this.elements.finalScore.textContent = this.gameState.score;
        this.elements.finalCorrect.textContent = this.gameState.correct;
        this.elements.finalIncorrect.textContent = this.gameState.incorrect;
        this.elements.finalPercentage.textContent = `${percentage}%`;
        
        // Mostrar modo de juego
        const modeNames = {
            'unlimited': 'Sin tiempo',
            '10min': '10 minutos',
            '5min': '5 minutos'
        };
        this.elements.finalMode.textContent = modeNames[this.gameState.mode];
        
        // Mensaje de rendimiento
        let message = '';
        if (percentage >= 90) {
            message = '¡Excelente! Eres un verdadero experto en banderas del mundo. ¡Felicitaciones!';
        } else if (percentage >= 80) {
            message = '¡Muy bien! Tienes un gran conocimiento de las banderas mundiales.';
        } else if (percentage >= 70) {
            message = '¡Buen trabajo! Conoces bien las banderas, pero puedes mejorar aún más.';
        } else if (percentage >= 60) {
            message = 'Bien hecho. Tienes una base decente, sigue practicando para mejorar.';
        } else if (percentage >= 50) {
            message = 'No está mal. Con más práctica puedes conseguir mejores resultados.';
        } else {
            message = 'No te desanimes. Las banderas pueden ser complicadas. ¡Sigue practicando!';
        }
        
        this.elements.performanceMessage.textContent = message;
        
        this.showModal('results-modal');
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
    new AdivinaBanderaGame();
});
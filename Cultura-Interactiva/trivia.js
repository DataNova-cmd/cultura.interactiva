// Juego Trivia - Cultura General
class TriviaGame {
    constructor() {
        this.questions = this.initializeQuestions();
        this.currentQuestionIndex = 0;
        this.gameState = {
            correct: 0,
            incorrect: 0,
            score: 0,
            answered: false
        };
        this.shuffledQuestions = [];
        
        this.initializeDOM();
        this.setupEventListeners();
        this.startGame();
    }

    initializeQuestions() {
        return [
            {
                question: "¿Cuál es el planeta más grande del sistema solar?",
                options: ["Marte", "Júpiter", "Saturno", "Neptuno"],
                correct: "B"
            },
            {
                question: "¿En qué continente se encuentra Egipto?",
                options: ["Europa", "Asia", "África", "América"],
                correct: "C"
            },
            {
                question: "¿Quién pintó la Mona Lisa?",
                options: ["Miguel Ángel", "Leonardo da Vinci", "Rafael", "Donatello"],
                correct: "B"
            },
            {
                question: "¿Cuál es el océano más grande del mundo?",
                options: ["Atlántico", "Índico", "Ártico", "Pacífico"],
                correct: "D"
            },
            {
                question: "¿Cuántos lados tiene un hexágono?",
                options: ["Cinco", "Seis", "Siete", "Ocho"],
                correct: "B"
            },
            {
                question: "¿Cuál es la capital de Francia?",
                options: ["Marsella", "Lyon", "París", "Toulouse"],
                correct: "C"
            },
            {
                question: "¿Qué gas necesitamos para respirar?",
                options: ["Hidrógeno", "Oxígeno", "Nitrógeno", "Dióxido de carbono"],
                correct: "B"
            },
            {
                question: "¿En qué año llegó el hombre a la Luna?",
                options: ["1965", "1967", "1969", "1971"],
                correct: "C"
            },
            {
                question: "¿Cuál es el idioma más hablado del mundo por número de hablantes nativos?",
                options: ["Inglés", "Español", "Chino mandarín", "Hindi"],
                correct: "C"
            },
            {
                question: "¿Qué instrumento tiene teclas, cuerdas y martillos?",
                options: ["Guitarra", "Violín", "Piano", "Arpa"],
                correct: "C"
            },
            {
                question: "¿Cuál es el río más largo del mundo?",
                options: ["Amazonas", "Nilo", "Yangtsé", "Misisipi"],
                correct: "A"
            },
            {
                question: "¿Quién escribió \"Don Quijote de la Mancha\"?",
                options: ["Federico García Lorca", "Miguel de Cervantes", "Lope de Vega", "Calderón de la Barca"],
                correct: "B"
            },
            {
                question: "¿Cuál es el metal más ligero?",
                options: ["Hierro", "Aluminio", "Litio", "Cobre"],
                correct: "C"
            },
            {
                question: "¿Cuántos colores tiene el arcoíris?",
                options: ["Cinco", "Seis", "Siete", "Ocho"],
                correct: "C"
            },
            {
                question: "¿En qué país se originaron los Juegos Olímpicos?",
                options: ["Italia", "Grecia", "Francia", "Egipto"],
                correct: "B"
            },
            {
                question: "¿Cuál es el órgano más grande del cuerpo humano?",
                options: ["El hígado", "El corazón", "El cerebro", "La piel"],
                correct: "D"
            },
            {
                question: "¿Qué país tiene forma de bota?",
                options: ["España", "Portugal", "Italia", "Grecia"],
                correct: "C"
            },
            {
                question: "¿Cuál es la moneda oficial del Reino Unido?",
                options: ["Euro", "Libra esterlina", "Dólar", "Franco"],
                correct: "B"
            },
            {
                question: "¿Qué ciencia estudia los seres vivos?",
                options: ["Zoología", "Botánica", "Biología", "Ecología"],
                correct: "C"
            },
            {
                question: "¿Quién fue el primer presidente de Estados Unidos?",
                options: ["Abraham Lincoln", "Thomas Jefferson", "George Washington", "John Adams"],
                correct: "C"
            },
            {
                question: "¿Cuál es el país más poblado del mundo?",
                options: ["India", "Estados Unidos", "China", "Rusia"],
                correct: "C"
            },
            {
                question: "¿Qué instrumento se usa para medir la temperatura?",
                options: ["Barómetro", "Termómetro", "Cronómetro", "Higrómetro"],
                correct: "B"
            },
            {
                question: "¿En qué deporte se utiliza una raqueta y una pelota amarilla?",
                options: ["Pádel", "Squash", "Tenis", "Bádminton"],
                correct: "C"
            },
            {
                question: "¿Cuál es la capital de Japón?",
                options: ["Kioto", "Osaka", "Tokio", "Hiroshima"],
                correct: "C"
            },
            {
                question: "¿Qué planeta es conocido como el planeta rojo?",
                options: ["Venus", "Marte", "Júpiter", "Mercurio"],
                correct: "B"
            },
            {
                question: "¿Cuál es el resultado de 7 x 8?",
                options: ["54", "56", "58", "64"],
                correct: "B"
            },
            {
                question: "¿Qué animal es conocido como el rey de la selva?",
                options: ["Tigre", "Elefante", "León", "Jaguar"],
                correct: "C"
            },
            {
                question: "¿Qué continente es el más grande del mundo?",
                options: ["África", "Europa", "América", "Asia"],
                correct: "D"
            },
            {
                question: "¿Qué aparato se utiliza para ver objetos lejanos en el espacio?",
                options: ["Microscopio", "Telescopio", "Binoculares", "Radar"],
                correct: "B"
            },
            {
                question: "¿Cuál es la lengua oficial de Brasil?",
                options: ["Español", "Inglés", "Portugués", "Francés"],
                correct: "C"
            },
            {
                question: "¿Qué invento permitió la difusión masiva de libros?",
                options: ["La brújula", "La imprenta", "El telescopio", "El motor"],
                correct: "B"
            },
            {
                question: "¿Cuál es la capital de Italia?",
                options: ["Milán", "Venecia", "Roma", "Nápoles"],
                correct: "C"
            },
            {
                question: "¿Qué tipo de animal es una ballena?",
                options: ["Pez", "Reptil", "Mamífero", "Anfibio"],
                correct: "C"
            },
            {
                question: "¿Cuál es el hueso más largo del cuerpo humano?",
                options: ["Húmero", "Tibia", "Fémur", "Peroné"],
                correct: "C"
            },
            {
                question: "¿En qué continente se encuentra Australia?",
                options: ["Asia", "Europa", "Oceanía", "América"],
                correct: "C"
            },
            {
                question: "¿Quién escribió \"La Odisea\"?",
                options: ["Sófocles", "Homero", "Virgilio", "Platón"],
                correct: "B"
            },
            {
                question: "¿Cuál es el símbolo químico del oro?",
                options: ["Ag", "Au", "O", "Fe"],
                correct: "B"
            },
            {
                question: "¿Qué país ganó el Mundial de fútbol en 2010?",
                options: ["Brasil", "Alemania", "Argentina", "España"],
                correct: "D"
            },
            {
                question: "¿Cuántos planetas tiene el sistema solar?",
                options: ["Siete", "Ocho", "Nueve", "Diez"],
                correct: "B"
            },
            {
                question: "¿Cuál es la capital de Canadá?",
                options: ["Toronto", "Vancouver", "Montreal", "Ottawa"],
                correct: "D"
            },
            {
                question: "¿Qué órgano del cuerpo humano filtra la sangre?",
                options: ["Pulmón", "Hígado", "Riñón", "Corazón"],
                correct: "C"
            },
            {
                question: "¿En qué país se encuentra la Torre Eiffel?",
                options: ["Italia", "Francia", "Bélgica", "Suiza"],
                correct: "B"
            },
            {
                question: "¿Qué instrumento mide los terremotos?",
                options: ["Barómetro", "Termómetro", "Sismógrafo", "Anemómetro"],
                correct: "C"
            },
            {
                question: "¿Cuál es el país más grande del mundo por superficie?",
                options: ["Canadá", "China", "Estados Unidos", "Rusia"],
                correct: "D"
            },
            {
                question: "¿Qué ciencia estudia los astros?",
                options: ["Astrología", "Astronomía", "Cosmología", "Geología"],
                correct: "B"
            },
            {
                question: "¿Cuál es la capital de Argentina?",
                options: ["Córdoba", "Rosario", "Mendoza", "Buenos Aires"],
                correct: "D"
            },
            {
                question: "¿Qué vitamina produce el cuerpo al exponerse al sol?",
                options: ["Vitamina A", "Vitamina B", "Vitamina C", "Vitamina D"],
                correct: "D"
            },
            {
                question: "¿Quién fue el autor de \"Romeo y Julieta\"?",
                options: ["Charles Dickens", "William Shakespeare", "Oscar Wilde", "Jane Austen"],
                correct: "B"
            },
            {
                question: "¿Cuál es el océano más pequeño del mundo?",
                options: ["Atlántico", "Índico", "Ártico", "Pacífico"],
                correct: "C"
            },
            {
                question: "¿Qué animal es el más rápido en tierra?",
                options: ["León", "Tigre", "Guepardo", "Caballo"],
                correct: "C"
            },
            {
                question: "¿Cuál es la capital de Alemania?",
                options: ["Múnich", "Hamburgo", "Frankfurt", "Berlín"],
                correct: "D"
            },
            {
                question: "¿Qué instrumento se utiliza para medir la presión atmosférica?",
                options: ["Termómetro", "Barómetro", "Higrómetro", "Anemómetro"],
                correct: "B"
            },
            {
                question: "¿Qué continente tiene más países?",
                options: ["Europa", "América", "Asia", "África"],
                correct: "D"
            },
            {
                question: "¿Cuál es el idioma oficial de China?",
                options: ["Cantonés", "Mandarín", "Coreano", "Japonés"],
                correct: "B"
            },
            {
                question: "¿Quién pintó \"La última cena\"?",
                options: ["Miguel Ángel", "Rafael", "Leonardo da Vinci", "Van Gogh"],
                correct: "C"
            },
            {
                question: "¿Cuál es la capital de Portugal?",
                options: ["Oporto", "Braga", "Lisboa", "Faro"],
                correct: "C"
            },
            {
                question: "¿Qué planeta está más cerca del Sol?",
                options: ["Venus", "Marte", "Mercurio", "Júpiter"],
                correct: "C"
            },
            {
                question: "¿Qué deporte se practica en Wimbledon?",
                options: ["Fútbol", "Tenis", "Golf", "Cricket"],
                correct: "B"
            },
            {
                question: "¿Qué gas protege a la Tierra de los rayos ultravioleta?",
                options: ["Oxígeno", "Nitrógeno", "Ozono", "Hidrógeno"],
                correct: "C"
            },
            {
                question: "¿Cuál es el autor de \"Cien años de soledad\"?",
                options: ["Mario Vargas Llosa", "Pablo Neruda", "Julio Cortázar", "Gabriel García Márquez"],
                correct: "D"
            },
            {
                question: "¿Cuál es el desierto más grande del mundo?",
                options: ["Sahara", "Gobi", "Kalahari", "Atacama"],
                correct: "A"
            },
            {
                question: "¿Qué órgano controla el sistema nervioso?",
                options: ["Corazón", "Cerebro", "Médula ósea", "Pulmón"],
                correct: "B"
            },
            {
                question: "¿Cuál es la capital de Grecia?",
                options: ["Tesalónica", "Esparta", "Atenas", "Corinto"],
                correct: "C"
            },
            {
                question: "¿Qué instrumento se usa para observar células?",
                options: ["Telescopio", "Microscopio", "Periscopio", "Endoscopio"],
                correct: "B"
            },
            {
                question: "¿Cuál es la moneda oficial de Japón?",
                options: ["Yuan", "Won", "Yen", "Dólar"],
                correct: "C"
            },
            {
                question: "¿Qué animal pone los huevos más grandes en relación a su tamaño?",
                options: ["Gallina", "Avestruz", "Pingüino", "Águila"],
                correct: "B"
            },
            {
                question: "¿Cuál es el metal más abundante en la corteza terrestre?",
                options: ["Hierro", "Cobre", "Aluminio", "Oro"],
                correct: "C"
            },
            {
                question: "¿En qué país se encuentra Machu Picchu?",
                options: ["Bolivia", "Colombia", "Perú", "Ecuador"],
                correct: "C"
            },
            {
                question: "¿Qué parte del cuerpo humano contiene más huesos?",
                options: ["Mano", "Pie", "Columna vertebral", "Cráneo"],
                correct: "B"
            },
            {
                question: "¿Quién formuló la teoría de la relatividad?",
                options: ["Isaac Newton", "Galileo Galilei", "Nikola Tesla", "Albert Einstein"],
                correct: "D"
            },
            {
                question: "¿Cuál es el país con más islas del mundo?",
                options: ["Indonesia", "Filipinas", "Suecia", "Japón"],
                correct: "C"
            },
            {
                question: "¿Qué órgano produce la insulina?",
                options: ["Hígado", "Riñón", "Páncreas", "Estómago"],
                correct: "C"
            },
            {
                question: "¿Cuál es el idioma más hablado del mundo contando hablantes nativos y no nativos?",
                options: ["Español", "Inglés", "Chino mandarín", "Hindi"],
                correct: "B"
            },
            {
                question: "¿Qué planeta tiene los anillos más visibles?",
                options: ["Júpiter", "Urano", "Neptuno", "Saturno"],
                correct: "D"
            },
            {
                question: "¿En qué deporte destacó Michael Jordan?",
                options: ["Fútbol", "Tenis", "Baloncesto", "Atletismo"],
                correct: "C"
            },
            {
                question: "¿Qué país tiene la mayor cantidad de población musulmana?",
                options: ["Arabia Saudí", "Pakistán", "Indonesia", "Egipto"],
                correct: "C"
            },
            {
                question: "¿Cuál es la capital de Noruega?",
                options: ["Estocolmo", "Helsinki", "Oslo", "Copenhague"],
                correct: "C"
            },
            {
                question: "¿Qué instrumento musical tiene seis cuerdas normalmente?",
                options: ["Violín", "Arpa", "Guitarra", "Bajo"],
                correct: "C"
            },
            {
                question: "¿Cuál es el elemento químico con símbolo Fe?",
                options: ["Flúor", "Fósforo", "Hierro", "Mercurio"],
                correct: "C"
            },
            {
                question: "¿Qué océano separa América de Europa y África?",
                options: ["Índico", "Pacífico", "Ártico", "Atlántico"],
                correct: "D"
            },
            {
                question: "¿Qué ciencia estudia los volcanes?",
                options: ["Geología", "Vulcanología", "Sismología", "Meteorología"],
                correct: "B"
            },
            {
                question: "¿Cuál es la capital de Corea del Sur?",
                options: ["Busan", "Pyongyang", "Seúl", "Incheon"],
                correct: "C"
            },
            {
                question: "¿Qué animal puede dormir de pie?",
                options: ["Vaca", "Caballo", "Elefante", "Jirafa"],
                correct: "B"
            },
            {
                question: "¿Cuál es la obra más famosa de Miguel Ángel en la Capilla Sixtina?",
                options: ["El Juicio Final", "La Última Cena", "El Grito", "La Gioconda"],
                correct: "A"
            },
            {
                question: "¿Qué país inventó el papel?",
                options: ["Egipto", "Grecia", "China", "India"],
                correct: "C"
            },
            {
                question: "¿Cuál es la capital de Suiza?",
                options: ["Zúrich", "Ginebra", "Basilea", "Berna"],
                correct: "D"
            },
            {
                question: "¿Qué parte de la planta realiza la fotosíntesis?",
                options: ["Raíz", "Tallo", "Flor", "Hoja"],
                correct: "D"
            },
            {
                question: "¿Qué deporte utiliza un bate y una pelota?",
                options: ["Cricket", "Hockey", "Golf", "Rugby"],
                correct: "A"
            },
            {
                question: "¿Cuál es el país más pequeño del mundo?",
                options: ["Mónaco", "Malta", "Vaticano", "San Marino"],
                correct: "C"
            },
            {
                question: "¿Qué gas es el más abundante en la atmósfera terrestre?",
                options: ["Oxígeno", "Hidrógeno", "Dióxido de carbono", "Nitrógeno"],
                correct: "D"
            },
            {
                question: "¿Quién escribió \"La Ilíada\"?",
                options: ["Sófocles", "Homero", "Aristóteles", "Platón"],
                correct: "B"
            },
            {
                question: "¿Cuál es el animal terrestre más grande del mundo?",
                options: ["Rinoceronte", "Hipopótamo", "Elefante africano", "Jirafa"],
                correct: "C"
            },
            {
                question: "¿Qué aparato se usa para medir la velocidad del viento?",
                options: ["Barómetro", "Anemómetro", "Higrómetro", "Termómetro"],
                correct: "B"
            },
            {
                question: "¿Cuál es la capital de Marruecos?",
                options: ["Casablanca", "Marrakech", "Rabat", "Fez"],
                correct: "C"
            },
            {
                question: "¿Qué ciencia estudia el comportamiento humano?",
                options: ["Sociología", "Psicología", "Antropología", "Filosofía"],
                correct: "B"
            },
            {
                question: "¿Qué planeta es el más caliente del sistema solar?",
                options: ["Mercurio", "Marte", "Venus", "Júpiter"],
                correct: "C"
            },
            {
                question: "¿Qué país ganó el Mundial de fútbol en 2014?",
                options: ["Brasil", "Argentina", "Alemania", "Francia"],
                correct: "C"
            },
            {
                question: "¿Cuál es el órgano encargado de la digestión de los alimentos?",
                options: ["Pulmón", "Cerebro", "Estómago", "Corazón"],
                correct: "C"
            },
            {
                question: "¿Qué instrumento mide la humedad del aire?",
                options: ["Barómetro", "Termómetro", "Higrómetro", "Anemómetro"],
                correct: "C"
            },
            {
                question: "¿Cuál es la capital de Irlanda?",
                options: ["Belfast", "Cork", "Galway", "Dublín"],
                correct: "D"
            }
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
            questionText: document.getElementById('question-text'),
            answersContainer: document.getElementById('answers-container'),
            feedbackContainer: document.getElementById('feedback-container'),
            nextQuestionBtn: document.getElementById('next-question-btn'),
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
        this.elements.nextQuestionBtn.addEventListener('click', () => this.nextQuestion());
        
        // Opciones de respuesta
        this.elements.answersContainer.addEventListener('click', (e) => {
            const option = e.target.closest('.answer-option');
            if (option && !this.gameState.answered) {
                this.selectAnswer(option);
            }
        });
        
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
        this.shuffledQuestions = [...this.questions];
        this.currentQuestionIndex = 0;
        this.gameState = {
            correct: 0,
            incorrect: 0,
            score: 0,
            answered: false
        };
        
        this.showCurrentQuestion();
        this.updateStats();
        this.updateProgress();
    }

    showCurrentQuestion() {
        if (this.currentQuestionIndex >= this.shuffledQuestions.length) {
            this.endGame();
            return;
        }

        const question = this.shuffledQuestions[this.currentQuestionIndex];
        this.gameState.answered = false;
        
        // Actualizar número de pregunta
        this.elements.currentQuestion.textContent = this.currentQuestionIndex + 1;
        this.elements.questionNumberDisplay.textContent = `Pregunta ${this.currentQuestionIndex + 1}`;
        
        // Mostrar pregunta
        this.elements.questionText.textContent = question.question;
        
        // Mezclar opciones aleatoriamente
        const shuffledOptions = this.shuffleOptions(question.options, question.correct);
        
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
        
        // Animar entrada de pregunta
        this.elements.answersContainer.style.opacity = '0';
        setTimeout(() => {
            this.elements.answersContainer.style.opacity = '1';
        }, 100);
    }

    shuffleOptions(options, correctLetter) {
        const correctIndex = ['A', 'B', 'C', 'D'].indexOf(correctLetter);
        const correctAnswer = options[correctIndex];
        
        // Crear array con todas las opciones
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
            this.showFeedback(true, "¡Correcto! Has seleccionado la respuesta correcta.");
        } else {
            this.gameState.incorrect++;
            this.showFeedback(false, "Incorrecto. La respuesta correcta está marcada en verde.");
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
        const container = document.getElementById('auto-advance-container');
        const countdown = document.getElementById('countdown');
        container.style.display = 'block';
        
        let seconds = 2;
        countdown.textContent = seconds;
        
        const interval = setInterval(() => {
            seconds--;
            countdown.textContent = seconds;
            
            if (seconds <= 0) {
                clearInterval(interval);
                container.style.display = 'none';
                this.nextQuestion();
            }
        }, 1000);
    }

    hideAutoAdvance() {
        document.getElementById('auto-advance-container').style.display = 'none';
    }

    nextQuestion() {
        this.currentQuestionIndex++;
        this.updateProgress();
        
        if (this.currentQuestionIndex >= this.shuffledQuestions.length) {
            this.endGame();
        } else {
            this.showCurrentQuestion();
        }
    }

    updateStats() {
        this.elements.correctAnswers.textContent = this.gameState.correct;
        this.elements.incorrectAnswers.textContent = this.gameState.incorrect;
        this.elements.score.textContent = this.gameState.score;
    }

    updateProgress() {
        const progress = (this.currentQuestionIndex / this.shuffledQuestions.length) * 100;
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
        
        if (!userData.puntuaciones.trivia || this.gameState.score > userData.puntuaciones.trivia) {
            userData.puntuaciones.trivia = this.gameState.score;
            localStorage.setItem('culturaGeneral', JSON.stringify(userData));
        }
    }

    showResults() {
        const percentage = Math.round((this.gameState.correct / this.shuffledQuestions.length) * 100);
        
        this.elements.finalScore.textContent = this.gameState.score;
        this.elements.finalCorrect.textContent = this.gameState.correct;
        this.elements.finalIncorrect.textContent = this.gameState.incorrect;
        this.elements.finalPercentage.textContent = `${percentage}%`;
        
        // Mensaje de rendimiento
        let message = '';
        if (percentage >= 90) {
            message = '¡Excelente! Eres un verdadero experto en cultura general. ¡Felicitaciones!';
        } else if (percentage >= 80) {
            message = '¡Muy bien! Tienes un gran conocimiento de cultura general. ¡Sigue así!';
        } else if (percentage >= 70) {
            message = '¡Buen trabajo! Tienes una base sólida de conocimientos. Puedes mejorar aún más.';
        } else if (percentage >= 60) {
            message = 'Bien hecho. Tienes conocimientos básicos, pero hay espacio para mejorar.';
        } else if (percentage >= 50) {
            message = 'No está mal para empezar. Con más práctica puedes mejorar mucho.';
        } else {
            message = 'No te desanimes. La cultura general se construye con tiempo y práctica. ¡Sigue aprendiendo!';
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
    new TriviaGame();
});
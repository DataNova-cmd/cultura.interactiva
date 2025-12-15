// Funciones principales de navegación y interacción

// Función para ir a un juego específico
function goToGame(tema) {
    // Si es pasapalabra, redirigir directamente
    if (tema === 'pasapalabra' || tema === 'general') {
        window.location.href = 'pasapalabra.html';
        return;
    }
    
    // Si es trivia, redirigir directamente
    if (tema === 'trivia' || tema === 'cultura') {
        window.location.href = 'trivia.html';
        return;
    }
    
    // Si es verdadero o falso, redirigir directamente
    if (tema === 'verdadero-falso' || tema === 'vf') {
        window.location.href = 'verdadero-falso.html';
        return;
    }
    
    // Si es adivina bandera, redirigir directamente
    if (tema === 'adivina-bandera' || tema === 'bandera') {
        window.location.href = 'adivina-bandera.html';
        return;
    }
    
    // Para otros temas, scroll suave a la sección de juegos
    document.getElementById('practicar').scrollIntoView({ 
        behavior: 'smooth' 
    });
    
    // Mostrar mensaje temporal indicando que los juegos están en desarrollo
    setTimeout(() => {
        showNotification(`Los juegos de ${tema} estarán disponibles próximamente. ¡Gracias por tu paciencia!`);
    }, 800);
}

// Sistema de notificaciones
function showNotification(message, type = 'info') {
    // Crear elemento de notificación
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-info-circle"></i>
            <span>${message}</span>
            <button class="notification-close" onclick="closeNotification(this)">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    // Agregar estilos si no existen
    if (!document.getElementById('notification-styles')) {
        const styles = document.createElement('style');
        styles.id = 'notification-styles';
        styles.textContent = `
            .notification {
                position: fixed;
                top: 20px;
                right: 20px;
                background: white;
                border-radius: 8px;
                box-shadow: 0 4px 20px rgba(0,0,0,0.15);
                z-index: 1000;
                max-width: 400px;
                animation: slideInRight 0.3s ease-out;
            }
            
            .notification-info {
                border-left: 4px solid #667eea;
            }
            
            .notification-success {
                border-left: 4px solid #4CAF50;
            }
            
            .notification-warning {
                border-left: 4px solid #ffc107;
            }
            
            .notification-content {
                display: flex;
                align-items: center;
                gap: 0.75rem;
                padding: 1rem;
            }
            
            .notification-content i:first-child {
                color: #667eea;
                font-size: 1.2rem;
            }
            
            .notification-content span {
                flex: 1;
                color: #333;
                font-weight: 500;
            }
            
            .notification-close {
                background: none;
                border: none;
                color: #999;
                cursor: pointer;
                padding: 0.25rem;
                border-radius: 4px;
                transition: background-color 0.2s ease;
            }
            
            .notification-close:hover {
                background-color: #f0f0f0;
            }
            
            @keyframes slideInRight {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            
            @keyframes slideOutRight {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(100%);
                    opacity: 0;
                }
            }
            
            .notification.closing {
                animation: slideOutRight 0.3s ease-out forwards;
            }
            
            @media (max-width: 480px) {
                .notification {
                    right: 10px;
                    left: 10px;
                    max-width: none;
                }
            }
        `;
        document.head.appendChild(styles);
    }
    
    // Agregar al DOM
    document.body.appendChild(notification);
    
    // Auto-cerrar después de 5 segundos
    setTimeout(() => {
        if (notification.parentNode) {
            closeNotification(notification.querySelector('.notification-close'));
        }
    }, 5000);
}

// Función para cerrar notificación
function closeNotification(button) {
    const notification = button.closest('.notification');
    notification.classList.add('closing');
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 300);
}

// Navegación suave mejorada
document.addEventListener('DOMContentLoaded', function() {
    // Mejorar navegación de enlaces
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                // Calcular offset para el header fijo
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Efecto de aparición progresiva para elementos
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observar elementos que deben aparecer con animación
    const animatedElements = document.querySelectorAll('.learn-block, .game-card, .contact-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
    
    // Destacar sección activa en navegación
    const sections = document.querySelectorAll('section[id]');
    const navLinksArray = Array.from(document.querySelectorAll('.nav-link'));
    
    const highlightNavigation = () => {
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinksArray.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    };
    
    // Agregar estilos para navegación activa
    const navStyles = document.createElement('style');
    navStyles.textContent = `
        .nav-link.active {
            opacity: 1;
            border-bottom: 2px solid rgba(255,255,255,0.8);
            padding-bottom: 2px;
        }
    `;
    document.head.appendChild(navStyles);
    
    window.addEventListener('scroll', highlightNavigation);
    highlightNavigation(); // Ejecutar al cargar
    
    // Mejorar experiencia en móviles
    if (window.innerWidth <= 768) {
        // Hacer que los botones sean más grandes en móvil
        const buttons = document.querySelectorAll('.btn');
        buttons.forEach(btn => {
            btn.style.padding = '1rem 1.5rem';
            btn.style.fontSize = '1rem';
        });
    }
    
    // Preparar localStorage para futuras funcionalidades
    initializeLocalStorage();
});

// Inicializar localStorage para puntuaciones y progreso
function initializeLocalStorage() {
    if (!localStorage.getItem('culturaGeneral')) {
        const initialData = {
            puntuaciones: {
                historia: 0,
                ciencia: 0,
                geografia: 0,
                cultura: 0,
                general: 0
            },
            progreso: {
                temasCompletados: [],
                juegosJugados: 0,
                fechaUltimoJuego: null
            },
            configuracion: {
                sonido: true,
                dificultad: 'medio',
                tema: 'claro'
            }
        };
        
        localStorage.setItem('culturaGeneral', JSON.stringify(initialData));
    }
}

// Funciones para manejo de datos del usuario
function getUserData() {
    return JSON.parse(localStorage.getItem('culturaGeneral'));
}

function saveUserData(data) {
    localStorage.setItem('culturaGeneral', JSON.stringify(data));
}

function updateScore(tema, puntuacion) {
    const userData = getUserData();
    if (puntuacion > userData.puntuaciones[tema]) {
        userData.puntuaciones[tema] = puntuacion;
        saveUserData(userData);
        return true; // Nuevo récord
    }
    return false;
}

// Función para mostrar estadísticas (para futuro uso)
function showStats() {
    const userData = getUserData();
    const totalPuntos = Object.values(userData.puntuaciones).reduce((a, b) => a + b, 0);
    
    showNotification(`Puntuación total: ${totalPuntos} puntos`, 'success');
}

// Manejo de errores global
window.addEventListener('error', function(e) {
    console.error('Error en la aplicación:', e.error);
    // En producción, aquí se podría enviar el error a un servicio de monitoreo
});

// Función para feedback de botones
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('btn') || e.target.closest('.btn')) {
        const button = e.target.classList.contains('btn') ? e.target : e.target.closest('.btn');
        
        // Efecto visual de click
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = '';
        }, 150);
    }
});

// Preparar para futuras funcionalidades de juegos
const gameManager = {
    currentGame: null,
    currentScore: 0,
    currentQuestion: 0,
    
    // Placeholder para inicializar juegos
    initGame: function(gameType) {
        this.currentGame = gameType;
        this.currentScore = 0;
        this.currentQuestion = 0;
        console.log(`Inicializando juego: ${gameType}`);
    },
    
    // Placeholder para finalizar juegos
    endGame: function() {
        if (this.currentGame) {
            const userData = getUserData();
            userData.progreso.juegosJugados++;
            userData.progreso.fechaUltimoJuego = new Date().toISOString();
            saveUserData(userData);
            
            showNotification(`¡Juego completado! Puntuación: ${this.currentScore}`, 'success');
        }
        
        this.currentGame = null;
        this.currentScore = 0;
        this.currentQuestion = 0;
    }
};

// Exportar funciones para uso global
window.goToGame = goToGame;
window.showNotification = showNotification;
window.gameManager = gameManager;
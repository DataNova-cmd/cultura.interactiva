// Juego Pasapalabra - Cultura General
class PasapalabraGame {
    constructor() {
        this.questions = this.initializeQuestions();
        this.currentLetterIndex = 0;
        this.gameState = {
            correct: 0,
            incorrect: 0,
            pending: 26,
            startTime: null,
            endTime: null,
            answers: new Array(26).fill(null),
            letterStates: new Array(26).fill('pending') // 'pending', 'correct', 'incorrect', 'current'
        };
        this.timerInterval = null;
        this.isGameActive = false;
        
        this.initializeDOM();
        this.setupEventListeners();
        this.createRosco();
        this.startGame();
    }

    initializeQuestions() {
        return {
            // Letra A
            A: [
                { question: "Empieza por A: Continente donde está Egipto.", answer: "áfrica", explanation: "África es el continente donde se encuentra Egipto." },
                { question: "Empieza por A: Gas que respiramos del aire.", answer: "oxígeno", explanation: "El oxígeno es el gas que necesitamos para respirar." },
                { question: "Empieza por A: Animal que vive en el agua y tiene aletas.", answer: "atún", explanation: "El atún es un pez que vive en el océano." },
                { question: "Contiene la A: Capital de España.", answer: "madrid", explanation: "Madrid es la capital y ciudad más grande de España." },
                { question: "Empieza por A: Instrumento musical de cuerda.", answer: "arpa", explanation: "El arpa es un instrumento musical de cuerdas pulsadas." },
                { question: "Empieza por A: Ciencia que estudia los astros.", answer: "astronomía", explanation: "La astronomía estudia los cuerpos celestes y el universo." },
                { question: "Contiene la A: Metal precioso de color amarillo.", answer: "oro", explanation: "El oro es un metal precioso muy valorado." },
                { question: "Empieza por A: Vehículo que vuela.", answer: "avión", explanation: "El avión es un medio de transporte aéreo." },
                { question: "Empieza por A: Líquido vital para la vida.", answer: "agua", explanation: "El agua es esencial para todos los seres vivos." },
                { question: "Contiene la A: País cuya capital es Buenos Aires.", answer: "argentina", explanation: "Argentina es un país sudamericano." }
            ],
            
            // Letra B
            B: [
                { question: "Empieza por B: Deporte que se juega con canasta.", answer: "baloncesto", explanation: "El baloncesto se juega introduciendo el balón en una canasta." },
                { question: "Empieza por B: Animal marino muy grande.", answer: "ballena", explanation: "La ballena es el mamífero marino más grande del mundo." },
                { question: "Empieza por B: Capital de Alemania.", answer: "berlín", explanation: "Berlín es la capital de Alemania." },
                { question: "Empieza por B: Ciencia que estudia los seres vivos.", answer: "biología", explanation: "La biología es la ciencia que estudia la vida." },
                { question: "Empieza por B: Instrumento para escribir.", answer: "bolígrafo", explanation: "El bolígrafo es un instrumento de escritura muy común." },
                { question: "Empieza por B: País sudamericano muy grande.", answer: "brasil", explanation: "Brasil es el país más grande de Sudamérica." },
                { question: "Contiene la B: Parte del cuerpo que usamos para pensar.", answer: "cerebro", explanation: "El cerebro es el órgano que controla nuestros pensamientos." },
                { question: "Contiene la B: Color del cielo despejado.", answer: "azul", explanation: "El cielo despejado se ve de color azul." },
                { question: "Empieza por B: Instrumento para medir la presión.", answer: "barómetro", explanation: "El barómetro mide la presión atmosférica." },
                { question: "Contiene la B: Instrumento musical de viento.", answer: "oboe", explanation: "El oboe es un instrumento de viento madera." }
            ],
            
            // Letra C
            C: [
                { question: "Contiene la C: Animal doméstico que maúlla.", answer: "gato", explanation: "Los gatos son animales domésticos que maúllan." },
                { question: "Empieza por C: País cuya capital es Ottawa.", answer: "canadá", explanation: "Canadá es un país norteamericano con capital en Ottawa." },
                { question: "Contiene la C: Ciencia que estudia los elementos.", answer: "química", explanation: "La química estudia la composición de la materia." },
                { question: "Empieza por C: Órgano que bombea la sangre.", answer: "corazón", explanation: "El corazón es el órgano que bombea sangre por el cuerpo." },
                { question: "Contiene la C: Continente más poblado.", answer: "asia", explanation: "Asia es el continente con más población del mundo." },
                { question: "Empieza por C: Metal de color rojizo.", answer: "cobre", explanation: "El cobre es un metal de color rojizo muy conductor." },
                { question: "Empieza por C: Aparato para medir el tiempo.", answer: "cronómetro", explanation: "El cronómetro mide intervalos de tiempo con precisión." },
                { question: "Contiene la C: Capital de Francia.", answer: "parís", explanation: "París es la capital de Francia." },
                { question: "Empieza por C: Deporte que se juega con bicicleta.", answer: "ciclismo", explanation: "El ciclismo es un deporte que se practica en bicicleta." },
                { question: "Contiene la C: Instrumento musical de cuerda.", answer: "violonchelo", explanation: "El violonchelo es un instrumento de cuerda grande." }
            ],
            
            // Letra D
            D: [
                { question: "Empieza por D: Animal marino inteligente.", answer: "delfín", explanation: "Los delfines son mamíferos marinos muy inteligentes." },
                { question: "Contiene la D: Deporte de combate con guantes.", answer: "boxeo", explanation: "El boxeo es un deporte de combate con puños." },
                { question: "Contiene la D: Continente helado.", answer: "antártida", explanation: "La Antártida es el continente más frío del planeta." },
                { question: "Contiene la D: Aparato para ver a distancia.", answer: "telescopio", explanation: "El telescopio permite observar objetos lejanos." },
                { question: "Empieza por D: Órgano de la boca para masticar.", answer: "diente", explanation: "Los dientes nos permiten masticar los alimentos." },
                { question: "Empieza por D: País europeo cuya capital es Copenhague.", answer: "dinamarca", explanation: "Dinamarca es un país nórdico con capital en Copenhague." },
                { question: "Empieza por D: Moneda de Estados Unidos.", answer: "dólar", explanation: "El dólar es la moneda oficial de Estados Unidos." },
                { question: "Contiene la D: Ciencia que estudia el derecho.", answer: "jurisprudencia", explanation: "La jurisprudencia estudia las leyes y el derecho." },
                { question: "Contiene la D: Extremidad superior del cuerpo.", answer: "brazo", explanation: "Los brazos son las extremidades superiores del cuerpo." },
                { question: "Contiene la D: Aparato para medir la temperatura.", answer: "termómetro", explanation: "El termómetro mide la temperatura." }
            ],
            
            // Letra E
            E: [
                { question: "Empieza por E: País cuya capital es Madrid.", answer: "españa", explanation: "España es un país europeo con capital en Madrid." },
                { question: "Empieza por E: Animal paquidermo con trompa.", answer: "elefante", explanation: "El elefante es el mamífero terrestre más grande." },
                { question: "Empieza por E: Continente donde está Francia.", answer: "europa", explanation: "Europa es el continente donde se encuentra Francia." },
                { question: "Empieza por E: Ciencia que estudia el medio ambiente.", answer: "ecología", explanation: "La ecología estudia las relaciones entre los seres vivos y su entorno." },
                { question: "Empieza por E: Aparato que funciona con corriente.", answer: "electrodoméstico", explanation: "Los electrodomésticos funcionan con electricidad." },
                { question: "Empieza por E: Deporte que se practica a caballo.", answer: "equitación", explanation: "La equitación es el arte de montar a caballo." },
                { question: "Empieza por E: Metal usado en construcción.", answer: "acero", explanation: "El acero es una aleación de hierro muy resistente." },
                { question: "Empieza por E: Órgano del cuerpo que filtra la sangre.", answer: "riñón", explanation: "Los riñones filtran la sangre y producen orina." },
                { question: "Empieza por E: Astro que da luz y calor.", answer: "sol", explanation: "El Sol es la estrella que ilumina nuestro sistema solar." },
                { question: "Contiene la E: País cuya capital es Lima.", answer: "perú", explanation: "Perú es un país sudamericano con capital en Lima." }
            ],
            
            // Letra F
            F: [
                { question: "Empieza por F: País europeo cuya capital es París.", answer: "francia", explanation: "Francia es un país europeo con capital en París." },
                { question: "Empieza por F: Deporte más popular del mundo.", answer: "fútbol", explanation: "El fútbol es el deporte más practicado en el mundo." },
                { question: "Empieza por F: Ciencia que estudia los fenómenos naturales.", answer: "física", explanation: "La física estudia las propiedades de la materia y la energía." },
                { question: "Empieza por F: Instrumento musical de viento.", answer: "flauta", explanation: "La flauta es un instrumento de viento muy antiguo." },
                { question: "Empieza por F: Parte del cuerpo humano más larga.", answer: "fémur", explanation: "El fémur es el hueso más largo del cuerpo humano." },
                { question: "Empieza por F: Elemento químico muy reactivo.", answer: "flúor", explanation: "El flúor es un elemento químico muy reactivo." },
                { question: "Empieza por F: Aparato que produce luz artificial.", answer: "foco", explanation: "El foco es un dispositivo que produce luz eléctrica." },
                { question: "Contiene la F: Ciencia que estudia las plantas.", answer: "botánica", explanation: "La botánica es la ciencia que estudia las plantas." },
                { question: "Empieza por F: Sensación de cansancio.", answer: "fatiga", explanation: "La fatiga es la sensación de cansancio físico o mental." },
                { question: "Contiene la F: Aparato para hacer fotografías.", answer: "cámara", explanation: "La cámara fotográfica captura imágenes." }
            ],
            
            // Letra G
            G: [
                { question: "Contiene la G: Animal doméstico que ladra.", answer: "perro", explanation: "Los perros son animales domésticos que ladran." },
                { question: "Contiene la G: País europeo cuya capital es Berlín.", answer: "alemania", explanation: "Alemania es un país europeo con capital en Berlín." },
                { question: "Empieza por G: Ciencia que estudia la Tierra.", answer: "geología", explanation: "La geología estudia la composición y estructura de la Tierra." },
                { question: "Empieza por G: Instrumento musical de cuerda.", answer: "guitarra", explanation: "La guitarra es uno de los instrumentos más populares." },
                { question: "Empieza por G: Deporte que se juega en un campo verde.", answer: "golf", explanation: "El golf se juega en un campo con hoyos." },
                { question: "Contiene la G: País sudamericano pequeño.", answer: "uruguay", explanation: "Uruguay es un país pequeño de Sudamérica." },
                { question: "Contiene la G: Aparato para enfriar alimentos.", answer: "refrigerador", explanation: "El refrigerador mantiene los alimentos fríos." },
                { question: "Empieza por G: Ciencia que estudia los mapas.", answer: "geografía", explanation: "La geografía estudia la superficie terrestre." },
                { question: "Contiene la G: Metal precioso amarillo.", answer: "oro", explanation: "El oro es un metal precioso de color amarillo." },
                { question: "Contiene la G: País cuya capital es Lisboa.", answer: "portugal", explanation: "Portugal es un país europeo con capital en Lisboa." }
            ],
            
            // Letra H
            H: [
                { question: "Empieza por H: Órgano que filtra la sangre.", answer: "hígado", explanation: "El hígado es un órgano vital que filtra toxinas." },
                { question: "Empieza por H: Ciencia que estudia el pasado.", answer: "historia", explanation: "La historia estudia los eventos del pasado." },
                { question: "Empieza por H: Gas más ligero que existe.", answer: "hidrógeno", explanation: "El hidrógeno es el elemento más ligero de la tabla periódica." },
                { question: "Empieza por H: Deporte que se juega sobre hielo.", answer: "hockey", explanation: "El hockey sobre hielo se juega con patines." },
                { question: "Contiene la H: Parte del cuerpo donde está el cerebro.", answer: "cabeza", explanation: "La cabeza contiene el cerebro y los órganos sensoriales." },
                { question: "Empieza por H: Aparato para medir la humedad.", answer: "higrómetro", explanation: "El higrómetro mide la humedad del aire." },
                { question: "Empieza por H: Metal muy resistente.", answer: "hierro", explanation: "El hierro es un metal muy usado en construcción." },
                { question: "Empieza por H: Lugar donde se curan los enfermos.", answer: "hospital", explanation: "El hospital es donde se atiende a los enfermos." },
                { question: "Contiene la H: Insecto que produce miel.", answer: "abeja", explanation: "Las abejas producen miel y polinizan las plantas." },
                { question: "Contiene la H: País cuya capital es Pekín.", answer: "china", explanation: "China es un país asiático con capital en Pekín." }
            ],
            
            // Letra I
            I: [
                { question: "Empieza por I: País europeo con forma de bota.", answer: "italia", explanation: "Italia tiene forma de bota en el mapa." },
                { question: "Empieza por I: Idioma hablado en Reino Unido.", answer: "inglés", explanation: "El inglés es el idioma oficial del Reino Unido." },
                { question: "Empieza por I: Aparato que da información.", answer: "indicador", explanation: "Los indicadores muestran información específica." },
                { question: "Contiene la I: Ciencia que estudia los insectos.", answer: "entomología", explanation: "La entomología estudia los insectos." },
                { question: "Contiene la I: Metal que se oxida fácilmente.", answer: "hierro", explanation: "El hierro se oxida cuando se expone al aire húmedo." },
                { question: "Empieza por I: Órgano del sistema digestivo.", answer: "intestino", explanation: "Los intestinos forman parte del sistema digestivo." },
                { question: "Contiene la I: Continente helado del sur.", answer: "antártida", explanation: "La Antártida es el continente más austral." },
                { question: "Contiene la I: Aparato que produce imágenes.", answer: "impresor", explanation: "La impresora produce copias en papel." },
                { question: "Contiene la I: Deporte de combate japonés.", answer: "judo", explanation: "El judo es un arte marcial japonés." },
                { question: "Contiene la I: País cuya capital es Nueva Delhi.", answer: "india", explanation: "India es un país asiático con capital en Nueva Delhi." }
            ],
            
            // Letra J
            J: [
                { question: "Empieza por J: País asiático cuya capital es Tokio.", answer: "japón", explanation: "Japón es un país insular asiático." },
                { question: "Empieza por J: Deporte de combate con kimono.", answer: "judo", explanation: "El judo es un arte marcial que se practica con kimono." },
                { question: "Empieza por J: Animal con cuello muy largo.", answer: "jirafa", explanation: "La jirafa es el animal más alto del mundo." },
                { question: "Empieza por J: Piedra preciosa verde.", answer: "jade", explanation: "El jade es una piedra semipreciosa de color verde." },
                { question: "Contiene la J: Deporte que se juega con raqueta.", answer: "tenis", explanation: "El tenis se juega con raquetas y pelota." },
                { question: "Contiene la J: Aparato para medir distancias.", answer: "metro", explanation: "El metro es una unidad de medida de longitud." },
                { question: "Empieza por J: Ciencia que estudia las leyes.", answer: "jurisprudencia", explanation: "La jurisprudencia estudia el derecho y las leyes." },
                { question: "Empieza por J: Líquido que se extrae de las frutas.", answer: "jugo", explanation: "El jugo se obtiene exprimiendo frutas." },
                { question: "Empieza por J: Mes del año.", answer: "junio", explanation: "Junio es el sexto mes del año." },
                { question: "Contiene la J: País cuya capital es Belgrado.", answer: "serbia", explanation: "Serbia es un país europeo con capital en Belgrado." }
            ],
            
            // Letra K
            K: [
                { question: "Empieza por K: Unidad de medida de peso equivalente a mil gramos.", answer: "kilogramo", explanation: "El kilogramo es la unidad básica de masa en el Sistema Internacional." },
                { question: "Empieza por K: Unidad de distancia equivalente a mil metros.", answer: "kilómetro", explanation: "El kilómetro es una unidad de longitud equivalente a 1000 metros." },
                { question: "Empieza por K: Arte marcial originaria de Japón.", answer: "karate", explanation: "El karate es un arte marcial japonés que significa 'mano vacía'." },
                { question: "Empieza por K: Prefijo que significa mil.", answer: "kilo", explanation: "Kilo es un prefijo del Sistema Internacional que significa mil (1000)." },
                { question: "Empieza por K: Deporte de contacto que usa golpes y patadas.", answer: "kickboxing", explanation: "El kickboxing combina técnicas de boxeo con patadas." },
                { question: "Contiene la K: Unidad de energía en nutrición.", answer: "kilocaloría", explanation: "La kilocaloría es la unidad usada para medir la energía de los alimentos." },
                { question: "Empieza por K: Tipo de falda tradicional escocesa.", answer: "kilt", explanation: "El kilt es la falda tradicional masculina de Escocia." },
                { question: "Empieza por K: Símbolo químico del potasio.", answer: "k", explanation: "K es el símbolo químico del potasio en la tabla periódica." },
                { question: "Empieza por K: Arte marcial basada en técnicas de espada japonesa.", answer: "kendo", explanation: "El kendo es el arte marcial japonés de la esgrima con espada." },
                { question: "Empieza por K: Instrumento musical africano de percusión.", answer: "kalimba", explanation: "La kalimba es un instrumento africano de láminas metálicas." }
            ],
            
            // Letra L
            L: [
                { question: "Empieza por L: Satélite natural de la Tierra.", answer: "luna", explanation: "La Luna es el único satélite natural de nuestro planeta." },
                { question: "Empieza por L: Parte del cuerpo humano relacionada con la respiración.", answer: "laringe", explanation: "La laringe es el órgano donde se encuentran las cuerdas vocales." },
                { question: "Empieza por L: Lengua oficial de la antigua Roma.", answer: "latín", explanation: "El latín fue la lengua del Imperio Romano y base de las lenguas romances." },
                { question: "Empieza por L: Instrumento musical de cuerda.", answer: "laúd", explanation: "El laúd es un instrumento de cuerda pulsada muy antiguo." },
                { question: "Empieza por L: Línea que une dos puntos.", answer: "línea", explanation: "En geometría, una línea es la distancia más corta entre dos puntos." },
                { question: "Empieza por L: Deporte olímpico de fuerza.", answer: "lucha", explanation: "La lucha es uno de los deportes más antiguos de los Juegos Olímpicos." },
                { question: "Empieza por L: Ciencia que estudia el lenguaje.", answer: "lingüística", explanation: "La lingüística es la ciencia que estudia el lenguaje humano." },
                { question: "Empieza por L: Aparato que sirve para iluminar.", answer: "lámpara", explanation: "Las lámparas son dispositivos que producen luz artificial." },
                { question: "Empieza por L: Lugar donde se guardan libros.", answer: "librería", explanation: "Las librerías son establecimientos donde se venden libros." },
                { question: "Contiene la L: Aparato que sirve para escribir.", answer: "bolígrafo", explanation: "El bolígrafo es un instrumento de escritura muy común." }
            ],

            // Letra M
            M: [
                { question: "Empieza por M: Mamífero marino con colmillos.", answer: "morsa", explanation: "Las morsas son mamíferos marinos árticos con grandes colmillos." },
                { question: "Empieza por M: País cuya capital es Ciudad de México.", answer: "méxico", explanation: "México es un país de América del Norte con capital en Ciudad de México." },
                { question: "Empieza por M: Ciencia que estudia los números.", answer: "matemáticas", explanation: "Las matemáticas son la ciencia de los números, formas y patrones." },
                { question: "Empieza por M: Instrumento musical de percusión.", answer: "maracas", explanation: "Las maracas son instrumentos de percusión típicos de América Latina." },
                { question: "Empieza por M: Parte del cuerpo que permite masticar.", answer: "mandíbula", explanation: "La mandíbula es el hueso móvil de la boca que permite masticar." },
                { question: "Empieza por M: Deporte de combate mixto.", answer: "mma", explanation: "MMA significa Mixed Martial Arts o Artes Marciales Mixtas." },
                { question: "Empieza por M: Instrumento para medir distancias largas.", answer: "metro", explanation: "El metro es tanto una unidad de medida como un instrumento para medir." },
                { question: "Empieza por M: Ciencia que estudia los microbios.", answer: "microbiología", explanation: "La microbiología estudia los microorganismos como bacterias y virus." },
                { question: "Empieza por M: Aparato que sirve para moler alimentos.", answer: "molino", explanation: "Los molinos se usan para moler granos y otros alimentos." },
                { question: "Empieza por M: Material usado en la construcción.", answer: "madera", explanation: "La madera es uno de los materiales de construcción más antiguos." }
            ],

            // Letra N
            N: [
                { question: "Empieza por N: Ciencia que estudia los números.", answer: "numerología", explanation: "La numerología estudia la relación entre números y eventos." },
                { question: "Empieza por N: País europeo cuya capital es Oslo.", answer: "noruega", explanation: "Noruega es un país escandinavo con capital en Oslo." },
                { question: "Empieza por N: Parte del cuerpo usada para oler.", answer: "nariz", explanation: "La nariz es el órgano del olfato en los mamíferos." },
                { question: "Empieza por N: Ciencia que estudia el sistema nervioso.", answer: "neurología", explanation: "La neurología es la especialidad médica que estudia el sistema nervioso." },
                { question: "Empieza por N: Sustancia necesaria para la vida humana.", answer: "nutriente", explanation: "Los nutrientes son sustancias que el cuerpo necesita para funcionar." },
                { question: "Empieza por N: Medio de transporte acuático.", answer: "navío", explanation: "Un navío es una embarcación grande para navegación marítima." },
                { question: "Empieza por N: Ciencia que estudia la nutrición.", answer: "nutrición", explanation: "La nutrición estudia cómo los alimentos afectan la salud." },
                { question: "Empieza por N: Elemento químico con símbolo N.", answer: "nitrógeno", explanation: "El nitrógeno es un gas que forma el 78% de la atmósfera terrestre." },
                { question: "Contiene la N: País cuya capital es Londres.", answer: "reino unido", explanation: "El Reino Unido es un país europeo formado por Inglaterra, Escocia, Gales e Irlanda del Norte." },
                { question: "Contiene la N: País cuya capital es Buenos Aires.", answer: "argentina", explanation: "Argentina es un país sudamericano con capital en Buenos Aires." }
            ],

            // Letra O
            O: [
                { question: "Empieza por O: Parte del cuerpo usada para ver.", answer: "ojos", explanation: "Los ojos son los órganos de la vista en los vertebrados." },
                { question: "Empieza por O: Ciencia que estudia los oídos.", answer: "otología", explanation: "La otología es la rama de la medicina que estudia el oído." },
                { question: "Empieza por O: Ciencia que estudia los huesos.", answer: "osteología", explanation: "La osteología es la parte de la anatomía que estudia los huesos." },
                { question: "Empieza por O: Instrumento musical de viento.", answer: "oboe", explanation: "El oboe es un instrumento de viento madera de sonido penetrante." },
                { question: "Empieza por O: Gas necesario para la respiración.", answer: "oxígeno", explanation: "El oxígeno es esencial para la respiración de la mayoría de seres vivos." },
                { question: "Empieza por O: Parte del cuerpo relacionada con el olfato.", answer: "olfato", explanation: "El olfato es el sentido que permite percibir los olores." },
                { question: "Empieza por O: Movimiento de la Tierra alrededor del Sol.", answer: "órbita", explanation: "La órbita terrestre es el camino que sigue la Tierra alrededor del Sol." },
                { question: "Empieza por O: Instrumento óptico para ver a distancia.", answer: "ocular", explanation: "El ocular es la parte del telescopio o microscopio por donde se mira." },
                { question: "Contiene la O: País cuya capital es Lisboa.", answer: "portugal", explanation: "Portugal es un país europeo situado en la Península Ibérica." },
                { question: "Contiene la O: Continente donde está Canadá.", answer: "américa del norte", explanation: "América del Norte es el continente que incluye Canadá, Estados Unidos y México." }
            ],

            // Letra P
            P: [
                { question: "Empieza por P: Ciencia que estudia la mente humana.", answer: "psicología", explanation: "La psicología estudia el comportamiento y los procesos mentales." },
                { question: "Empieza por P: País cuya capital es Lima.", answer: "perú", explanation: "Perú es un país sudamericano con capital en Lima." },
                { question: "Empieza por P: Instrumento musical de percusión.", answer: "platillos", explanation: "Los platillos son instrumentos de percusión metálicos que se chocan entre sí." },
                { question: "Empieza por P: Parte del cuerpo usada para caminar.", answer: "pierna", explanation: "Las piernas son las extremidades inferiores que permiten caminar." },
                { question: "Empieza por P: Ciencia que estudia los fósiles.", answer: "paleontología", explanation: "La paleontología estudia los seres vivos del pasado a través de fósiles." },
                { question: "Empieza por P: Deporte que se practica con una pala.", answer: "pádel", explanation: "El pádel es un deporte de raqueta que se juega en parejas." },
                { question: "Empieza por P: Aparato para ver objetos lejanos.", answer: "prismáticos", explanation: "Los prismáticos son instrumentos ópticos para ver a distancia." },
                { question: "Empieza por P: Parte del cuerpo que protege el corazón.", answer: "pecho", explanation: "El pecho es la parte anterior del tórax que protege órganos vitales." },
                { question: "Empieza por P: Instrumento para escribir.", answer: "pluma", explanation: "La pluma es un instrumento tradicional de escritura." },
                { question: "Empieza por P: Material usado para fabricar papel.", answer: "pulpa", explanation: "La pulpa de madera es la materia prima principal del papel." }
            ],

            // Letra Q
            Q: [
                { question: "Empieza por Q: Ciencia que estudia los procesos químicos del cuerpo humano.", answer: "química", explanation: "La química estudia la composición y transformación de la materia." },
                { question: "Empieza por Q: Palabra que indica cantidad de cinco.", answer: "quinteto", explanation: "Un quinteto es un grupo de cinco elementos o personas." },
                { question: "Empieza por Q: País de Oriente Medio cuya capital es Doha.", answer: "qatar", explanation: "Qatar es un pequeño país árabe en el Golfo Pérsico." },
                { question: "Empieza por Q: Instrumento musical de viento andino.", answer: "quena", explanation: "La quena es una flauta tradicional de los Andes." },
                { question: "Empieza por Q: Parte del cuerpo humano relacionada con la mandíbula.", answer: "quijada", explanation: "La quijada es otro nombre para la mandíbula o maxilar inferior." },
                { question: "Empieza por Q: Instrumento usado para medir ángulos.", answer: "cuadrante", explanation: "El cuadrante es un instrumento para medir ángulos y alturas." },
                { question: "Empieza por Q: Nombre de letra del alfabeto.", answer: "q", explanation: "Q es la decimoséptima letra del alfabeto español." },
                { question: "Empieza por Q: Tipo de queso muy conocido.", answer: "queso", explanation: "El queso es un alimento derivado de la leche cuajada." },
                { question: "Empieza por Q: Forma verbal del verbo querer.", answer: "quiero", explanation: "Quiero es la primera persona del singular del verbo querer." },
                { question: "Contiene la Q: País cuya capital es Quito.", answer: "ecuador", explanation: "Ecuador es un país sudamericano con capital en Quito." }
            ],

            // Letra R
            R: [
                { question: "Empieza por R: Aparato para medir el tiempo.", answer: "reloj", explanation: "El reloj es un instrumento para medir y mostrar el tiempo." },
                { question: "Empieza por R: País cuya capital es Bucarest.", answer: "rumanía", explanation: "Rumanía es un país del sureste de Europa con capital en Bucarest." },
                { question: "Empieza por R: Ciencia que estudia los reflejos.", answer: "reflexología", explanation: "La reflexología estudia los reflejos y su aplicación terapéutica." },
                { question: "Empieza por R: Instrumento musical de percusión.", answer: "redoblante", explanation: "El redoblante es un tipo de tambor usado en bandas militares." },
                { question: "Empieza por R: Parte del cuerpo humano.", answer: "rodilla", explanation: "La rodilla es la articulación que une el muslo con la pierna." },
                { question: "Empieza por R: Deporte de contacto con balón ovalado.", answer: "rugby", explanation: "El rugby es un deporte de contacto que se juega con balón ovalado." },
                { question: "Empieza por R: Instrumento óptico.", answer: "reflector", explanation: "Un reflector es un dispositivo que refleja luz u ondas." },
                { question: "Empieza por R: Aparato para escuchar música.", answer: "radio", explanation: "La radio es un medio de comunicación que transmite sonido." },
                { question: "Empieza por R: Material usado en la construcción.", answer: "roca", explanation: "La roca es un material natural usado en construcción." },
                { question: "Contiene la R: Aparato para medir la temperatura.", answer: "termómetro", explanation: "El termómetro mide la temperatura de cuerpos o ambientes." }
            ],

            // Letra S
            S: [
                { question: "Empieza por S: Ciencia que estudia la sociedad.", answer: "sociología", explanation: "La sociología estudia las sociedades humanas y su comportamiento." },
                { question: "Empieza por S: País cuya capital es Estocolmo.", answer: "suecia", explanation: "Suecia es un país escandinavo con capital en Estocolmo." },
                { question: "Empieza por S: Instrumento musical de viento.", answer: "saxofón", explanation: "El saxofón es un instrumento de viento inventado por Adolphe Sax." },
                { question: "Empieza por S: Ciencia que estudia los terremotos.", answer: "sismología", explanation: "La sismología estudia los terremotos y movimientos sísmicos." },
                { question: "Empieza por S: Deporte de combate olímpico.", answer: "sambo", explanation: "El sambo es un arte marcial y deporte de combate de origen ruso." },
                { question: "Empieza por S: Aparato para medir el tiempo.", answer: "segundero", explanation: "El segundero es la manecilla del reloj que marca los segundos." },
                { question: "Empieza por S: Instrumento para medir distancias.", answer: "sonda", explanation: "Una sonda es un instrumento para explorar o medir profundidades." },
                { question: "Empieza por S: Unidad básica de información.", answer: "símbolo", explanation: "Un símbolo es un signo que representa una idea o concepto." },
                { question: "Empieza por S: Instrumento musical de percusión.", answer: "sonajero", explanation: "El sonajero es un instrumento de percusión que produce sonido al agitarse." },
                { question: "Empieza por S: Sustancia necesaria para la vida.", answer: "sal", explanation: "La sal es un mineral esencial para el funcionamiento del cuerpo." }
            ],

            // Letra T
            T: [
                { question: "Empieza por T: Ciencia que estudia la Tierra.", answer: "tectónica", explanation: "La tectónica estudia la estructura y movimientos de la corteza terrestre." },
                { question: "Empieza por T: Parte del cuerpo usada para ver.", answer: "tacto", explanation: "El tacto es el sentido que permite percibir texturas y temperaturas." },
                { question: "Empieza por T: País cuya capital es Bangkok.", answer: "tailandia", explanation: "Tailandia es un país del sudeste asiático con capital en Bangkok." },
                { question: "Empieza por T: Instrumento musical de percusión.", answer: "tambor", explanation: "El tambor es uno de los instrumentos de percusión más antiguos." },
                { question: "Empieza por T: Instrumento para medir la temperatura.", answer: "termómetro", explanation: "El termómetro es el instrumento básico para medir temperatura." },
                { question: "Empieza por T: Deporte de mesa con palas.", answer: "tenis de mesa", explanation: "El tenis de mesa o ping-pong se juega con palas sobre una mesa." },
                { question: "Empieza por T: Parte del cuerpo que sostiene la cabeza.", answer: "tronco", explanation: "El tronco es la parte central del cuerpo que sostiene la cabeza." },
                { question: "Empieza por T: Aparato para medir el tiempo.", answer: "temporizador", explanation: "Un temporizador es un dispositivo que mide intervalos de tiempo." },
                { question: "Empieza por T: Instrumento musical de cuerda.", answer: "timple", explanation: "El timple es un instrumento de cuerda típico de las Islas Canarias." },
                { question: "Empieza por T: Material usado en la construcción.", answer: "teja", explanation: "Las tejas son piezas de cerámica usadas para cubrir tejados." }
            ],

            // Letra U
            U: [
                { question: "Empieza por U: Parte del cuerpo usada para eliminar orina.", answer: "uretra", explanation: "La uretra es el conducto por donde se elimina la orina." },
                { question: "Empieza por U: Ciencia que estudia las enfermedades urinarias.", answer: "urología", explanation: "La urología es la especialidad médica del sistema urinario." },
                { question: "Empieza por U: País cuya capital es Montevideo.", answer: "uruguay", explanation: "Uruguay es un país sudamericano con capital en Montevideo." },
                { question: "Empieza por U: Instrumento musical de cuerda.", answer: "ukelele", explanation: "El ukelele es un instrumento de cuerda hawaiano similar a una guitarra pequeña." },
                { question: "Empieza por U: Ciencia que estudia los ovnis.", answer: "ufología", explanation: "La ufología estudia los objetos voladores no identificados." },
                { question: "Empieza por U: Parte del cuerpo humano.", answer: "úvula", explanation: "La úvula es la pequeña masa carnosa que cuelga del paladar." },
                { question: "Empieza por U: Tipo de formación montañosa.", answer: "uvala", explanation: "Una uvala es una depresión kárstica de gran tamaño." },
                { question: "Empieza por U: Aparato médico de imagen.", answer: "ultrasonido", explanation: "El ultrasonido usa ondas sonoras para crear imágenes médicas." },
                { question: "Empieza por U: Parte del cuerpo humano.", answer: "uña", explanation: "Las uñas son estructuras córneas que protegen las puntas de los dedos." },
                { question: "Empieza por U: Unidad de medida informática.", answer: "unidad de almacenamiento", explanation: "Las unidades de almacenamiento guardan información digital." }
            ],

            // Letra V
            V: [
                { question: "Empieza por V: País cuya capital es Caracas.", answer: "venezuela", explanation: "Venezuela es un país sudamericano con capital en Caracas." },
                { question: "Empieza por V: Parte del cuerpo que transporta la sangre.", answer: "vena", explanation: "Las venas son vasos sanguíneos que llevan sangre al corazón." },
                { question: "Empieza por V: Ciencia que estudia el vino.", answer: "viticultura", explanation: "La viticultura es la ciencia del cultivo de la vid y producción de vino." },
                { question: "Empieza por V: Instrumento musical de cuerda.", answer: "violín", explanation: "El violín es un instrumento de cuerda frotada muy popular." },
                { question: "Empieza por V: Aparato para ver a distancia.", answer: "visor", explanation: "Un visor es un dispositivo óptico para observar objetos lejanos." },
                { question: "Empieza por V: Unidad de medida eléctrica.", answer: "voltio", explanation: "El voltio es la unidad de medida del potencial eléctrico." },
                { question: "Empieza por V: Deporte que se juega con una red y balón.", answer: "voleibol", explanation: "El voleibol se juega golpeando un balón por encima de una red." },
                { question: "Empieza por V: Ciencia que estudia los volcanes.", answer: "vulcanología", explanation: "La vulcanología estudia los volcanes y fenómenos volcánicos." },
                { question: "Empieza por V: Aparato para medir la velocidad.", answer: "velocímetro", explanation: "El velocímetro mide la velocidad de vehículos." },
                { question: "Empieza por V: Sustancia necesaria para el cuerpo humano.", answer: "vitamina", explanation: "Las vitaminas son nutrientes esenciales para el funcionamiento corporal." }
            ],

            // Letra W
            W: [
                { question: "Empieza por W: Deporte acuático con tabla y vela.", answer: "windsurf", explanation: "El windsurf combina surf y vela en una tabla con vela." },
                { question: "Empieza por W: Aplicación de mensajería muy conocida.", answer: "whatsapp", explanation: "WhatsApp es una aplicación de mensajería instantánea muy popular." },
                { question: "Empieza por W: Red inalámbrica para conectarse a internet.", answer: "wifi", explanation: "WiFi es una tecnología de comunicación inalámbrica." },
                { question: "Empieza por W: Lenguaje usado para crear páginas web.", answer: "web", explanation: "Web se refiere al conjunto de tecnologías para crear sitios de internet." },
                { question: "Empieza por W: Navegador de internet de Microsoft.", answer: "windows", explanation: "Windows es el sistema operativo de Microsoft, no un navegador." },
                { question: "Empieza por W: Deporte de combate con puños.", answer: "wrestling", explanation: "El wrestling es un deporte de lucha muy popular en Estados Unidos." },
                { question: "Empieza por W: Servicio de enciclopedia online.", answer: "wikipedia", explanation: "Wikipedia es una enciclopedia libre y colaborativa en internet." },
                { question: "Empieza por W: Juego de mesa con preguntas.", answer: "wikirace", explanation: "Wikirace es un juego que consiste en navegar entre artículos de Wikipedia." },
                { question: "Empieza por W: Marca de coches alemana.", answer: "volkswagen", explanation: "Volkswagen es una marca alemana de automóviles." },
                { question: "Empieza por W: Tecnología para comunicaciones sin cables.", answer: "wireless", explanation: "Wireless significa 'sin cables' en inglés, refiriéndose a comunicaciones inalámbricas." }
            ],

            // Letra X
            X: [
                { question: "Empieza por X: Instrumento musical parecido al metalófono.", answer: "xilófono", explanation: "El xilófono es un instrumento de percusión con láminas de madera." },
                { question: "Empieza por X: Letra usada para incógnitas en matemáticas.", answer: "x", explanation: "La X es comúnmente usada para representar valores desconocidos." },
                { question: "Empieza por X: Gas noble utilizado en iluminación.", answer: "xenón", explanation: "El xenón es un gas noble usado en lámparas y faros de automóviles." },
                { question: "Empieza por X: Tipo de radiación usada en medicina.", answer: "rayos x", explanation: "Los rayos X son radiación electromagnética usada para ver el interior del cuerpo." },
                { question: "Empieza por X: Prefijo que indica relación con lo extranjero.", answer: "xenofobia", explanation: "Xenofobia es el miedo o rechazo hacia los extranjeros." },
                { question: "Empieza por X: Tipo de madera africana.", answer: "xilo", explanation: "Xilo es un prefijo que significa madera, como en xilófono." },
                { question: "Empieza por X: Lenguaje de marcado extensible.", answer: "xml", explanation: "XML es un lenguaje de marcado para estructurar datos." },
                { question: "Empieza por X: Sistema operativo gráfico.", answer: "xenix", explanation: "Xenix fue una versión de Unix desarrollada por Microsoft." },
                { question: "Contiene la X: Deporte extremo.", answer: "bmx", explanation: "BMX es un tipo de ciclismo con bicicletas especiales para acrobacias." },
                { question: "Contiene la X: Marca de consola.", answer: "xbox", explanation: "Xbox es la consola de videojuegos de Microsoft." }
            ],

            // Letra Y
            Y: [
                { question: "Empieza por Y: Alimento lácteo fermentado.", answer: "yogur", explanation: "El yogur es un producto lácteo fermentado con bacterias beneficiosas." },
                { question: "Empieza por Y: Ciencia que estudia el yoga.", answer: "yogaterapia", explanation: "La yogaterapia aplica técnicas de yoga con fines terapéuticos." },
                { question: "Empieza por Y: Lenguaje de marcado.", answer: "yaml", explanation: "YAML es un lenguaje de serialización de datos legible por humanos." },
                { question: "Empieza por Y: Tipo de embarcación de recreo.", answer: "yate", explanation: "Un yate es una embarcación de recreo de lujo." },
                { question: "Empieza por Y: País asiático cuya capital es Saná.", answer: "yemen", explanation: "Yemen es un país árabe ubicado en la península arábiga." },
                { question: "Empieza por Y: Parte del cuerpo humano.", answer: "yema", explanation: "La yema del dedo es la parte carnosa de la punta del dedo." },
                { question: "Empieza por Y: Unidad de longitud muy pequeña.", answer: "yarda", explanation: "La yarda es una unidad de longitud del sistema imperial." },
                { question: "Empieza por Y: Sustancia de color amarillo del huevo.", answer: "yema", explanation: "La yema es la parte amarilla y nutritiva del huevo." },
                { question: "Empieza por Y: Estilo de música electrónica.", answer: "yodel", explanation: "El yodel es una técnica de canto tradicional alpina." },
                { question: "Contiene la Y: Deporte acuático.", answer: "kayak", explanation: "El kayak es una embarcación ligera propulsada con pala doble." }
            ],

            // Letra Z
            Z: [
                { question: "Empieza por Z: Animal africano con rayas.", answer: "zebra", explanation: "Las zebras son équidos africanos caracterizados por sus rayas." },
                { question: "Empieza por Z: Ciencia que estudia los animales.", answer: "zoología", explanation: "La zoología es la rama de la biología que estudia los animales." },
                { question: "Empieza por Z: País africano cuya capital es Lusaka.", answer: "zambia", explanation: "Zambia es un país del sur de África con capital en Lusaka." },
                { question: "Empieza por Z: Material usado para galvanizar metales.", answer: "zinc", explanation: "El zinc es un metal usado para proteger otros metales de la corrosión." },
                { question: "Empieza por Z: Movimiento rápido y brusco.", answer: "zigzag", explanation: "Zigzag es un patrón de movimiento en líneas quebradas." },
                { question: "Empieza por Z: Parte del sistema digestivo.", answer: "zumo gástrico", explanation: "El zumo gástrico es el líquido ácido producido por el estómago." },
                { question: "Empieza por Z: Fenómeno atmosférico.", answer: "zonda", explanation: "El zonda es un viento cálido y seco típico de Argentina." },
                { question: "Contiene la Z: Instrumento musical de cuerda.", answer: "violonchelo", explanation: "El violonchelo es un instrumento de cuerda frotada de gran tamaño." },
                { question: "Contiene la Z: Deporte que se juega con balón.", answer: "baloncesto", explanation: "El baloncesto se juega introduciendo un balón en una canasta elevada." },
                { question: "Contiene la Z: Aparato para medir la temperatura.", answer: "termómetro", explanation: "El termómetro es el instrumento estándar para medir temperatura." }
            ]
        };
    }

    initializeDOM() {
        this.elements = {
            rosco: document.getElementById('rosco'),
            currentLetter: document.getElementById('current-letter-display'),
            questionText: document.getElementById('question-text'),
            answerInput: document.getElementById('answer-input'),
            confirmBtn: document.getElementById('confirm-btn'),
            passBtn: document.getElementById('pass-btn'),
            restartBtn: document.getElementById('restart-btn'),
            helpBtn: document.getElementById('help-btn'),
            feedbackContainer: document.getElementById('feedback-container'),
            
            // Stats
            aciertos: document.getElementById('aciertos'),
            fallos: document.getElementById('fallos'),
            pendientes: document.getElementById('pendientes'),
            tiempo: document.getElementById('tiempo'),
            
            // Modals
            resultsModal: document.getElementById('results-modal'),
            helpModal: document.getElementById('help-modal'),
            modalClose: document.getElementById('modal-close'),
            helpModalClose: document.getElementById('help-modal-close'),
            playAgainBtn: document.getElementById('play-again-btn')
        };
    }

    setupEventListeners() {
        // Botones principales
        this.elements.confirmBtn.addEventListener('click', () => this.confirmAnswer());
        this.elements.passBtn.addEventListener('click', () => this.passQuestion());
        this.elements.restartBtn.addEventListener('click', () => this.restartGame());
        this.elements.helpBtn.addEventListener('click', () => this.showHelp());
        
        // Input de respuesta
        this.elements.answerInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.confirmAnswer();
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

    createRosco() {
        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
        const radius = 160;
        const centerX = 200;
        const centerY = 200;
        
        letters.forEach((letter, index) => {
            const angle = (index * 360 / 26) - 90; // -90 para empezar en la parte superior
            const radian = (angle * Math.PI) / 180;
            
            const x = centerX + radius * Math.cos(radian) - 20; // -20 para centrar el círculo
            const y = centerY + radius * Math.sin(radian) - 20;
            
            const letterCircle = document.createElement('div');
            letterCircle.className = 'letter-circle pending';
            letterCircle.textContent = letter;
            letterCircle.style.left = `${x}px`;
            letterCircle.style.top = `${y}px`;
            letterCircle.dataset.letter = letter;
            letterCircle.dataset.index = index;
            
            letterCircle.addEventListener('click', () => this.goToLetter(index));
            
            this.elements.rosco.appendChild(letterCircle);
        });
    }

    startGame() {
        this.gameState.startTime = new Date();
        this.isGameActive = true;
        this.startTimer();
        this.showCurrentQuestion();
        this.updateStats();
        this.updateRoscoDisplay();
    }

    startTimer() {
        this.timerInterval = setInterval(() => {
            if (this.gameState.startTime) {
                const elapsed = new Date() - this.gameState.startTime;
                const minutes = Math.floor(elapsed / 60000);
                const seconds = Math.floor((elapsed % 60000) / 1000);
                this.elements.tiempo.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            }
        }, 1000);
    }

    showCurrentQuestion() {
        const letter = String.fromCharCode(65 + this.currentLetterIndex); // A=65
        const questions = this.questions[letter];
        
        if (questions && questions.length > 0) {
            // Seleccionar pregunta aleatoria para esta letra
            const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
            this.currentQuestion = randomQuestion;
            
            this.elements.currentLetter.textContent = letter;
            this.elements.questionText.textContent = randomQuestion.question;
            this.elements.answerInput.value = '';
            this.elements.answerInput.focus();
            
            this.hideFeedback();
        }
    }

    confirmAnswer() {
        if (!this.isGameActive) return;
        
        const userAnswer = this.elements.answerInput.value.trim().toLowerCase();
        if (!userAnswer) return;
        
        const isCorrect = this.checkAnswer(userAnswer, this.currentQuestion.answer);
        
        if (isCorrect) {
            this.gameState.correct++;
            this.gameState.letterStates[this.currentLetterIndex] = 'correct';
            this.gameState.answers[this.currentLetterIndex] = userAnswer;
            this.showFeedback(true, this.currentQuestion.explanation);
        } else {
            this.gameState.incorrect++;
            this.gameState.letterStates[this.currentLetterIndex] = 'incorrect';
            this.gameState.answers[this.currentLetterIndex] = userAnswer;
            this.showFeedback(false, `La respuesta correcta era: ${this.currentQuestion.answer}. ${this.currentQuestion.explanation}`);
        }
        
        this.gameState.pending--;
        this.updateStats();
        this.updateRoscoDisplay();
        
        setTimeout(() => {
            this.nextQuestion();
        }, 3000);
    }

    checkAnswer(userAnswer, correctAnswer) {
        // Normalizar respuestas para comparación
        const normalize = (str) => str.toLowerCase()
            .replace(/[áàäâ]/g, 'a')
            .replace(/[éèëê]/g, 'e')
            .replace(/[íìïî]/g, 'i')
            .replace(/[óòöô]/g, 'o')
            .replace(/[úùüû]/g, 'u')
            .replace(/ñ/g, 'n')
            .replace(/[^a-z0-9\s]/g, '')
            .trim();
        
        const normalizedUser = normalize(userAnswer);
        const normalizedCorrect = normalize(correctAnswer);
        
        return normalizedUser === normalizedCorrect;
    }

    passQuestion() {
        if (!this.isGameActive) return;
        
        this.nextQuestion();
    }

    nextQuestion() {
        // Buscar la siguiente pregunta pendiente
        let nextIndex = (this.currentLetterIndex + 1) % 26;
        let attempts = 0;
        
        while (attempts < 26 && this.gameState.letterStates[nextIndex] !== 'pending') {
            nextIndex = (nextIndex + 1) % 26;
            attempts++;
        }
        
        if (attempts === 26) {
            // No hay más preguntas pendientes
            this.endGame();
            return;
        }
        
        this.currentLetterIndex = nextIndex;
        this.showCurrentQuestion();
        this.updateRoscoDisplay();
    }

    goToLetter(index) {
        if (!this.isGameActive || this.gameState.letterStates[index] !== 'pending') return;
        
        this.currentLetterIndex = index;
        this.showCurrentQuestion();
        this.updateRoscoDisplay();
    }

    showFeedback(isCorrect, explanation) {
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
        
        feedbackExplanation.textContent = explanation;
        this.elements.feedbackContainer.style.display = 'block';
    }

    hideFeedback() {
        this.elements.feedbackContainer.style.display = 'none';
    }

    updateStats() {
        this.elements.aciertos.textContent = this.gameState.correct;
        this.elements.fallos.textContent = this.gameState.incorrect;
        this.elements.pendientes.textContent = this.gameState.pending;
    }

    updateRoscoDisplay() {
        const letterCircles = this.elements.rosco.querySelectorAll('.letter-circle');
        
        letterCircles.forEach((circle, index) => {
            circle.className = 'letter-circle';
            
            if (index === this.currentLetterIndex && this.isGameActive) {
                circle.classList.add('current');
            } else {
                circle.classList.add(this.gameState.letterStates[index]);
            }
        });
    }

    endGame() {
        this.isGameActive = false;
        this.gameState.endTime = new Date();
        
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
        }
        
        // Guardar puntuación
        this.saveScore();
        
        // Mostrar resultados
        this.showResults();
    }

    saveScore() {
        const userData = JSON.parse(localStorage.getItem('culturaGeneral')) || {};
        if (!userData.puntuaciones) userData.puntuaciones = {};
        
        const score = this.gameState.correct * 10;
        if (!userData.puntuaciones.pasapalabra || score > userData.puntuaciones.pasapalabra) {
            userData.puntuaciones.pasapalabra = score;
            localStorage.setItem('culturaGeneral', JSON.stringify(userData));
        }
    }

    showResults() {
        const totalTime = this.gameState.endTime - this.gameState.startTime;
        const minutes = Math.floor(totalTime / 60000);
        const seconds = Math.floor((totalTime % 60000) / 1000);
        
        document.getElementById('final-aciertos').textContent = this.gameState.correct;
        document.getElementById('final-fallos').textContent = this.gameState.incorrect;
        document.getElementById('final-pendientes').textContent = this.gameState.pending;
        document.getElementById('final-tiempo').textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        
        // Mensaje de rendimiento
        const percentage = (this.gameState.correct / 26) * 100;
        let message = '';
        
        if (percentage >= 90) {
            message = '¡Excelente! Eres un verdadero experto en cultura general.';
        } else if (percentage >= 70) {
            message = '¡Muy bien! Tienes un gran conocimiento de cultura general.';
        } else if (percentage >= 50) {
            message = 'Buen trabajo. Sigue practicando para mejorar aún más.';
        } else {
            message = 'No te desanimes. La práctica hace al maestro. ¡Inténtalo de nuevo!';
        }
        
        document.getElementById('performance-message').textContent = message;
        
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
        // Reiniciar estado del juego
        this.gameState = {
            correct: 0,
            incorrect: 0,
            pending: 26,
            startTime: null,
            endTime: null,
            answers: new Array(26).fill(null),
            letterStates: new Array(26).fill('pending')
        };
        
        this.currentLetterIndex = 0;
        
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
        }
        
        this.hideFeedback();
        this.startGame();
    }
}

// Inicializar el juego cuando se carga la página
document.addEventListener('DOMContentLoaded', () => {
    new PasapalabraGame();
});
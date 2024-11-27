Index.html

Encabezado (<head>): Incluye el título de la página, enlaces a una hoja de estilos (style.css) y un archivo JavaScript (detalles.js).
Encabezado visual: Una sección con el logo, el nombre de la tienda y enlaces para "Registrarse" e "Iniciar sesión".
Barra de navegación: Un menú con enlaces a distintas secciones de la página: Inicio, Videos, Juego y About Us.
Cuerpo: Presenta varias secciones de cartas Pokémon dispuestas en grupos (<section class="cards">), con enlaces para ver detalles y botones de "Comprar".
Redirección al comprar: Un botón ejecuta una función JavaScript (compra()) que redirige al usuario a la página de pago.
Pie de página: Contiene enlaces a redes sociales (Facebook, Twitter e Instagram) y a los términos de privacidad.
Estilo y funcionalidad: Las clases CSS y funciones JavaScript se utilizan para dar estilo, animación y funcionalidad interactiva.

Registro.html

Video de fondo: Un video de Pokémon (pokemon.mp4) se reproduce en bucle como fondo decorativo.
Encabezado principal: Muestra el título "Registro" centrado en la parte superior.
Formulario: Presenta un formulario con campos para ingresar usuario, contraseña, correo y confirmación de correo, con validación requerida.
Términos y condiciones: Incluye un checkbox obligatorio para aceptar los términos.
Botón de registro: Al pulsar, ejecuta un script que muestra un mensaje de confirmación y redirige al inicio (index.html).

Iniciodesesion.html

Video de fondo: Se incluye un video (pokemon.mp4) que se reproduce automáticamente en bucle para decorar la página.
Encabezado principal: Muestra el título "Inicio de sesión" centrado en la parte superior.
Formulario: Contiene campos para ingresar usuario o correo electrónico y contraseña.
Botón de inicio: Ejecuta un script que muestra un mensaje de confirmación y redirige al inicio (index.html).

Videos.html

Encabezado visual: Muestra el logo, nombre de la tienda y enlaces para registrarse o iniciar sesión.
Barra de navegación: Incluye enlaces a otras secciones como Inicio, Videos, Juego y About Us.
Contenido principal: Presenta dos tutoriales en video insertados mediante <iframe>, explicando cómo jugar a Pokémon JCC y Pokémon TCG Live.

Game.html

Encabezado (<head>): Carga una hoja de estilos (game.css) junto con scripts de Vue.js y el juego (game.js).
Contenedor principal: Utiliza Vue.js (<div id="app">) para gestionar dinámicamente el contenido del juego.
Selección de modo: El jugador elige entre dos modos ("Classic" y "Master") representados por diferentes entrenadores, con animaciones y estilos interactivos.
Juego principal: Se muestra una silueta de un Pokémon, y el jugador debe adivinar seleccionando entre opciones. El progreso, puntuación y resultados se manejan dinámicamente.
Respuestas y validación: Las opciones de respuesta se destacan como correctas o incorrectas según la selección, y se permite avanzar a la siguiente pregunta.
Pantalla final: Muestra la puntuación total al final y ofrece la opción de reiniciar el juego.

Aboutus.html

Encabezado (<head>): Conecta hojas de estilo (styleaboutus.css) y scripts (script.js).
Barra de navegación: Incluye un logo, título de la tienda, y enlaces a secciones como "Registrarse", "Iniciar sesión" y páginas clave como "Inicio" y "Videos".
Sección "Sobre nosotros": Describe la tienda como un destino para cartas Pokémon y sus servicios de diseño y desarrollo web personalizados para negocios.
Equipo directivo: Presenta a los líderes Alberto Martínez, Lucía Ortiz y Sergio López, acompañados de imágenes representativas.
Pie de página: Incluye enlaces a redes sociales (Facebook, X y Instagram) e información legal sobre términos de privacidad.

Detalless.html

Encabezado (<head>): Incluye un título de página ("Cartas") y vincula un archivo CSS (detalles.css) para los estilos.
Cuerpo del contenido: Muestra un encabezado principal (<h1>) con el título "Detalles de la Carta".
Contiene una tabla vacía (<table id="tabla-cartas">) dentro de un contenedor con clase cuerpo, destinada a mostrar datos dinámicos de las cartas.
Script: Vincula un archivo de JavaScript externo (detalles.js) que probablemente llena dinámicamente la tabla con información de las cartas.

Pago.html

Encabezado (<head>): Incluye un título "Pago" y vincula archivos CSS (pago.css) y JavaScript (pago.js) para los estilos y funcionalidad.
Cuerpo del contenido: La página se estructura dentro de un contenedor (<div class='container'>), que contiene dos secciones principales:
Resumen de la orden: Muestra el título "Order Summary" y una tabla para la información de la orden. Incluye detalles de IVA, costos de entrega y el total de la compra.
Información de tarjeta de crédito: Permite al usuario seleccionar el tipo de tarjeta (Visa, MasterCard, American Express) mediante un menú desplegable. 
Campos para ingresar el número de tarjeta, titular, fecha de vencimiento y código CVC.
Un botón "Checkout" para completar la compra.
Interactividad y Estilos: Los campos de entrada están diseñados con clases CSS personalizadas (input-field) y la funcionalidad de la página de pago se maneja por el archivo JavaScript externo (pago.js). Una imagen de un logo de Visa se incluye junto con los campos de información de la tarjeta.
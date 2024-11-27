// Array de Pokémon
const array = {
    charizard:[
        {imagen: "./imagenes/charizardex.png"},
        {titulo: "Charizard EX"},
        {ps: 330},
        {evolucion: "Charmeleon"},
        {habilidad: "None"},
        {movimiento1: "Ala osada"},
        {movimiento2: "Vortice Explosivo"},
        {movimientogx: "None"},
        {debilidad: "Tipo agua x2"},
        {precio: "35€"}
    ],
    pikachu:[
        {imagen: "./imagenes/pikachuex.png"},
        {titulo: "Pikachu EX"},
        {ps: 190},
        {evolucion: "None"},
        {habilidad: "None"},
        {movimiento1: "Pika Puño"},
        {movimiento2: "Rayo Dinamico"},
        {movimientogx: "None"},
        {debilidad: "Tipo lucha x2"},
        {precio: "1.60€"}
    ],
    eevee:[
        {imagen: "./imagenes/eeveegx.png"},
        {titulo: "Eevee GX"},
        {ps: 160},
        {evolucion: "None"},
        {habilidad: "Ascension ADN"},
        {movimiento1: "Carrera Impulso"},
        {movimiento2: "None"},
        {movimientogx: "Creador de Alegria - GX"},
        {debilidad: "Tipo lucha x2"},
        {precio: "3.80€"}
    ],
    mewtwo:[
        {imagen: "./imagenes/mewtwogx.png"},
        {titulo: "Mewtwo GX"},
        {ps: 190},
        {evolucion: "None"},
        {habilidad: "None"},
        {movimiento1: "Explosion Total"},
        {movimiento2: "Superabsorcion"},
        {movimientogx: "Onda Mental - GX"},
        {debilidad: "Tipo lucha x2"},
        {precio: "50€"}
    ],
    lycanroc:[
        {imagen: "./imagenes/lycanrocgx.png"},
        {titulo: "Lycanroc GX"},
        {ps: 200},
        {evolucion: "Rockruff"},
        {habilidad: "None"},
        {movimiento1: "Triturar"},
        {movimiento2: "Roca Veloz"},
        {movimientogx: "Lycancolmillo - GX"},
        {debilidad: "Tipo planta x2"},
        {precio: "1.61€"}
    ],
    miraidon:[
        {imagen: "./imagenes/miraidonex.png"},
        {titulo: "Miraidon EX"},
        {ps: 220},
        {evolucion: "None"},
        {habilidad: "Unidad Tandem"},
        {movimiento1: "Cohete fotogenico"},
        {movimiento2: "None"},
        {movimientogx: "None"},
        {debilidad: "Tipo lucha x2"},
        {precio: "4.90€"}
    ],
    okidogi:[
        {imagen: "./imagenes/okidogi.png"},
        {titulo: "Okidogi EX"},
        {ps: 250},
        {evolucion: "None"},
        {habilidad: "Musculatura Venenosa"},
        {movimiento1: "Cadena Enloquecida"},
        {movimiento2: "None"},
        {movimientogx: "None"},
        {debilidad: "Tipo lucha x2"},
        {precio: "0.15€"}
    ],
    thundurus:[
        {imagen: "./imagenes/thundurusgx.png"},
        {titulo: "Thundurus GX"},
        {ps: 180},
        {evolucion: "None"},
        {habilidad: "Carga"},
        {movimiento1: "Bola Electrica"},
        {movimiento2: "None"},
        {movimientogx: "Huracan Atronador - GX"},
        {debilidad: "Tipo lucha x2"},
        {precio: "0.90€"}
    ],
    tornadus:[
        {imagen: "./imagenes/tornadusgx.png"},
        {titulo: "Tornadus GX"},
        {ps: 180},
        {evolucion: "None"},
        {habilidad: "None"},
        {movimiento1: "Tornado"},
        {movimiento2: "Furia Salvaje"},
        {movimientogx: "Ciclon Destructivo - GX"},
        {debilidad: "Tipo electrico x2"},
        {precio: "1,76€"}
    ],
    landorus:[
        {imagen: "./imagenes/landorusex.png"},
        {titulo: "Landorus EX"},
        {ps: 180},
        {evolucion: "None"},
        {habilidad: "None"},
        {movimiento1: "Cabeza Martillo"},
        {movimiento2: "Juicio Terrenal"},
        {movimientogx: "None"},
        {debilidad: "Tipo agua x2"},
        {precio: "4€"}
    ],
    reshiram:[
        {imagen: "./imagenes/reshiramgx.png"},
        {titulo: "Reshiram GX"},
        {ps: 180},
        {evolucion: "None"},
        {habilidad: "Nitrocarga"},
        {movimiento1: "Columna Abrasadora"},
        {movimiento2: "None"},
        {movimientogx: "Bermellon - GX"},
        {debilidad: "Tipo agua x2"},
        {precio: "8€"}
    ],
    zekrom:[
        {imagen: "./imagenes/zekromgx.png"},
        {titulo: "Zekrom GX"},
        {ps: 180},
        {evolucion: "None"},
        {habilidad: "Gancho Bala"},
        {movimiento1: "Ataque Fulgor Subito"},
        {movimiento2: "None"},
        {movimientogx: "Furia Fulgor - GX"},
        {debilidad: "Tipo lucha x2"},
        {precio: "4,43€"}
    ],
};

// Obtener el parámetro de la URL
const urlParams = new URLSearchParams(window.location.search);
const pokemonName = urlParams.get("pokemon");

// Verificar si el Pokémon existe en el array
if (pokemonName && array[pokemonName]) {
    const datosPokemon = array[pokemonName];

    // Seleccionamos el cuerpo de la tabla donde se mostrarán los datos
    const tablaCartas = document.querySelector("#tabla-cartas tbody");

    // Obtener los datos del Pokémon
    const imagen = datosPokemon.find(attr => attr.imagen)?.imagen || "";
    const titulo = datosPokemon.find(attr => attr.titulo)?.titulo || "N/A";
    const ps = datosPokemon.find(attr => attr.ps)?.ps || "N/A";
    const evolucion = datosPokemon.find(attr => attr.evolucion)?.evolucion || "N/A";
    const habilidad = datosPokemon.find(attr => attr.habilidad)?.habilidad || "N/A";
    const movimiento1 = datosPokemon.find(attr => attr.movimiento1)?.movimiento1 || "N/A";
    const movimiento2 = datosPokemon.find(attr => attr.movimiento2)?.movimiento2 || "N/A";
    const movimientogx = datosPokemon.find(attr => attr.movimientogx)?.movimientogx || "N/A";
    const debilidad = datosPokemon.find(attr => attr.debilidad)?.debilidad || "N/A";

    // Crear filas con la estructura solicitada
    const filaTitulo = `
        <tr>
            <td rowspan="8" style="width: 200px; text-align: center;">
                <img src="${imagen}" alt="${titulo}" style="width:300px; height:auto;">
            </td>
            <td><strong>Título</strong></td>
            <td>${titulo}</td>
        </tr>
    `;
    const filaPs = `
        <tr>
            <td><strong>PS</strong></td>
            <td>${ps}</td>
        </tr>
    `;
    const filaEvolucion = `
        <tr>
            <td><strong>Evolución</strong></td>
            <td>${evolucion}</td>
        </tr>
    `;
    const filaHabilidad = `
        <tr>
            <td><strong>Habilidad</strong></td>
            <td>${habilidad}</td>
        </tr>
    `;
    const filaMovimiento1 = `
        <tr>
            <td><strong>Movimiento 1</strong></td>
            <td>${movimiento1}</td>
        </tr>
    `;
    const filaMovimiento2 = `
        <tr>
            <td><strong>Movimiento 2</strong></td>
            <td>${movimiento2}</td>
        </tr>
    `;
    const filaMovimientoGx = `
        <tr>
            <td><strong>Movimiento GX</strong></td>
            <td>${movimientogx}</td>
        </tr>
    `;
    const filaDebilidad = `
        <tr>
            <td><strong>Debilidad</strong></td>
            <td>${debilidad}</td>
        </tr>
    `;

    // Añadir las filas al cuerpo de la tabla
    tablaCartas.innerHTML += 
        filaTitulo + 
        filaPs + 
        filaEvolucion + 
        filaHabilidad + 
        filaMovimiento1 + 
        filaMovimiento2 + 
        filaMovimientoGx + 
        filaDebilidad;
} else {
    console.error("El Pokémon no se encuentra en el array o no se ha especificado en la URL.");
}


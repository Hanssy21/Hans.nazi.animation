const button8 = document.getElementById("button8");
const animation = document.getElementById("animation");
const points = document.getElementById("points");


/*
==================================================
FIGURA EXACTA
==================================================

19 COLUMNAS
13 FILAS

R = ROJO
W = BLANCO
B = NEGRO

Cada fila tiene EXACTAMENTE 19 posiciones.
==================================================
*/

const pattern = [

    "RRRRRRRRRRRRRRRRRRR",

    "RRRRRRRWWWWWRRRRRRR",

    "RRRRRWWWWBWWWWRRRRR",

    "RRRRRWWWBWWWWWRRRRR",

    "RRRRWWWBWWWWBWWWRRR",

    "RRRRWWWWBWBWBWWRRRR",

    "RRRRWWBWWWBWWWBWRRR",

    "RRRRWWWBWBWBWWWWRRR",

    "RRRRWWWWBWWBWWWRRR",

    "RRRRRWWWWWBWWWRRRR",

    "RRRRRWWWWBWWWWRRRR",

    "RRRRRRRWWWWWRRRRRRR",

    "RRRRRRRRRRRRRRRRRRR"

];


/*
==================================================
COMPROBAR MATRIZ
==================================================
*/

pattern.forEach((row, index) => {

    if (row.length !== 19) {

        console.error(
            `ERROR: fila ${index + 1} tiene ${row.length} columnas`
        );

    }

});


/*
==================================================
CREAR LOS 247 PUNTOS
==================================================
*/

function createPoints() {

    points.innerHTML = "";

    const centerX = 9;
    const centerY = 6;

    pattern.forEach((row, y) => {

        [...row].forEach((color, x) => {

            const point =
                document.createElement("div");


            point.classList.add("point");


            /*
            COLOR
            */

            if (color === "R") {

                point.classList.add("red");

            }

            else if (color === "W") {

                point.classList.add("white");

            }

            else if (color === "B") {

                point.classList.add("black");

            }


            /*
            ======================================
            DIRECCIÓN DESDE DONDE LLEGA
            ======================================
            */

            let dx = x - centerX;
            let dy = y - centerY;


            const distance = Math.sqrt(
                dx * dx +
                dy * dy
            );


            if (distance > 0) {

                dx =
                    (dx / distance) * 220;

                dy =
                    (dy / distance) * 220;

            }
            else {

                dx =
                    (Math.random() - .5) * 400;

                dy =
                    (Math.random() - .5) * 400;

            }


            /*
            Pequeña variación para
            que no entren todos igual
            */

            dx +=
                (Math.random() - .5) * 100;

            dy +=
                (Math.random() - .5) * 100;


            /*
            GUARDAR POSICIÓN INICIAL
            */

            point.style.setProperty(
                "--start-x",
                `${dx}px`
            );

            point.style.setProperty(
                "--start-y",
                `${dy}px`
            );


            /*
            DELAY ALEATORIO
            */

            const delay =
                Math.random() * 1.2;

            point.style.setProperty(
                "--delay",
                `${delay}s`
            );


            points.appendChild(point);

        });

    });

}


/*
==================================================
ABRIR / CERRAR
==================================================
*/

function toggleAnimation() {

    animation.classList.toggle("active");

}


/*
==================================================
BOTÓN
==================================================
*/

button8.addEventListener(
    "click",
    toggleAnimation
);


/*
==================================================
TECLA 8
==================================================
*/

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "8" ||
            event.code === "Numpad8"
        ) {

            if (!event.repeat) {

                toggleAnimation();

            }

        }

    }
);


/*
==================================================
INICIAR
==================================================
*/

createPoints();
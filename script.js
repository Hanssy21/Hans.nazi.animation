const button8 = document.getElementById("button8");
const animation = document.getElementById("animation");
const points = document.getElementById("points");

/*
==================================================
MATRIZ 19 x 13
==================================================

R = rojo
W = blanco
B = negro
*/

const pattern = [
    "RRRRRRRRRRRRRRRRRRR",
    "RRRRRRRWWWWWRRRRRRR",
    "RRRRRWWWWBWWWWRRRRR",
    "RRRRRWWWBWWWWWRRRRR",
    "RRRRWWWBWWWWBWWWRRR",
    "RRRRWWWWBWBWBWWRRRR",
    "RRRRWBWWWBWWWBWRRRR",
    "RRRRWWBWBWBWWWWRRRR",
    "RRRRWWWBWWBWWWRRRR",
    "RRRRRWWWWWBWWWRRRR",
    "RRRRRWWWWBWWWWRRRR",
    "RRRRRRRWWWWWRRRRRRR",
    "RRRRRRRRRRRRRRRRRRR"
];


/*
==================================================
COMPROBAR QUE TODAS LAS FILAS TENGAN 19 PUNTOS
==================================================
*/

pattern.forEach((row, i) => {
    if (row.length !== 19) {
        console.error(
            `Fila ${i + 1}: tiene ${row.length} puntos`
        );
    }
});


/*
==================================================
CREAR LOS PUNTOS
==================================================
*/

function createPoints() {

    points.innerHTML = "";

    const centerX = 9;
    const centerY = 6;

    pattern.forEach((row, y) => {

        [...row].forEach((color, x) => {

            const point = document.createElement("div");

            point.classList.add("point");

            if (color === "R") {
                point.classList.add("red");
            }

            if (color === "W") {
                point.classList.add("white");
            }

            if (color === "B") {
                point.classList.add("black");
            }


            /*
            ------------------------------------------
            POSICIÓN DESDE LA QUE LLEGA EL PUNTO
            ------------------------------------------
            */

            let dx = x - centerX;
            let dy = y - centerY;

            const distance = Math.sqrt(
                dx * dx + dy * dy
            );

            if (distance > 0) {

                dx = (dx / distance) * 250;
                dy = (dy / distance) * 250;

            } else {

                dx = 0;
                dy = 250;

            }

            /*
            Pequeña variación
            */

            dx += (Math.random() - 0.5) * 60;
            dy += (Math.random() - 0.5) * 60;

            point.style.setProperty(
                "--start-x",
                `${dx}px`
            );

            point.style.setProperty(
                "--start-y",
                `${dy}px`
            );


            /*
            Cada punto entra ligeramente
            después que otro.
            */

            point.style.setProperty(
                "--delay",
                `${Math.random() * 0.7}s`
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
BOTÓN 8
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
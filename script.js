const button8 =
    document.getElementById("button8");

const animation =
    document.getElementById("animation");

const points =
    document.getElementById("points");


/*
================================================
FIGURA NEUTRAL 19 x 13

R = rojo
W = blanco
B = negro
. = espacio
================================================
*/

const pattern = [
    "RRRRRRRRRRRRRRRRRRR",
    "RRRRRRWWWWWWRRRRRRR",
    "RRRRWWWWBWWWWRRRRRR",
    "RRRWWWBBWBWWW RRRRR".replace(/ /g, ""),
    "RRRWWBWWWBWWBRRRRRR",
    "RRRWWWWBWBWWWRRRRRR",
    "RRRWWWBWWWBWWWRRRRR",
    "RRRWWWWBWBWWWRRRRR",
    "RRRWWBWWWBWWBRRRRRR",
    "RRRWWWBBWBWWWRRRRRR",
    "RRRRWWWWBWWWWRRRRRR",
    "RRRRRRWWWWWWRRRRRRR",
    "RRRRRRRRRRRRRRRRRRR"
];


/*
================================================
CREAR PUNTOS
================================================
*/

function createPoints() {

    points.innerHTML = "";

    const centerX = 9;
    const centerY = 6;

    pattern.forEach((row, y) => {

        [...row].forEach((color, x) => {

            if (color === ".") {
                return;
            }

            const point =
                document.createElement("div");

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
            Dirección desde donde
            llegará cada punto.
            */

            let dx = x - centerX;
            let dy = y - centerY;

            const distance =
                Math.sqrt(
                    dx * dx +
                    dy * dy
                );


            if (distance > 0) {

                dx =
                    (dx / distance) * 250;

                dy =
                    (dy / distance) * 250;

            } else {

                dx = 0;
                dy = 250;
            }


            /*
            Variación para que
            la entrada sea más orgánica.
            */

            dx +=
                (Math.random() - .5) * 60;

            dy +=
                (Math.random() - .5) * 60;


            point.style.setProperty(
                "--start-x",
                `${dx}px`
            );

            point.style.setProperty(
                "--start-y",
                `${dy}px`
            );


            point.style.setProperty(
                "--delay",
                `${Math.random() * .7}s`
            );


            points.appendChild(point);
        });
    });
}


/*
================================================
ACTIVAR / DESACTIVAR
================================================
*/

function toggleAnimation() {

    animation.classList.toggle("active");
}


/*
================================================
BOTÓN
================================================
*/

button8.addEventListener(
    "click",
    toggleAnimation
);


/*
================================================
TECLA 8
================================================
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
================================================
INICIAR
================================================
*/

createPoints();
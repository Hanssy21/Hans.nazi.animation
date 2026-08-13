const button8 =
    document.getElementById("button8");

const animation =
    document.getElementById("animation");

const points =
    document.getElementById("points");


// ============================================
// MATRIZ DEL SÍMBOLO
// ============================================
//
// R = 🔴
// W = ⚪
// B = ⚫
//
// 19 columnas x 11 filas
//

const pattern = [

    "RRRRRRRRRRRRRRRRRRR",

    "RRRRRWWWWWWWRRRRRRR",

    "RRRRWWWWWWWWWRRRRRR",

    "RRRRWWBWWBWWWRRRRRR",

    "RRRRWWWWBWWWWRRRRRR",

    "RRRRWWBWBWBWWRRRRRR",

    "RRRRWWWWBWWWWRRRRRR",

    "RRRRWWBWWBWWWRRRRRR",

    "RRRRWWWWWWWWWRRRRRR",

    "RRRRRWWWWWWWRRRRRRR",

    "RRRRRRRRRRRRRRRRRRR"

];


// ============================================
// CREAR PUNTOS
// ============================================

function createPoints() {

    points.innerHTML = "";


    pattern.forEach((row, y) => {

        [...row].forEach((color, x) => {

            const point =
                document.createElement("div");


            point.classList.add(
                "point"
            );


            // ================================
            // COLOR
            // ================================

            if (color === "R") {

                point.classList.add(
                    "red"
                );

            }

            else if (color === "W") {

                point.classList.add(
                    "white"
                );

            }

            else if (color === "B") {

                point.classList.add(
                    "black"
                );

            }


            // ================================
            // DIRECCIÓN DE EXPLOSIÓN
            // ================================

            const centerX = 9;
            const centerY = 5;


            let dx = x - centerX;
            let dy = y - centerY;


            // Normalizar dirección

            const distance =
                Math.sqrt(
                    dx * dx +
                    dy * dy
                );


            if (distance > 0) {

                dx =
                    (dx / distance) *
                    150;

                dy =
                    (dy / distance) *
                    150;

            }


            // Un poco de aleatoriedad

            dx +=
                (Math.random() - .5) * 70;

            dy +=
                (Math.random() - .5) * 70;


            point.style.setProperty(
                "--x",
                `${dx}px`
            );


            point.style.setProperty(
                "--y",
                `${dy}px`
            );


            // Cada punto empieza en
            // un momento ligeramente distinto

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


// ============================================
// ABRIR / CERRAR
// ============================================

function toggleAnimation() {

    if (
        animation.classList.contains(
            "active"
        )
    ) {

        animation.classList.remove(
            "active"
        );

    }

    else {

        animation.classList.add(
            "active"
        );

    }

}


// ============================================
// BOTÓN 8
// ============================================

button8.addEventListener(
    "click",
    toggleAnimation
);


// ============================================
// TECLADO
// ============================================

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


// ============================================
// CREAR AL CARGAR
// ============================================

createPoints();
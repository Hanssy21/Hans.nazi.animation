const button8 = document.getElementById("button8");
const animationContainer = document.getElementById("animationContainer");
const pixelArt = document.getElementById("pixelArt");


// ========================================
// TU DIBUJO
// ========================================
//
// R = 🔴 rojo
// W = ⚪ blanco
// B = ⚫ negro
//
// 13 columnas x 15 filas
//

const pattern = [
    "RRRWWW BWWWRRR".replace(/ /g, ""),
    "RRRWWW BBBWWWRR".replace(/ /g, ""),
    "RWWWBBBBBWWWWR",
    "WWWBBBBBWWWBWW",
    "WWBBBWWWBBBBWW",
    "WWWBBBWBWBBBBW",
    "BWWWBBBBBWB BBB".replace(/ /g, ""),
    "BBWWWBBBWWWBBB",
    "BBBWB BBBBWWWBB".replace(/ /g, ""),
    "WBBBBBBWBWWWBB",
    "WWBBBWWWBBBWWW",
    "WWWBWWWBBBWWW",
    "RWWWWW BBBWWWR".replace(/ /g, ""),
    "RRWWW BBBWWWRR".replace(/ /g, ""),
    "RRRWWW BWWWRRR".replace(/ /g, "")
];


// ========================================
// CORREGIR EL DIBUJO
// ========================================

const cleanPattern = pattern.map(row => {

    // Elimina espacios
    row = row.replace(/\s/g, "");

    // Si por alguna razón tiene más de 13,
    // nos quedamos con las primeras 13
    return row.substring(0, 13);
});


// ========================================
// CREAR PIXEL ART
// ========================================

function createPixelArt() {

    pixelArt.innerHTML = "";

    cleanPattern.forEach(row => {

        for (let i = 0; i < 13; i++) {

            const pixel = document.createElement("div");

            pixel.classList.add("pixel");

            const color = row[i];

            if (color === "R") {
                pixel.classList.add("red");
            }

            else if (color === "W") {
                pixel.classList.add("white");
            }

            else if (color === "B") {
                pixel.classList.add("black");
            }

            pixelArt.appendChild(pixel);
        }
    });
}


// ========================================
// ABRIR / CERRAR ANIMACIÓN
// ========================================

function toggleAnimation() {

    if (animationContainer.classList.contains("active")) {

        // Cerrar
        animationContainer.classList.remove("active");

    } else {

        // Abrir
        animationContainer.classList.add("active");
    }
}


// ========================================
// BOTÓN 8
// ========================================

button8.addEventListener("click", () => {
    toggleAnimation();
});


// ========================================
// TECLA 8
// ========================================

document.addEventListener("keydown", (event) => {

    if (
        event.key === "8" ||
        event.code === "Numpad8"
    ) {

        // Evita que se repita si mantienes
        // la tecla presionada
        if (!event.repeat) {
            toggleAnimation();
        }
    }
});


// ========================================
// CREAR DIBUJO AL INICIAR
// ========================================

createPixelArt();
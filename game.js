<script></script>
// Récupérer le canvas et son contexte
var canvas = document.createElement("canvas");
canvas.width = 800;
canvas.height = 600;
document.body.appendChild(canvas);
var ctx = canvas.getContext("2d");

// Position initiale du carré
var x = 100;
var y = 50;
var squareSize = 30;

// Fonction de rendu
function drawSquare() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Efface le canvas
    ctx.fillStyle = "#ff0000";
    ctx.fillRect(x, y, squareSize, squareSize); // Dessine le carré
}

// Fonction de mise à jour
function update() {
    moveSquare(); // Déplace le carré
}

// Fonction principale du jeu
function gameLoop() {
    update(); // Met à jour la logique du jeu
    drawSquare(); // Rendu du carré

    requestAnimationFrame(gameLoop); // Appelle la fonction de boucle de jeu récursivement
}

// Déplacer le carré en diagonale
function moveSquare() {
    x += 1;
    y += 1;
}

// Lancer la boucle de jeu
gameLoop();

// Gestionnaire d'événements pour les touches de direction
let x = 0;
let y = 0;

window.addEventListener("keydown", function (event) {
    switch (event.key) {
        case "ArrowUp":
            case"z" :
            y -= 5;
            break;
        case "ArrowDown":
            case "s" :
            y += 5;
            break;
        case "ArrowLeft":
            case  "q":
            x -= 5;
            break;
        case "ArrowRight":
            case  "d":
            x += 5;
            break;
    }
});

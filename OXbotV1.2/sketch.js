
var board;
var ai;
var cellWidth;
var cellHeight;
var AIPlayer = 1;
var humanPlayer = -1;
var player = [1, -1][Math.round(Math.random())];
var gameOver = false;

function setup() {
    createCanvas(800, 600);
    board = new Board();
    ai = new AI();
    cellWidth = width/3;
    cellHeight = height/3;
    board.build();
    board.sketch();
    updateGameStatus();
    if (player == 1) {
        ai.play();
    }
}

function draw() {
}

function gameReset() {
    board.build();
    player = [1, -1][Math.round(Math.random())];
    board.sketch();
    gameOver = false;
    updateGameStatus();
    if (player == 1) {
        ai.play();
    }
}

function mousePressed() {
    if (gameOver == false) {
        if (player == -1) {
            if (mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height) {
                var x = Math.ceil(mouseX/cellWidth) -1;
                var y = Math.ceil(mouseY/cellHeight) -1;
                if (board.state[3*y+x] == 0) {
                    board.play(3*y+x, player);
                    player = 1;
                    updateGameStatus();
                    board.sketch();
                    ai.play();
                }
            }
        }
    }
}

function updateGameStatus() {
    var victory = board.checkVictory()
    if (victory == 1){
        document.getElementById("gameStatusIndicator").innerHTML = "AI victory!";
        gameOver = true;
    } else if (victory == -1) {
        document.getElementById("gameStatusIndicator").innerHTML = "Human victory!";
        gameOver = true;
    } else if (victory == 0) {
        document.getElementById("gameStatusIndicator").innerHTML = "Game draw!";
        gameOver = true;
    }
    
    else if (player == 1) {
        document.getElementById("gameStatusIndicator").innerHTML = "AI's turn.";
    } else if (player == -1) {
        document.getElementById("gameStatusIndicator").innerHTML = "Human's turn.";
    }
}



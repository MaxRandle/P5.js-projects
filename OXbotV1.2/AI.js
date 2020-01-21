function AI() {
    this.recursionCounter = 0;
    
    //calls board.play();
    this.play = function() {

        // //code for random move
        // if (gameOver == false) {
        //     while (true) {
        //         var kuk = Math.floor(Math.random()*9);
        //         if (board.state[kuk] == 0) {
        //             board.play(kuk, 1);
        //             playerTurn = -1;
        //             updateGameStatus();
        //             console.log("AI PLAYED");
        //             return;
        //         }
        //     } 
        // }

        console.log("AI THINKING");
        this.recursionCounter = 0;
        board.play(this.getBestMove(player).i, 1);
        console.log("Board states analysed:", this.recursionCounter);
        player = -1;
        board.sketch();
        updateGameStatus();
        console.log("AI DONE");
    }

    this.getBestMove = function(p) {
        this.recursionCounter += 1;


        var v = board.checkVictory();
        var m = new AIMove();
        if (v == 1) {
            m.score = 1;
            return m;
        } else if (v == -1) {
            m.score = -1;
            return m;
        } else if (v == 0) {
            m.score = 0;
            return m;
        }

        //do the recursion and build moves array.
        var moves = [];
        for (var i = 0; i < 9; i++) {
            if (board.state[i] == 0) {
                var move = new AIMove();
                move.i = i;
                board.play(move.i, p);
                if (p == 1) {
                    move.score = this.getBestMove(-1).score;
                } else {
                    move.score = this.getBestMove(1).score;
                }
                moves.push(move);
                board.play(move.i, 0);
            }
        }

        //pick the best move for the current player
        var bestMove = 0;
        if (p == 1) {
            var bestScore = -5;
            for (var j = 0; j < moves.length; j++) {
                if (moves[j].score > bestScore) {
                    bestMove = j;
                    bestScore = moves[j].score;
                }
            }
            for (var k = moves.length-1; k >= 0; k--) {
                if (moves[k].score < bestScore) {
                    moves.splice(k, 1);
                }
            }
        } else {
            var bestScore = 5;
            for (var j = 0; j < moves.length; j++) {
                if (moves[j].score < bestScore) {
                    bestMove = j;
                    bestScore = moves[j].score;
                }
            }
            for (var k = moves.length-1; k >= 0; k--) {
                if (moves[k].score > bestScore) {
                    moves.splice(k, 1);
                }
            }
        }
        //return a random equal-best move
        return moves[Math.floor(Math.random()*moves.length)];
    }
}
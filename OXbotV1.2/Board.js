function Board() {
    this.state;

    this.build = function() {
        this.state = [];
        for (var i = 0; i < 9; i++) {
            this.state.push(0);
        }
        
    }

    this.play = function(i, v) {
        this.state[i] = v;
    }

    //checks all lines on the board for a victory.
    //returns 1 if AI win, -1 if human win, 0 if draw, else returns nothing
    this.checkVictory = function() {
        var lines = [];
        lines.push(board.state[0] + board.state[1] + board.state[2]);
        lines.push(board.state[3] + board.state[4] + board.state[5]);
        lines.push(board.state[6] + board.state[7] + board.state[8]);
        lines.push(board.state[0] + board.state[3] + board.state[6]);
        lines.push(board.state[1] + board.state[4] + board.state[7]);
        lines.push(board.state[2] + board.state[5] + board.state[8]);
        lines.push(board.state[0] + board.state[4] + board.state[8]);
        lines.push(board.state[6] + board.state[4] + board.state[2]);
        for (var i = 0; i < 8; i++) {
            if (lines[i] == 3) {
                return 1;
            }
            else if (lines[i] == -3) {
                return -1;
            }
        }
        for (var i = 0; i < 9; i++) {
            if (board.state[i] == 0) {
                return;
            }
        }
        return 0;
    }
    
    //graphically represents the current board state.
    this.sketch = function() {
        for (var y = 0; y < 3; y++) {
            for (var x = 0; x < 3; x++) {
                strokeWeight(4);
                stroke(255)
                fill(50);
                rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
                if (this.state[3*y+x] == 1) {
                    //naught
                    strokeWeight(32);
                    stroke(color(255, 255, 255));
                    noFill();
                    ellipse(x*cellWidth+cellWidth/2, y*cellHeight+cellHeight/2, cellHeight*0.7);
                }
                if (this.state[3*y+x] == -1) {
                    //cross
                    strokeWeight(32);
                    stroke(color(255, 0, 0));
                    line(x*cellWidth+cellWidth*0.75, y*cellHeight+cellHeight*0.75, x*cellWidth+cellWidth*0.25, y*cellHeight+cellHeight*0.25);
                    line(x*cellWidth+cellWidth*0.25, y*cellHeight+cellHeight*0.75, x*cellWidth+cellWidth*0.75, y*cellHeight+cellHeight*0.25);
                }
            }            
        }
    }







}
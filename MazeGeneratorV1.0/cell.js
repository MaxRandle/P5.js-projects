//Cell object constructor
function Cell(i, j) {
    this.i = i;
    this.j = j;
    //               top   right bot   left
    this.walls =    [true, true, true, true];
    this.visited = false;

    this.checkNeighbours = function() {
        var neighbours = [];

        //gets the neighbouring cells if they exist on the grid
        var top = grid[index(i, j-1)];
        var right = grid[index(i+1, j)];
        var bottom = grid[index(i, j+1)];
        var left = grid[index(i-1, j)];

        //if the cell exists and is unvisited
        if (top && top.visited == false) {
            //then add it to neighbours
            neighbours.push(top);
        }
        if (right && right.visited == false) {
            neighbours.push(right);
        }
        if (bottom && bottom.visited == false) {
            neighbours.push(bottom);
        }
        if (left && left.visited == false) {
            neighbours.push(left);
        }

        // if there are neighbours pick one at random
        if (neighbours.length > 0) {
            var r = floor(random(0, neighbours.length));
            return neighbours[r];
        } else {
            return undefined;
        }
    }

    //makes the current cell red
    this.highlight = function() {
        var x = this.i*w;
        var y = this.j*w;
        noStroke();
        fill(255, 0, 0, 255);
        rect(x, y, w, w);
    }

    this.show = function() {
        //gets x/y location of cell
        var x = this.i*w;
        var y = this.j*w;

        //draws all 4 walls as individual lines
        stroke(255);
        if (this.walls[0] == true) {
            //   start x,y  end x,y
            line(x, y,      x+w, y); //topleft to topright (top)
        }
        if (this.walls[1] == true) {
            line(x+w, y,    x+w, y+w); //topright to botright (right)
        }
        if (this.walls[2] == true) {
            line(x+w, y+w,  x, y+w); //botright to botleft (bot)
        }
        if (this.walls[3] == true) {
            line(x, y+w,    x, y); //botleft to topleft (left)
        }

        //colour cell if visited
        if (this.visited == true) {
            noStroke();
            fill(0, 0, 0, 255);
            rect(x+1, y+1, w-1, w-1);
        }
    }
}
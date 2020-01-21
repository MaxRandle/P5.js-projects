var cols, rows;
var w = 40; //cell size
var grid = [];
var current;

var stack = [];

function setup() {
    createCanvas(800, 600);
    frameRate(5);
    //calculates the number of rows/cols
    cols = floor(width/w);
    rows = floor(height/w);
    console.log(cols, rows);

    //instantiates the grid with all cells
    for (var j = 0; j < rows; j++) {
        for (var i = 0; i < cols; i++) {
            var cell = new Cell(i, j);
            grid.push(cell);
        }
    }

    current = grid [0]; //start at top left cell
}

function draw() {
    background(30);
    //shows every cell
    for (var i = 0; i < grid.length; i++) {
        grid[i].show();
    }

    current.visited = true; //marks current cell as visited
    current.highlight();

    // STEP 1
    var next = current.checkNeighbours();
    //if there are unvisited neighbours
    if (next) { 
        next.visited = true;

        // STEP 2
        stack.push(current);

        // STEP 3
        removeWalls(current, next);

        // STEP 4
        current = next;
    }
    //else no unvisited neighbours,
    else if (stack.length > 0) {
        //go to the previous cell
        current = stack.pop();
    }
}

//gets the index of a cell from its i, j co-ords
function index(i, j) {
    //returns -1 if the cell does not exist on the grid
    if (i < 0 || j < 0 || i > cols-1 || j > rows-1 ) {
        return -1;
    }
    return i + j * cols;
}

//sets the bordering walls to false for both cells
function removeWalls(a, b) {
    var x = a.i - b.i;
    //if neighbour is to the left
    if (x == 1) {
        a.walls[3] = false;
        b.walls[1] = false;
    }
    //if neighbour is to the right
    else if (x == -1) {
        a.walls[1] = false;
        b.walls[3] = false;
    }
    //if neighbour is above
    var y = a.j - b.j;
    if (y == 1) {
        a.walls[0] = false;
        b.walls[2] = false;
    }
    //if neighbour is below
    else if (y == -1) {
        a.walls[2] = false;
        b.walls[0] = false;
    }
}
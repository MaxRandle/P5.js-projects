
var balls = []; // array to hold balls
var shells = []; // array to hold shells

function setup() {
    createCanvas(800, 600);
    
}

function draw() {
    background(51);
    var ls = shells.length;
    for (var i= 0; i < ls; i++) {
        shells[i].move();
        shells[i].show();
        // checks if the shell is at maximum height
        // if it is, calls explode and deletes shell
        if (shells[i].maximumHeight() == true) {
            explode(shells[i].posx, shells[i].posy);
            explode(shells[i].posx, shells[i].posy);
            shells.splice(i, 1); // deletes shells that reach maximum height
            ls -= 1; // compensates for having 1 less item inb the array after deletion
        }
    }
    var lb = balls.length;
    for (var i= 0; i < lb; i++) {
        balls[i].move();
        balls[i].show();
        //deletes balls that hit the ground
        if(balls[i].onGround() == true) {
            balls.splice(i, 1);
            lb -= 1;
        }
    }
}

// returns a colour randomly selected from the array of 6 colours.
function chooseColor() {
    var red = color(255, 0, 0);
    var orange = color(255, 165, 0);
    var yellow = color(255, 255, 0);
    var green = color(0, 255, 0);
    var blue = color(100, 100, 255);
    var purple = color(255, 0, 255);
    var white = color(255, 255, 255);
    var colors = [red, orange, yellow, green, blue, purple, white];

    var i = random()*colors.length-0.00001;
    i = floor(i);

    return colors[i];
}

// spawns a new shell whenever mouse is clicked on the screen.
function mousePressed() {
    var u = calc(height-mouseY);
    shells.push(new Ball(mouseX, height, 0, u, 2, chooseColor()));
}

// calculated the initial vertical velocity required
// to launch a firework to the height of the mouse click
function calc(mouseHeight) {
    //u = (v**2 + 2*a*s)**0.5
    var accel = 0.02;
    var s = mouseHeight;
    var u = (2*accel*s)**0.5;
    return -1*u;

}

//adds the fireballs whenever a shell explodes.
function explode(posx, posy) {
    var n = ceil(random()*40 + 10);
    var c = chooseColor();
    for (i = 0; i < n; i++) {
        balls.push(new Ball(posx, posy, random()*2-1, random()*2-1, 4, c));
        }
    console.log(balls);
}
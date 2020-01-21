var stars = [];

function setup() {
    createCanvas(800, 600);
    for (i=0; i<100; i++) {
        stars.push(new Star())
    }

}

function draw() {
    background(0);

    for (i=0; i<stars.length; i++) {
        stars[i].move();
        stars[i].draw();
        
        if (stars[i].reset() == true) {
            stars.splice(i, 1);
            stars.push(new Star());
        }
    }
}
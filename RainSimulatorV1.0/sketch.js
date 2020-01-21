var drops = [];
//var meter;
var wind = 0;

function setup() {
    createCanvas(800, 600);
    //meter = new WindMeter();
    for (i = 0; i < 700 ; i++) {
        drops.push(new Drop());
    }
}

//loop where everything happens
function draw() {
    background(200, 200, 200);
    //displays drops
    for (i = 0; i < drops.length; i++) {
        drops[i].move();
        drops[i].show();
        if (drops[i].onGround() == true) {
            drops.splice(i, 1);
            drops.push(new Drop());
        }
    }
    //displays wind meter
    //meter.show();

}


function Star() {
    // creates random centric co-orinates, weighted to be more central
    this.x = random(-width/2, width/2)*random();
    this.y = random(-height/2, height/2)*random();
    //this.z = 0.985;
    this.z = 1;

    this.colors = [
        color(255, 0, 0),
        color(255, 128, 0),
        color(255, 255, 0),
        color(255, 255, 255),
        color(153, 204, 255)
        ];

    this.c = this.colors[Math.floor(Math.random()*this.colors.length)];


    // moves the star
    this.move = function() {
        this.z += 0.001;
        this.x = this.x * this.z;
        this.y = this.y * this.z;
    }

    // draws the star as a white ellipse
    this.draw = function() {
        noStroke();
        fill(this.c);
        var r = (this.z-1)*50
        ellipse(this.x + width/2, this.y + height/2, r, r);
    }

    // checks if the star has gone outside the bounds of the screen
    this.reset = function() {
        if ((this.x + width/2 > width) || (this.x + width/2 < 0) || (this.y + height/2 > height) || (this.y+ height/2 < 0)) {
            return true;
        }
        else {
            return false;
        }
    }



}
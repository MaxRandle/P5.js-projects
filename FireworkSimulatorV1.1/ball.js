function Ball(posx, posy, velx, vely, r, c) {

    this.posx = posx; //x position
    this.posy = posy; //y position
    this.velx = velx; //x velocity
    this.vely = vely; //y velocity
    this.r = r; //radius
    this.c = c; //colour
    this.accel = 0.02; //acceleration

    this.move = function() {
        this.posx += this.velx;
        this.posy += this.vely;
        this.vely += this.accel;
    }

    this.show = function() {
        noStroke();
        fill(this.c);
        ellipse(this.posx, this.posy, this.r, this.r);
    }

    this.onGround = function() {
        if (this.posy > height) { return true; }
        else { return false; }
    }

    this.maximumHeight = function() {
        if (this.vely >= 0) {console.log("boom"); return true; }
        else { return false; }
        
    }

}
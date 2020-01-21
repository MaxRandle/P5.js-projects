function Drop() {

    //sets default value of wind to 0 if none was given
    /*
    if (wind) {
        this.wind = w;
    } else {
        this.wind = 0;
    }*/

    //generates a weighted random so that z favours small values
    this.z = ((random()**5)*19.3)+0.7;
    //this.z = random()*19.3 + 0.7;

    this.posx =  random(width);
    this.posy = -80;
    this.velx = (random()-0.5)*0.3*this.z;
    this.vely = 4*this.z;
    this.sizex = 0.5*this.z;
    this.sizey = 6*this.z;
    //this.wind = wind*this.z;
    this.wind = 0;
    
    this.move = function() {
        this.posy += this.vely;
        this.posx += this.velx + this.wind;
        if (this.posx < 0) {
            this.posx = width;
        }
        if (this.posx > width) {
            this.posx = 0;
        }
    }

    this.show = function() {
        noStroke();
        fill(120, 120, 255);
        rect(this.posx, this.posy, this.sizex, this.sizey);
        //ellipse(this.posx , this.posy, this.sizex, this.sizey);
    }

    //checks is the drop is on the ground
    this.onGround = function() {
        if (this.posy >= height) {
            return true;
        }
        else {
            return false;
        }
    }

}
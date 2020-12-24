class Box {
    constructor(x,y,width,height){

        var boxop = {
            restitution : 0.8,
            friction : 1,
            density: 0.05

        }

        this.body = Bodies.rectangle(x,y,width,height,boxop);
        this.width = width;
        this.height = height;
        this.image = loadImage("wood1.png");
        this.visiblity = 255;
        World.add(myworld,this.body);
        
    }


    display(){
        var pos= this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
       rectMode(CENTER);
       strokeWeight(3.5);
       stroke("white");
       fill("red");
       this.visiblity = this.visiblity - 1;
       tint(255,this.visiblity)
       image(this.image,0,0,this.width,this.height);
       //rect(0,0,this.width,this.height);
        pop();
    }
}
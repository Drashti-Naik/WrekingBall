class Ball {
    constructor(x,y,width,height){

        var ballop = {
            friction : 1,
            density: 1

        }

        this.body = Bodies.rectangle(x,y,width,height,ballop);
        this.width = width;
        this.height = height;

        World.add(myworld,this.body);
        
    }


    display(){
        var pos= this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("brown");
        //ellipseMode(RADIUS);
        ellipse(0,0,this.width,this.height);
        pop();
    }
}
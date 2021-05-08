class Paper{
    constructor(x, y, r){
        this.x = x;
        this.y = y;
        this.r = r;

        var options={
            restitution: 0.3, density: 1.2, friction: 0.5
        }

        this.object = Bodies.circle(x, y, r/2, options);
        World.add(world, this.object);
       
    }

    display(){
    var angle = this.object.angle;
    var pos = this.object.position;
    push();
    translate(pos.x, pos.y);
    fill("purple");
    rotate(angle);
    ellipseMode(RADIUS);
    circle(0, 0, this.r, this.r);
    pop();
    }

   
}
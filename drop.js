class Drop{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.options = {
            'isStatic': false,
            'friction': 1,
            'restitution': 1
        }
        this.body = Bodies.circle(this.x, this.y, 5, this.options);
        this.r = 5;
        World.add(world, this.body);
    }
    update(){
        if(this.body.position.y > height - 50 || this.body.position.x > width){
            Matter.Body.setPosition(this.body, {x: random(0, 1366),y: random(0, 300)})
        }
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill("blue");
        noStroke();
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r, this.r);
        pop();
    }
}
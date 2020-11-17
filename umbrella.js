class Umbrella{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.r = 300;
        this.options = {
            'isStatic': false,
            'friction': 10,
        }
        this.body = Bodies.circle(this.x, this.y, this.r / 2);
        this.image = loadImage("walking_1.png")
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        rotate(angle);
        imageMode(CENTER);
        image(this.image, this.x - 25, this.y - 10, this.r + 60, this.r + 75);
        pop();
    }
}
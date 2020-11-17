const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var body, drop, ground;
var maxdrops = 500;
var drops = [];
var thunderSprite, thun1, thun2, thun3, thun4;

function preload(){
    thun1 = loadImage("1.png");
    thun2 = loadImage("2.png");
    thun3 = loadImage("3.png");
    thun4 = loadImage("4.png");
}

function setup(){
    var canvas = createCanvas(windowWidth, windowHeight);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(width / 2, height - 10, width, 20, "white");
    body = new Umbrella(width / 2, height / 2 + 150)
    for(var i = 0;i <= maxdrops; i++){
        drops.push(new Drop(random(0, 1366),random(0, 300)))
    }
    console.log("w" + width)
    console.log("h" + height)
}

function draw(){
    background(0);
    Engine.update(engine);  
    body.display();
    ground.display();
    for (var j = 0; j < drops.length; j++) {
        drops[j].display();
        drops[j].update();
    }
    drawSprites();
    
    if(frameCount % 100 === 0){
        thunder();
        thunderSprite.visible = true;
    }else if(frameCount % 110 === 0){
        thunderSprite.visible = false;
    }
}   
function thunder(){
    thunderSprite = createSprite(width / 2, 100, 50, 50);
    var rand = Math.round(random(1,4));
    switch(rand) {
      case 1: thunderSprite.addImage(thun1);
              break;
      case 2: thunderSprite.addImage(thun2);
              break;
      case 3: thunderSprite.addImage(thun3);
              break;
      case 4: thunderSprite.addImage(thun4);
              break;
      default: break;
}
thunderSprite.scale = 0.5;
}

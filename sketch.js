const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var canvas, angle, tower, ground,cannon;
//var wallPaper;
var backgroundImg;
var ball;
var boat = [];


function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");
  
}

function setup() {
  canvas = createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  tower = new Tower(150, 350, 160, 310);
  ground = new Ground(0,height-1,width*2,1);
  cannon = new Cannon(180,110,100,50,angle);
  ball = new Ball (cannon.x,cannon.y)
  angle = -PI/4
  boat = new Boat (width,height,height - 100, 200, 200, -100)
}

function draw() {
  
  background(189);
  
 image(backgroundImg,0,0,width,height)

  

  Engine.update(engine);

  ground.display();
  tower.display();
  cannon.display();
  ball.display();
  boat.display();

  
 // drawSprites();
  text(mouseX+","+mouseY,mouseX,mouseY) 
 
}

function keyPressed()
{
if(keyCode == DOWN_ARROW)
{
  ball.shoot();
}
}






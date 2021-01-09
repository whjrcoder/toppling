const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var myengine,myworld;
var ground,box1;

function setup() {
  createCanvas(400,400);
  myengine=Engine.create();
  myworld=myengine.world;
  
  
box1= new Box(200,240,50,50);
box2=new Box(220,200,50,70)
ground=new Ground(200,380,400,10);

}

function draw() {
  background(0);  
  Engine.update(myengine);
 ground.display();
 box1.display();
 box2.display();
}
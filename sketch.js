
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var dustbinObj;
var paper;
var launcher;

function preload()
{
 
 dustbinObj = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);
	


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    paper = new Paper();

	ground = new Ground();

    leftSide = new Dustbin(550,620,20,100);
	bottom = new Dustbin(610,660,100,20);
	rightSide = new Dustbin(670,620,20,100);
	launcher = new Launcher(paper.body,{x:200, y:100});
    
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  

  launcher.display();
  ground.display();
  paper.display();
  leftSide.display();
  bottom.display();
  rightSide.display();
  image(dustbinObj,530,530,200,150)

  Engine.update(engine);

 // drawSprites();
 
}

function mouseReleased()
{
	
	launcher.fly();
 
}


function keyPressed(){
  if(keyCode===32){
      launcher.attach(paper.body);
  }
}

function mouseDragged()
{
	Matter.Body.setPosition(paper.body, {x:mouseX, y:mouseY})
  
}



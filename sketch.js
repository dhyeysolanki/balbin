var dustbin;
var Ground;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
 createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	
	Ground= new Ground(200, 650, 800, 50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  Ground.display();
}




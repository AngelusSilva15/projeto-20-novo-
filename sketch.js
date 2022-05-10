


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
    var plane_options={
		isStatic:true
	}
	plane = Bodies.rectangle(600,580,1200,2,plane_options)
	World.add(world,plane)
var blok1_options = {
	restitution:0.7,
	friction:0.02,
	frictionAir:0
}
var blok2_options = {
	restitution:0.7,
	friction:0.01,
	frictionAir:0.1
}
var blok3_options = {
	restitution:0.01,
	friction:1,
	frictionAir:0.3
}

	
	blok1 = Bodies.circle(220,10,10,blok1_options)
	World.add(world,blok1)
	  blok2 = Bodies.rectangle(110,50,10,10,blok2_options)
	  World.add(world,blok2)
	  blok3 = Bodies.rectangle(350,50,10,10,blok3_options)
	  World.add(world,blok3)
	  
	  fill("brown")
	  rectMode(CENTER);
}


function draw() {
  
  background("green");
  Engine.update(engine);
rect(plane.position.x,plane.position.y,1200)

  ellipse(blok1.position.x,blok1.position.y,30)
  rect(blok2.position.x,blok2.position.y,50,50)
  rect(blok3.position.x,blok3.position.y,100,50)
  
}




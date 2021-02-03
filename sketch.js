
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var polyImg

function preload()
{
	polyImg =  loadImage("polygon.png")
}

function setup() {
	createCanvas(1100, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(550,700,1100,40);
	flyGr1 = new Ground(560,500,200,20)
	flyGr2 = new Ground(870,300,200,20);
	
	b1 = new Box(520,470,20,20);
	b2 = new Box(540,470,20,20);
	b3 = new Box(560,470,20,20);
	b4 = new Box(580,470,20,20);
	b5 = new Box(600,470,20,20);
	b6 = new Box(620,470,20,20);

	m1 = new Box(530,440,20,20);
	m2 = new Box(550,440,20,20);
	m3 = new Box(570,440,20,20);
	m4 = new Box(590,440,20,20);
	m5 = new Box(610,440,20,20);

	b7 = new Box(540,400,20,20);
	b8 = new Box(560,400,20,20);
	b9 = new Box(580,400,20,20);
	b10 = new Box(600,400,20,20);

	b11 = new Box(570,370,40,40);

	v1 = new Box(820,270,20,20);
	v2 = new Box(840,270,20,20);
	v3 = new Box(860,270,20,20);
	v4 = new Box(880,270,20,20);
	v5 = new Box(900,270,20,20);
	v6 = new Box(920,270,20,20);

	c1 = new Box(830,240,20,20);
	c2 = new Box(850,240,20,20);
	c3 = new Box(870,240,20,20);
	c4 = new Box(890,240,20,20);
	c5 = new Box(910,240,20,20);

	v7 = new Box(840,200,20,20);
	v8 = new Box(860,200,20,20);
	v9 = new Box(880,200,20,20);
	v10 = new Box(900,200,20,20);

	v11 = new Box(870,170,40,40);
	
	polygon = new Polygon(250,350,10);
	

	sling = new SlingShot(polygon.body,{x:250,y:350})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(25,23,255);
  
  ground.display();
  flyGr1.display();
  flyGr2.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();

  m1.display();
  m2.display();
  m3.display();
  m4.display();
  m5.display();

  b7.display();
  b8.display();
  b9.display();
  b10.display();

  b11.display();

  v1.display();
  v2.display();
  v3.display();
  v4.display();
  v5.display();
  v6.display();
  v7.display();
  v8.display();
  v9.display();
  v10.display();
  v11.display();

  c1.display();
  c2.display();
  c3.display();
  c4.display();
  c5.display();

  polygon.display();
  sling.display();
  
  drawSprites();
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    sling.fly();
}

function keyPressed(){
    if(keyCode === 32){
      	Matter.Body.setPosition(polygon.body, {x:250, y:350});
    	sling.attach(polygon.body);
	}
}
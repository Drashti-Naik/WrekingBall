const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var myengine, myworld;
var ground;
var ball;
var box,box0,box1,box2,box3,box4,box5;
var box6,box7,box8,box9,box10,box11;
var box12,box13,box14,box15,box16;
var chain;


function setup(){
    canvas = createCanvas(1500,600);
    myengine = Engine.create();
    myworld = myengine.world;

    box = new Box(700,80,80,80);
    box0 = new Box(700,80,80,80);
    box1 = new Box(700,80,80,80);
    box2 = new Box(700,80,80,80);
    box3 = new Box(700,80,80,80);
    box4 = new Box(700,80,80,80);
    box5 = new Box(700,80,80,80);
   
    box6 = new Box(800,80,80,80);
    box7 = new Box(800,80,80,80);
    box8 = new Box(800,80,80,80);
    box9 = new Box(800,80,80,80);
    box10 = new Box(800,80,80,80);
    box11 = new Box(800,80,80,80);

    box12 = new Box(900,80,80,80);
    box13 = new Box(900,80,80,80);
    box14 = new Box(900,80,80,80);
    box15 = new Box(900,80,80,80);
    box16 = new Box(900,80,80,80);

    ball = new Ball(200,200,60,60);
    
    chain = new Chain(ball.body,{x:600,y:50});
  
   ground = new Ground(500,600,1800,20);
   
   
}

function draw(){
    background(0);
    Engine.update(myengine);
    
   box.display();
   box0.display();
   box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();

    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
 
    ball.display();
    chain.display();
    ground.display();
       
}


const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var piedras,metals;
var circulo;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    piedras = new piedra(80,590,150,200);
    metals = new metal(900,590,100,80);
    circulo = new Rubber(600,530,50);
}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    piedras.display();
    metals.display();
    circulo.display();

    
 
}
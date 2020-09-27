var car,wall;
var speed,weight;




function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  speed=random(55,90);
  weight=random(400,1500);
  car=createSprite(50,200,50,50);
  wall=createSprite(2500,200,50,height/2);
  car.velocityX=speed;
}

function draw() {
  background(255,255,255);  
  
colors1();
  drawSprites();
}

function colors1() {
if(wall.x-car.x < (car.width+wall.width)/2)
  {
car.velocityX-0;
vardeformation=0.5 * weight * speed* speed/22509;
if(deformation>180)
{
  car.shapeColor=color("brown");
}

if(deformation<180 && deformation>100)
 {
   car.shapeColor=color("green");
 } 
   
 if(deformation<100)
 {
      car.shapeColor=color("red");
 }
}
}


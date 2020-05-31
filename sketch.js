var car, wall;
var speed, weight; 

function setup() {
  createCanvas(1600,400);

  speed = random(55,90);
  weight = random(400,1500);  

  car = createSprite(50, 200, 30, 30);
  car.velocityX = speed;

  wall = createSprite(1240, 200, 60, 200);
}

function draw() {

  if(wall.x-car.x < car.width/2 + wall.width/2){
    car.velocityX = 0;
    car.x = 1195;

    var deformation = 0.5*weight*speed*speed/22500;
    if(deformation < 180){
      car.shapeColor = color(255,0,0);
    }

    if(deformation < 180 && deformation > 100){
      car.shapeColor = color(230,230,0);
    }

    if(deformation < 100){
      car.shapeColor = color(0,255,0);
    }
  }


  background(0,0,0);  
  
  drawSprites();
}
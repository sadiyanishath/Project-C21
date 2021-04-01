var bullet,wall

var speed,weight,thickness

function setup() {
  createCanvas(1600,400);

  thickness = random(23,83)

wall = createSprite(1400,200,thickness,height/2);
bullet = createSprite(110,200,50,10)
 wall.shapeColor="white"

  speed = random(223,321)
  weight = random(30,52)
  

  bullet.velocityX=speed;
}

function draw() {
  background("black");

 

  

if(hasCollided(bullet,wall)){
bullet.velocityX = 0;
var damage=0.5 * speed * speed/(thickness *thickness *thickness);

if(damage>10){
wall.shapeColor=("red")
}

if(damage<10){
  wall.shapeColor=("green")
}

}

  drawSprites();
}

function hasCollided(lbullet,lwall){
bulletRightEdge=lbullet.x +lbullet.width;
wallLeftEdge=lwall.x;
if (bulletRightEdge>=wallLeftEdge){
  return true
}
return false
}
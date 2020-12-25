var bullet,wall,thickness;
var speed,weight;




function setup() {
  createCanvas(800,400);
  thickness=random(22,83);
 bullet=createSprite(500, 200, 50, 50);
 bullet.shapeColor="black"
 wall=createSprite(680, 200, 30, height/2);
 speed=Math.round(random(55,90));
 weight=Math.round(random(400,1500));

}

function draw() {
bullet.velocityX=speed;


if(istouching(bullet,wall))
{
  bullet.velocityX=0;
  var da=0.5*weight*speed*speed/(thickness*thickness*thickness);

  if(da>10)
  {
    wall.shapeColor="pink";
  }

  if(da<10)
  {
    wall.shapeColor="yellow";
  }
}


  background(255,255,255);  
  drawSprites();
}


function istouching(ob1,ob2)

{
 ob1RightEdge=ob1.x+ob1.width;
 ob2LeftEdge=ob2.x;
 if(ob1RightEdge>=ob2LeftEdge)
 {
   return true;
 }
 return false;
}
// how to create algorithm - a solution to a problem
// to detect collision between two sprites
//isTouching 

var fixedrect, movingrect;
var object1, object2;


function setup() {
  createCanvas(800,400);
  fixedrect = createSprite(400, 200, 50, 50);
  movingrect = createSprite(500,200,50,50);

  fixedrect.shapeColor = "green";
  movingrect.shapeColor = "green";


  object1 = createSprite(400, 400, 50, 50);
  object2 = createSprite(500,400,50,50);
  object1.shapeColor = "blue";
  object2.shapeColor = "yellow";
   object1.velocityX = 5 ;
   object2.velocityX = -5 ;
}

function draw() {
  background(255,255,255); 
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;
  drawSprites();

  //condition to detect the collision between two sprites
  if(movingrect.x - fixedrect.x < movingrect.width/2 + fixedrect.width/2 &&
    fixedrect.x-movingrect.x < fixedrect.width/2+ movingrect.width/2 &&
    movingrect.y - fixedrect.y < movingrect.height/2 + fixedrect.height/2 &&
    fixedrect.y-movingrect.y < fixedrect.height/2+ movingrect.height/2)
     {
    fixedrect.shapeColor = "red";
    movingrect.shapeColor = "red";

    }
  else
  {

    fixedrect.shapeColor = "green";
    movingrect.shapeColor = "green";
  }

  //bounceoff algorithm
  if(object1.x - object2.x < object1.width/2 + object2.width/2 &&
    object2.x-object1.x < object2.width/2+ object1.width/2)
    {
    object1.velocityX = object1.velocityX * (-1);
    object2.velocityX = object2.velocityX * (-1);
    }

}
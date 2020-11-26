var fRect,mRect;
function setup() {
  createCanvas(800,400);
  fRect=createSprite(400, 200, 50, 50);
  fRect.debug=true;
  fRect.shapeColor=('yellow');

  mRect=createSprite(400, 350, 50, 50);
  mRect.debug=true;
  mRect.shapeColor=('yellow');

}

function draw() {
  background(0);  

if(fRect.x-mRect.x<=mRect.width/2+fRect.width/2 && 
  mRect.x-fRect.x<=mRect.width/2+fRect.width/2 &&
  fRect.y-mRect.y<=mRect.height/2+fRect.height/2 && 
  mRect.y-fRect.y<=mRect.height/2+fRect.height/2){
  fRect.shapeColor=('red');
  mRect.shapeColor=('red');
}
else{
  fRect.shapeColor=('green');
  mRect.shapeColor=('green');
}
  mRect.x=mouseX;
  mRect.y=mouseY

  drawSprites();
}
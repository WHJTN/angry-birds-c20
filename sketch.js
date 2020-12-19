var somthing1
var somthing2

function setup() {
  createCanvas(800,400);
  somthing1 = createSprite(600, 200, 50, 50);
  somthing2 = createSprite(200, 200, 50, 50);
}

function draw() {
  background(200,200,200);
  drawSprites();
  somthing1.x = mouseX
  somthing1.y = mouseY
  if (somthing1.x - somthing2.x <= somthing1.width/2 + somthing2.width/2
    && somthing2.x - somthing1.x <= somthing1.width/2 + somthing2.width/2
    && somthing1.y - somthing2.y <= somthing1.height/2 + somthing2.height/2
    && somthing2.y - somthing1.y <= somthing1.height/2 + somthing2.height/2) {
    somthing1.shapeColor = "green"
    somthing2.shapeColor = "green"
  }
  else {
    somthing1.shapeColor = "blue"
    somthing2.shapeColor = "yellow"
  }
}
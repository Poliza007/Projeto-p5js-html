function setup() {
  createCanvas(400, 400);
  background("purple")
}

function draw() {
  stroke("black");
  fill("black");
  
  
  if (mouseIsPressed) {
    rect(mouseX, mouseY, 20, 35);
  }
}

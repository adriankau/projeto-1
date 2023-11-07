function setup() {
    createCanvas(700, 600);
    background("blue");
  }
  function draw() {
    stroke("black");
    fill("red");
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 20);
    }
  }
  
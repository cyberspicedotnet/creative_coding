gridCount = 35;

cellSize = 0;

dotSize = 0;

yOffset = 0;

// dotIndex = 0.0;
dotIndexSpeed = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);

  ellipseMode(CENTER);
noStroke();

  cellSize = width / gridCount;

}

function draw() {
  background(0,8);

fill(255);

dotIndex = 0;
dotIndexSpeed += 0.0006;

    for (iX = 0; iX < width; iX += cellSize) {
      
    // dotIndex += map(mouseX, 0, width, 0.0001, 0.5);  

dotIndex -= dotIndexSpeed;

      // dotSize = sin((iY + iX) + dotIndex) * (cellSizeX * 0.7);

dotSize = map(cos(dotIndex), -1, 1, 2, 20);

yOffset = (height/2) + (sin(dotIndex) * (height * 0.2));


      // centerOfCellY = iY + (cellSizeY / 2);
      // centerOfCellX = iX + (cellSizeX / 2);
      // ellipse(centerOfCellX, centerOfCellX, ellipseSize)

      ellipse(iX + cellSize / 2, yOffset, dotSize);

      
    }
  
}

function setup() {
  createCanvas(windowWidth, windowHeight);

textSize(24);
textFont('Courier New');
textAlign(CENTER);
}

function draw() {
  background(5);
stroke(255);
fill(255);
strokeWeight(5);

line(mouseX, 0, mouseX, height);
line(0, mouseY, width, mouseY);

strokeWeight(1);
textAlign(LEFT);

text("(mouseX = " + mouseX + ")" , mouseX, 25);
text("(mouseY = " + mouseY + ")" , 0, mouseY + 25);

// text(("(x = " + mouseX + ")" ), mouseX + 10, mouseY - 20);
// text(("(y = " + mouseY + ")" ), mouseX + 10, mouseY + 35);


for(i=0;i<width;i += 100){
line(i, 0, i, height);
}

for(i=0;i<height;i += 100){
line(0, i, width, i);
}

}
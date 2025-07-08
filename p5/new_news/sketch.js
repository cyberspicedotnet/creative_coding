let x = 15;
let y = 15;
let r = 0;

var imgs = [];

function preload() {
  for (var i = 0; i < 117; i++) {
    imgs[i] = loadImage(i + ".png");
    print(i);
  }
  print("preload complete");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
}

function draw() {
  if (frameCount % 4 == 0) {
    drawBox();
    nextBox();
  }
}


function drawBox(){

 r = int(random(imgs.length));
      image(imgs[r], x, y, imgs[r].width , imgs[r].height);

}

function nextBox(){
if(y < height - 40){
if(x >= width - 500){
x = 15;
y += imgs[r].height * 1.2 + 10;
} else {
x += imgs[r].width + 15;
}
}

if(y >= height - 40){
noLoop();
       }
}

function mousePressed(){

  blendMode(DIFFERENCE);
  background(230);
  blendMode(MULTIPLY);
  background(255, 0, 0);
  blendMode(BLEND);

}

function mouseReleased(){
background(220);
x=10;
  y = 10;

loop();
}

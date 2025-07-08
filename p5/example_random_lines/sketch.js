// var randomNum;

function setup() {
  createCanvas(800, 800);

  background(0);

}

function draw() {

strokeWeight(4);

// randomNum = random(0,1);

if(random() <= 0.5){
stroke(255);
}else {
stroke(0);
}

line(random(width), random(height), random(width), random(height));
}
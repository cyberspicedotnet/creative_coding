let gridSize = 20;

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(0);

for(let i = gridSize /2; i < height; i += gridSize){
for(let j = gridSize /2; j < height; j += gridSize){

noStroke();
fill(255, random(255), random(255));

ellipse(i, j , 10);

}
}
}

function keyPressed(){

save();

}
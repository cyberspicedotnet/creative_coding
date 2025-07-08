const W = (H = D = 600);
// const boxSize = W / 12;
var x_rot;
var index;

function setup() {
  createCanvas(800, 800, WEBGL);

  x_rot = atan(1 / sqrt(2));

  setAttributes("antialias", true);
  ortho(-W, H, W, -H, -W * 4, W * 4);
}

function draw() {
  background(0);
// stroke(0, 90);
strokeWeight(6);

  rotateX(x_rot);
  rotateY(QUARTER_PI);

  // normalMaterial();

index = 0;

for(let i = -700; i < 700; i += 50){
for(let j = -700; j < 700; j += 50){

push();
translate(i, j + i + (sin(frameCount * 0.05 + (index*0.01))* 30), -j );
rotateY(sin(frameCount * 0.05 + (index*0.01))*0.1);
rotateZ(cos(frameCount * 0.05 + (index*0.01))*-0.1);
scale(0.9);
// scale((sin(frameCount * 0.01 + (index*0.01))));
box(45, 45, 45);
pop();


index++;
}
}
}

// Array of Objects
// Code! Programming with p5.js
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/beginners/p5js/7.3-array-of-objects.html
// https://youtu.be/fBqaA7zRO58
// https://editor.p5js.org/codingtrain/sketches/1y_xfueO

let bubbles = [];

function setup() {
  createCanvas(800, 800);
}

function mouseDragged() {
  if (mouseX != pmouseX && mouseY != pmouseY) {
    let r = random(5, 30);
    let b = new Bubble(
      bubbles.length,
      mouseX + random(-10, 10),
      mouseY + random(-10, 10),
      r,
      random(1000),
      random(0.2, 10)
    );
    bubbles.push(b);
  }
}

function draw() {
  background(0);

  // for (let bubble of bubbles) {
  //   bubble.move();
  //   bubble.show();
  // }

  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].update();
    bubbles[i].move();
    bubbles[i].show();

    if (bubbles[i].popped) {
      bubbles.splice(i, 1);
    }
  }
}

class Bubble {
  constructor(i, x, y, r, s, l) {
    this.i = i;
    this.x = x;
    this.y = y;
    this.r = r;
    this.s = s;
    this.l = l;
    this.popped = false;
  }

  update() {
    this.l -= 0.1;

    if (this.l < 0) {
      this.popped = true;
    }
  }

  move() {
    noiseSeed(this.s);
    //     this.x = this.x + randomGaussian(0,1);
    //     this.y = this.y + randomGaussian(-0.2,1);
    this.x = this.x + map(noise(frameCount * 0.1), 0, 1, -0.5, 0.5);
    this.y = this.y - noise(frameCount * 0.01) * 2;
  }

  show() {
    stroke(255, 20);
    strokeWeight(4);
    fill(255, 60);
    ellipse(this.x, this.y, this.r * 2);
  }
}

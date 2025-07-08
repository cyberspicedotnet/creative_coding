let draggable = false;
let testjoins = true;
let useWebGl = false;
let growSpeed = 1;

let bubbles = [];

function setup() {
  if (useWebGl) {
    createCanvas(windowWidth, windowHeight, WEBGL);
    blendMode(SCREEN);
  } else {
    createCanvas(800, 800);
  }
  // colorMode(HSB);

  noCursor();
}

function draw() {
  if (useWebGl) {
    translate(-width / 2, -height / 2);
  }

  blendMode(BLEND);
  background(0);
  blendMode(SCREEN);

  updateBubbles();

  stroke(255, 160);
  strokeWeight(3);
  point(mouseX, mouseY);
}

// function mouseDragged() {
//   // if (dist(mouseX, mouseY, pmouseX, pmouseY) > 10) {
// // if(frameCount % 2 == 0){
//   makeBubble();
// // }
// }

function mousePressed() {
  // if (dist(mouseX, mouseY, pmouseX, pmouseY) > 10) {
  makeBubble();
}

function mouseDragged() {
  if (draggable) {
    makeBubble();
  }
}

function keyPressed() {
  if (key === "d" || key === "D") {
    draggable = !draggable;
  }
}

function makeBubble() {
  let index = bubbles.length;
  let xPos = mouseX;
  let yPos = mouseY;
  let radius = 5;
  let seed = random(1000);
  let lifespan = 8;
  let hue = 170;

  let b = new Bubble(index, xPos, yPos, radius, seed, lifespan, hue);
  bubbles.push(b);
}

function updateBubbles() {
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
  constructor(i, x, y, r, s, l, h) {
    this.i = i;
    this.x = x;
    this.y = y;
    this.r = r;
    this.s = s;
    this.l = l;
    this.h = h;
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
    // this.x = this.x + map(noise(frameCount * 0.1), 0, 1, -0.5, 0.5);
    // noiseSeed(this.s * 0.993);
    // this.y = this.y + map(noise(frameCount * 0.1), 0, 1, -0.5, 0.5);

    this.r = this.r += growSpeed;
  }

  show() {
    let bubbleStrokeAlpha = map(this.l, 10, 0, 220.0, 0.0);
    let bubbleStrokeWeight = map(this.l, 10, 0, 10.0, 2.0);
    let bubbleFillAlpha = map(this.l, 10, 2.7, 195.0, 0.0);

    stroke(255, bubbleStrokeAlpha);
    strokeWeight(bubbleStrokeWeight);
    fill(bubbleFillAlpha);

    // fill(255, 20);
    ellipse(this.x, this.y, this.r * 2, this.r * 2, 30);
  }
}

// if (testJoins) {
//   p5.Geometry.prototype._edgesToVertices = function() {
//     this.lineVertices.length = 0;
//     this.lineNormals.length = 0;

//     let prevDir;
//     for (let i = 0; i < this.edges.length; i++) {
//       const prevEdge = this.edges[i - 1];
//       const currEdge = this.edges[i];
//       const begin = this.vertices[currEdge[0]];
//       const end = this.vertices[currEdge[1]];
//       const dir = end.copy().sub(begin).normalize();
//       const a = begin.array();
//       const b = end.array();
//       const dirAdd = dir.array();
//       const dirSub = dir.array();
//       // below is used to displace the pair of vertices at beginning and end
//       // in opposite directions
//       dirAdd.push(1);
//       dirSub.push(-1);
//       this.lineNormals.push(
//         dirAdd,
//         dirSub,
//         dirAdd,
//         dirAdd,
//         dirSub,
//         dirSub
//       );
//       this.lineVertices.push(a, a, b, b, a, b);

//       // If the previous edge connects directly to the current edge, add extra
//       // triangles joining the previous edge's rectangle to the next edge's
//       // rectangle to get a smoother outline
//       if (i > 0 && prevEdge[1] == currEdge[0] && prevDir.magSq() > 1e-8) {
//         const prevDirAdd = prevDir.array();
//         const prevDirSub = prevDir.array();
//         prevDirAdd.push(1);
//         prevDirSub.push(-1);
//         this.lineNormals.push(
//           prevDirAdd,
//           prevDirSub,
//           dirAdd,
//           dirAdd,
//           prevDirSub,
//           dirSub
//         );
//         this.lineVertices.push(a, a, a, a, a, a);
//       }
//       prevDir = dir;
//     }
//     return this;
//   };
// }

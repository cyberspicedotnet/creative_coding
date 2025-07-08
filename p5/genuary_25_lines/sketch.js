let video;
let pixelation_level = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);

  video = createCapture(VIDEO);

  video.size(640, 480);

  video.hide();

  noStroke();
}

function draw() {
  // video.loadPixels();
  //   for (let y=0; y<video.height; y++) {
  //     for (let x=0; x<video.width; x++) {
  //       let px = video.get(x, y);
  //       let r = px[0];
  //       let g = px[1];
  //       let b = px[2];
  //       let bright = (0.2126 * r) + (0.7152 * g) + (0.0722 * b);
  //       video.set(x, y, color(bright));
  //     }
  //   }
  //   better.updatePixels();

  image(video, 0, 0);

  loadPixels();

  background(0);

  for (let x = 0; x < width; x += pixelation_level) {
    for (let y = 0; y < height; y += pixelation_level) {
      let i = (x + y * width) * 4;

      let r = pixels[i + 0];
      let g = pixels[i + 1];
      let b = pixels[i + 2];
      // let a = pixels[i + 3];
      let bright = 0.2126 * r + 0.7152 * g + 0.0722 * b;

      // fill(bright);
      // square(x, y, pixelation_level);

      strokeWeight(2);
      strokeCap(SQUARE);
      stroke(bright);

      if (bright > 64 && bright < 128) {
        line(x, y, x + pixelation_level, y);
      } else if (bright >= 128 && bright < 192) {
        line(
          x + pixelation_level / 2,
          y + pixelation_level / 2,
          x + pixelation_level / 2,
          y + pixelation_level + pixelation_level / 2
        );
      } else if (bright >= 192) {
        line(x, y, x + pixelation_level, y);
        line(
          x + pixelation_level / 2,
          y + pixelation_level / 2,
          x + pixelation_level / 2,
          y + pixelation_level + pixelation_level / 2
        );
      }
    }
  }

  // image(video, 0, 0);
  // filter(GRAY);
  // filter(POSTERIZE, 3);
}

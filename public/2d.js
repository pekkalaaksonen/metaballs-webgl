`use strict`;

import ParticleSystem from "./modules/particleSystem.js";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

function toRadians(degrees) {
  return (Math.PI / 180) * degrees;
}

class Pallo {
  constructor(x, y, angle, velocity, radius) {
    this.x = x;
    this.y = y;
    this.angle = angle;
    this.velocity = velocity;
    this.radius = radius;
  }
}

function main() {
  const canvas = document.querySelector(`canvas`);

  const width = window.innerWidth;
  const height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext(`2d`);

  const pallot = [];

  let i = 0;
  while (i < 2) {
    const pallo = new Pallo(
      getRandomInt(0, window.innerWidth),
      getRandomInt(0, window.innerHeight),
      toRadians(getRandomNumber(0, 360)),
      getRandomNumber(0.5, 3.0),
      getRandomInt(1, 100)
    );
    pallot.push(pallo);
    i++;
  }

  console.log(pallot);

  const particleSystem = new ParticleSystem(
    ctx,
    window.innerWidth,
    window.innerHeight,
    pallot
  );

  const imageData = ctx.createImageData(width, height);
  const data = imageData.data;
  const radius = 1000000;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const index = (x + y * width) * 4;
      let color = 0;

      color +=
        radius /
        ((x - width / 2) * (x - width / 2) +
          (y - height / 2) * (y - height / 2));
      data[index + 0] = color;
      data[index + 1] = color;
      data[index + 2] = color;
      data[index + 3] = 255;
    }
  }
  ctx.putImageData(imageData, 0, 0);

  function animate() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
    particleSystem.updateLocation();
    particleSystem.drawParticles();
    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
}

main();

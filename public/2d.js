`use strict`;

function main() {
  const canvas = document.getElementById(`canvas`);

  const width = window.innerWidth;
  const height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext(`2d`);

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
}

main();

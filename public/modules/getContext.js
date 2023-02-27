`use strict`;

export function getContext(
  width = window.innerWidth,
  height = window.innerHeight
) {
  // get canvas
  const canvas = document.querySelector("canvas");
  // set canvas width & height, by default window width & height
  canvas.width = width;
  canvas.height = height;
  // get rendering context
  const ctx = canvas.getContext(`webgl2`);
  // log error if WebGL is not supported
  if (!ctx) {
    console.log(`WebGL not supported!`);
  }
  //return context
  return ctx;
}

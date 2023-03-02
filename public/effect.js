`use strict`;

import { getContext } from "./modules/getContext.js";
import { loadShaders } from "./modules/loadShaders.js";
import { compileShader } from "./modules/compileShader.js";
import { createProgram } from "./modules/createProgram.js";
import ParticleSystem from "./modules/particleSystem.js";
import Ball from "./modules/ball.js";
import {
  getRandomInt,
  getRandomNumber,
  toRadians,
} from "./modules/helperFunctions.js";

async function main() {
  // load shaders

  const vertexShaderSource = await loadShaders("/shaders/", "vertex.glsl");
  const fragmentShaderSource = await loadShaders("/shaders/", "fragment.glsl");

  // get rendering context
  const gl = getContext();

  // generate balls and push them to array
  const balls = [];
  let i = 0;

  while (i < 40) {
    const ball = new Ball(
      getRandomInt(0, window.innerWidth),
      getRandomInt(0, window.innerHeight),
      toRadians(getRandomNumber(0, 360)),
      getRandomNumber(0.5, 10.0),
      getRandomInt(1, 100)
    );
    balls.push(ball);
    i++;
  }

  const particleSystem = new ParticleSystem(
    gl,
    gl.canvas.width,
    gl.canvas.height,
    balls
  );

  const vertexShader = compileShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
  const fragmentShader = compileShader(
    gl,
    gl.FRAGMENT_SHADER,
    fragmentShaderSource
  );

  const program = createProgram(gl, vertexShader, fragmentShader);
  gl.useProgram(program);

  // set up effect area by drawing 2 triangles, forming a rectangle (or square):
  // A---C
  // |  /|
  // | / |
  // |/  |
  // B---D

  const vertexData = new Float32Array([
    -1,
    1, // A
    -1,
    -1, // B
    1,
    1, // C
    1,
    -1, // D
  ]);

  const vertexBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, vertexData, gl.STATIC_DRAW);

  const a_Position = gl.getAttribLocation(program, `a_Position`);
  const u_resolution = gl.getUniformLocation(program, `u_resolution`);
  const u_location = gl.getUniformLocation(program, `u_location`);
  const locations = gl.getUniformLocation(program, `locations`);

  gl.enableVertexAttribArray(a_Position);
  gl.vertexAttribPointer(a_Position, 2, gl.FLOAT, false, 0, 0);

  //gl.uniform2f(u_location, window.innerWidth / 2, window.innerHeight / 2);
  //gl.uniform2fv(locations, locs);
  //gl.uniform2f(u_location, balls[0].x, balls[0].y);
  gl.uniform2f(u_resolution, gl.drawingBufferWidth, gl.drawingBufferHeight);
  gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4); // Adding new vertices to first three produces additional triangles

  function animate() {
    //ctx.fillStyle = "black";
    particleSystem.updateLocation();
    const locationsArray = particleSystem.getLocationsToArray();
    gl.uniform2fv(locations, locationsArray);
    //gl.uniform2f(u_location, balls[0].x, balls[0].y);
    gl.uniform2f(u_resolution, gl.drawingBufferWidth, gl.drawingBufferHeight);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4); // Adding new vertices to first three produces additional triangles
    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
}

main();

import Ball from "./modules/ball.js";
import {
  getRandomInt,
  getRandomNumber,
  toRadians,
} from "./modules/helperFunctions.js";

const balls = [];
let i = 0;

while (i < 2) {
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

console.log(balls);

const locs = [];

for (const ball of balls) {
  locs.push(ball.x), locs.push(ball.y);
}

console.log(locs);

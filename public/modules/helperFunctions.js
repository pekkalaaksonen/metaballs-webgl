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

export { getRandomInt, getRandomNumber, toRadians };

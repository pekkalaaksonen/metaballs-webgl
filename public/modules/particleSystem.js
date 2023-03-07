export default class ParticleSystem {
  constructor(ctx, width, height, particles = []) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.particles = particles;
  }

  updateLocation() {
    for (this.pallo of this.particles) {
      if (this.pallo.x <= 0 || this.pallo.x >= this.width) {
        this.pallo.angle = Math.PI - this.pallo.angle;
      }

      if (this.pallo.y <= 0 || this.pallo.y >= this.height) {
        this.pallo.angle = 2 * Math.PI - this.pallo.angle;
      }

      this.pallo.x += Math.cos(this.pallo.angle) * this.pallo.velocity;
      this.pallo.y += Math.sin(this.pallo.angle) * this.pallo.velocity;
    }
  }

  getLocationsToArray() {
    const locs = [];

    for (this.ball of this.particles) {
      locs.push(this.ball.x), locs.push(this.ball.y);
    }

    return locs;
  }

  getRadiusToArray() {
    const radiusArray = [];

    for (this.ball of this.particles) {
      radiusArray.push(this.ball.radius);
    }

    return radiusArray;
  }

  getColorsToArray() {
    const colorsArray = [];

    for (this.ball of this.particles) {
      colorsArray.push(this.ball.red),
        colorsArray.push(this.ball.green),
        colorsArray.push(this.ball.blue);
    }

    return colorsArray;
  }

  drawParticles() {
    this.ctx.strokeStyle = "white";

    for (this.pallo of this.particles) {
      this.ctx.beginPath();
      this.ctx.arc(
        this.pallo.x,
        this.pallo.y,
        this.pallo.radius,
        0,
        2 * Math.PI
      ); // draw particles
      this.ctx.stroke();
    }
  }
}

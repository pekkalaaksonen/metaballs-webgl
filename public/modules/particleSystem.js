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
        this.pallo.movementX *= -1;
      }

      if (this.pallo.y <= 0 || this.pallo.y >= this.height) {
        this.pallo.movementY *= -1;
      }

      this.pallo.x += this.pallo.movementX;
      this.pallo.y += this.pallo.movementY;
    }
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

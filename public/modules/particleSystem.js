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

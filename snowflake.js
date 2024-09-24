class Snowflake {
  constructor(offering) {
    this.offering = offering;
    this.posX = 0;
    this.posY = random(-50, 0);
    this.initialangle = random(0, 2 * PI);
    this.size = random(offering.minSize, offering.maxSize);
    this.radius = sqrt(random(pow(width / 2, 2)));
  }

  update() {
    let w = 0.6; // angular speed
    let angle = w * (frameCount / 60) + this.initialangle;
    this.posX = width / 2 + this.radius * sin(angle);
    this.posY += pow(this.size, 0.3); 

    if (this.posY > height) {
      let index = snowflakes.indexOf(this);
      snowflakes.splice(index, 1);
    }
  }

  display() {
    image(this.offering.img, this.posX, this.posY, this.size, this.size);
  }
}
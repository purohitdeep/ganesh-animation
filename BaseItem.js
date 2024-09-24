class BaseItem {
  constructor(offering) {
    this.offering = offering;
    this.position = createVector(
      offering.startPosition.x,
      offering.startPosition.y
    );
    this.endPosition = createVector(
      offering.endPosition.x,
      offering.endPosition.y
    );
    this.finalPosition = createVector(
      offering.finalPosition.x,
      offering.finalPosition.y
    );
    this.moving = false;
  }

  update() {
    if (this.moving) {
      this.position.lerp(this.endPosition, 0.05);
      if (p5.Vector.dist(this.position, this.endPosition) < 1) {
        this.position = this.endPosition;
        this.moving = false;
      }
    } else if (p5.Vector.dist(this.position, this.finalPosition) > 1) {
      this.position.lerp(this.finalPosition, 0.01);
    }
  }

  display() {
    if (this.offering.show) {
      image(this.offering.img, this.position.x, this.position.y);
    }
  }

  start() {
    this.moving = true;
  }
}

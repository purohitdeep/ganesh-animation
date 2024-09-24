class Button {
  constructor(id, offering) {
    this.offering = offering;
    this.element = createButton(offering.buttonLabel);
    this.element.id(id);
    this.element.mousePressed(() => this.handleClick());
  }

  handleClick() {
    this.offering.show = !this.offering.show;
    if (this.offering.startPosition) {
      // If the offering has a startPosition property, it's a base item
      let item = baseItems.find((item) => item.offering === this.offering);
      if (item) {
        item.start();
      }
    }
  }
}

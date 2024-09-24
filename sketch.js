let snowflakes = []; // array to hold snowflake objects
let baseItems = []; // array to hold base item objects
let bg; // variable to hold background image
let offerings = {}; // object to store offerings data
let buttons = []; // array to store button objects
let config; // variable to store configuration data
let frameCounter = 0; // counter to introduce delay

function preload() {
  bg = loadImage("assets/ganesh.png");
  config = loadJSON("config.json"); // load configuration data
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(240);
  noStroke();

  // Initialize offerings and buttons
  for (let offeringName in config) {
    let offeringConfig = config[offeringName];
    offerings[offeringName] = {
      ...offeringConfig,
      img: loadImage(offeringConfig.image),
      start: false
    };
    buttons.push(new Button(offeringName, offerings[offeringName]));
    if (offeringConfig.startPosition) {
      // If the offering has a startPosition property, it's a base item
      baseItems.push(new BaseItem(offerings[offeringName]));
    }
  }
}

function draw() {
  image(bg, 0, 0, windowWidth, windowHeight);
  frameCounter++;

  for (let offeringName in offerings) {
    let offering = offerings[offeringName];
    if (offering.start && frameCounter > offering.frameDelay) {
      for (let i = 0; i < random(offering.spawnCount); i++) {
        snowflakes.push(new Snowflake(offering));
      }
      frameCounter = 0; // reset counter
    }
  }

  for (let flake of snowflakes) {
    flake.update();
    flake.display();
  }

  for (let item of baseItems) {
    item.update();
    item.display();
  }
}


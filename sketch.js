/******
 * SETUP
 *******/
let whalemg;
let bgImg;
let sensorReady = false;
let targetX, targetY;
var whaleLocation
var bubbles = [];

  function preload() {
  whalemg = loadImage('cute.png'); 
  bgImg = loadImage('background.jpg');
}

function setup() {
  angleMode(RADIANS);
  createCanvas(350, 600);
  background('deepskyblue'); 
  whaleLocation = createVector(width / 2, height / 2);



  for (let i = 0; i < 6; i++) {
    bubbles[i] = new Bubble(
      random(width),
      random(height, height * 1.5),
      random(25, 100),
      random(1, 3)
    );
  }

  targetX = width / 2;
  targetY = height / 2;
}


/*************
 * FISH OBJECT
 *************/
let Whale = function(x, y, length, height) {
  this.x = x;
  this.y = y;
  this.length = length;
  this.height = height;
  this.angle = 0;
};

Whale.prototype.update = function() {
  this.angle = atan2(targetY - this.y, targetX - this.x);
  let mouseLocation = createVector(targetX, targetY);
  let distance = mouseLocation.dist(whaleLocation);
  let mappedDistance = map(distance, 15, 0, 1.5, 0);

  mouseLocation.sub(whaleLocation);
  mouseLocation.normalize();
  mouseLocation.mult(mappedDistance);

  if (distance > 1) {
    whaleLocation.add(mouseLocation)
  }

  this.x = whaleLocation.x
  this.y = whaleLocation.y
}

Whale.prototype.draw = function() {
  push();

  this.y = constrain(this.y, 30, height - 30);
  this.x = constrain(this.x, 30, width - 30);

  translate(this.x, this.y);
  rotate(this.angle+ PI);

  imageMode(CENTER);

  image(
    whalemg,
    0,
    0,
    2*this.length,
    2*this.height
  );

  pop();
};

/**************
 * BUBBLE OBJECT
 **************/
let Bubble = function(x, y, diameter, speed) {
  this.x = x
  this.y = y
  this.diameter = diameter
  this.speed = speed
}

Bubble.prototype.draw = function() {
  strokeWeight(2);
  stroke('white');
  noFill();
  ellipse(this.x, this.y, this.diameter, this.diameter);
  arc(this.x, this.y, this.diameter - (0.2 * this.diameter), this.diameter - (0.2 * this.diameter), radians(180),
  radians(260))
}




let whale = new Whale(200, 200, 59, 37);

let popCount = 0;

function draw() {
  image(bgImg, 0, 0, width, height);
  updateTargetFromPhone();

  whale.update();
  whale.draw();
  
  if (popCount > 0) {
    fill('white');
    textSize(24);
    text('Happy value: ' + popCount, 10, 30);
  }


  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].draw();
    if (mouseIsPressed && mouseX > (bubbles[i].x - bubbles[i].diameter / 2) &&
      mouseX < (bubbles[i].x + bubbles[i].diameter / 2) &&
      mouseY > (bubbles[i].y - bubbles[i].diameter / 2) &&
      mouseY < (bubbles[i].y + bubbles[i].diameter / 2)) {
      bubbles[i].y = random(450, 900);
      bubbles[i].x = random(0, 400);
      bubbles[i].diameter = random(25, 70);
      bubbles[i].speed = random(7, 17);
      popCount++;
    }
    if (bubbles[i].y < -50) {
      bubbles[i].y = random(450, 900);
      bubbles[i].x = random(0, 400);
      bubbles[i].diameter = random(25, 100);
      bubbles[i].speed = random(7, 17);
    } else {
      bubbles[i].y -= bubbles[i].speed / 2;
    }
  }
}


function touchStarted() {
  sensorReady = true;

  if (
    typeof DeviceOrientationEvent !== 'undefined' &&
    typeof DeviceOrientationEvent.requestPermission === 'function'
  ) {
    DeviceOrientationEvent.requestPermission().catch(() => {});
  }
  return false;
}

function updateTargetFromPhone() {
  targetX = mouseX;
  targetY = mouseY;
  return;
}
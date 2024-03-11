
// const utils = new p5.Utils();//credit to: https://github.com/alptugan/p5.utils
const SYMMETRIES = 5;
let mirrors = [];
let red;
let green;
let blue;
let newR;
let newG;
let newB;
let interpolationFactor;

function setup() {
  createCanvas(0.8 * windowHeight, 0.8 * windowHeight);
  angleMode(DEGREES);
  drawBorders(SYMMETRIES);
  red = random(255);
  green = random(255);
  blue = random(255);

  newR = random(255);
  newG = random(255);
  newB = random(255);
  interpolationFactor = 0.1;
}

function draw() {
  let angle = 360 / (SYMMETRIES * 2)
  translate(width / 2, height / 2);
  let middleX = mouseX - width / 2;
  let middleY = mouseY - height / 2;
  let middlePX = pmouseX - width / 2;
  let middlePY = pmouseY - height / 2;
  if (mouseIsPressed) {
    stroke(0);
    let d = dist(middleX, middleY, 0, 0);
    let sw = map(d, dist(width, height, 0, 0), 0, 40, 0.5);
    strokeWeight(sw);
    
    //shuffle the color
    if (interpolationFactor < 1) {
      console.log('r is:',red, ' g is: ',green,' b is: ',blue);
      console.log('NEW r is:',newR, ' g is: ',newG,' b is: ',newB);
      interpolationFactor += 0.1;
    } else {
      interpolationFactor = 0.1;
      red = newR;
      green = newG;
      blue = newB;
      
      newR = random(255);
      newG = random(255);
      newB = random(255);
    }
    stroke(lerpColor(color(red, green, blue), color(newR, newG, newB), interpolationFactor))
    
    strokeCap(ROUND)
    for (let i = 1; i <= SYMMETRIES; i++) {
      push()
      line(middleX, middleY, middlePX, middlePY);
      scale(-1, 1);
      line(middleX, middleY, middlePX, middlePY);
      pop()
      rotate(2 * angle)
    }
    // push()
    // line(middleX,middleY,middlePX,middlePY);
    // scale(-1,1);
    // line(middleX,middleY,middlePX,middlePY);
    // pop()
    // rotate(120);
    // push()
    // line(middleX,middleY,middlePX,middlePY);
    // scale(-1,1);
    // line(middleX,middleY,middlePX,middlePY);
    // pop()
    // rotate(120);
    // push()
    // line(middleX,middleY,middlePX,middlePY);
    // scale(-1,1);
    // line(middleX,middleY,middlePX,middlePY);
    // pop()
  }
}

function drawBorders(symmetry) {
  push();
  stroke(0);
  strokeWeight(1);
  translate(width / 2, height / 2);
  const angle = 180 / symmetry;
  line(0, -height / 2, 0, height / 2);
  for (let i = 2; i <= symmetry; i++) {
    rotate(angle);
    line(0, -2 * height, 0, 2 * height);
  }

  pop();
}

function drawBorders2(symmetry) {
  push();
  stroke(0);
  strokeWeight(1);
  translate(width / 2, height / 2);
  const angle = 180 / (symmetry);
  for (let i = 0; i <= symmetry * 2 - 1; i++) {
    console.log('cos is: ', cos(i * angle - 90), ' sin: ', sin(i * angle - 90))
    const x = cos(i * angle - 90) * (height);
    const y = sin(i * angle - 90) * (height);
    console.log('line, tangent is: ', (y / x));
    line(0, 0, x, y);
    mirrors.push(createVector(x, y));
  }
  console.log('mirrors: ', mirrors);

  pop();
}
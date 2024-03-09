
// const utils = new p5.Utils();//credit to: https://github.com/alptugan/p5.utils
const SYMMETRIES = 4;
let mirrors = [];

function cosC(pA,pB,pC){
 const a =dist(pB.x,pB.y,pC.x,pC.y);
 const b =dist(pA.x,pA.y,pC.x,pC.y);
 const c =dist(pB.x,pB.y,pA.x,pA.y);
 return ((a*a)+(b*b)-(c*c))/2*a*b;
}
function setup() {
  createCanvas(windowHeight, windowHeight);
  angleMode(DEGREES);
  drawBorders2(SYMMETRIES);
}
function draw(){
  let angle=360/(SYMMETRIES*2)
  translate(width/2,height/2);
  let middleX=mouseX-width/2;
  let middleY=mouseY-height/2;
  let middlePX=pmouseX-width/2;
  let middlePY=pmouseY-height/2;
  if(mouseIsPressed){
    stroke(0);
    strokeWeight(3);
    for(let i = 1; i<= SYMMETRIES;i++){
      push()
      line(middleX,middleY,middlePX,middlePY);
      // rotate(angle);
      // line(middleX,middleY,middlePX,middlePY);
      scale(-1,1);
      line(middleX,middleY,middlePX,middlePY);
      pop()
      rotate(2*angle)
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

//pA : the mouse
//pB: the "mirror"
//pC: the relative 0,0


function drawBorders(symmetry){
  push();
  stroke(0);
  strokeWeight(1);
  translate(width/2, height/2);
  const angle = 180/symmetry;
  line(0, -height/2, 0,height/2);
  for(let i = 2 ; i <= symmetry ; i++){
    rotate(angle);
    line(0, -2*height, 0,2*height);
  }

  pop();  
}

function drawBorders2(symmetry){
  push();
  stroke(0);
  strokeWeight(1);
  translate(width/2, height/2);
  const angle = 180/(symmetry);
  for(let i = 0 ; i <=symmetry*2-1 ; i++){
    console.log('cos is: ',cos(i*angle-90),' sin: ',sin(i*angle-90))
    const x = cos(i*angle-90)*(height);
    const y = sin(i*angle-90)*(height);
    console.log('line, tangent is: ',(y/x));
    line(0,0,x,y);
    mirrors.push(createVector(x,y));
  }
  console.log('mirrors: ',mirrors);

  pop();  
}


function drawGrid() {
  // background('yellow')
  stroke(200);
  fill(120);
  for (var x = -width; x < width; x += 50) {
    line(x, -height, x, height);
    text(x, x + 1, 12);
  }
  for (var y = -height; y < height; y += 50) {
    line(-width, y, width, y);
    text(y, 1, y + 12);
  }
}
let pokemonNum;
let startBox;
let w = 100;
let marginLeft = 20;
let marginTop = 50;
let input;
let button;
function setup() {
  createCanvas(800, 600);
  input = createInput('', 'number');
  // input.input(pokenum);
  input2 = createInput(1, 'number');
  // input2.input(startNum);
  button = createButton("Go");
  button.mousePressed(function() {
    pokenum();
    startNum();
  })
}
function pokenum() {
  pokemonNum = +input.value();
}
function startNum() {
    startBox = +input2.value();
}
function drawX(x, y) {
  strokeWeight(5);
  line(x + 10, y + 25, x + w - 10, y + w - 10);
  line(x + 10, y + w - 10, x + w - 10, y + 25);
  strokeWeight(1);
}

function draw() {
  background(0);
  let count = 1;
  stroke(255);
  noFill();
  for(let x = 0; x < 6; x++) {
    for(let y = 0; y < 5; y++) {
      rect(x * w + marginLeft, y * w + marginTop, w, w);
      text(count++, x * w + 10+ marginLeft, y * w + marginTop + 20);
    }
  }
  // find remainder from 30 and make it zero indexed aswell
  if(pokemonNum) {
    let px = pokemonNum % 30 - 1;
    if(px < 0) px = 29;
    let boxNumber = int((pokemonNum - 1) / 30) + startBox;
    let column = int(px / 5);
    let row = px % 5;
    text('box number: ' + boxNumber, 50, 30)
    drawX(column * w + marginLeft, row * w + marginTop);
  }
}

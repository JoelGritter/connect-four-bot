const boardHeight = 6;
const boardWidth = 7;
const diskDiameter = 40;

let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;


let gameBoard = new Board(boardHeight, boardWidth);
let turn = 0;

function setup() {
  // get canvas ready
  createCanvas(440, 380);
  // see if the user wants a bot; and if so how hard;
  let botLevel = prompt("What level should the bot be? 0 for none, 1 for easy, 4 for hard");

}

function draw() {
  // draw the board outline
  fill('#0EB2E8');
  noStroke();
  rect(0, 0, 640, 480);

  // draw the circles onto the board
  for(let i = 0; i < boardHeight; i++){
    for(let j = 0; j < boardWidth; j++){
      switch(gameBoard.getBoardTile(i,j)){
        case 0:
          fill('#FFFFFF');
          break;
        case 1:
          fill('#F2EF13');
          break;
        case 2:
          fill("#F23113");
          break;
      }
      ellipse(40 + (60 * j), 40 + (60 * i), 40, 40);
    }
  }
}

function userInput(targetColumn) {
  if(targetColumn < 0 || targetColumn > 6){
    console.log("Cannot place token; Invalid column input");
    return;
  }
  if(gameBoard.determineWin() == 0){
    gameBoard.placeToken(targetColumn, turn+1);
    turn = (turn + 1) % 2;
  } else {
    console.log("Cannot place token; Game is won");
  }
}

mouseClicked = () => userInput(Math.floor((mouseX - 10) / 60));

keyTyped = () => userInput(key - 1);
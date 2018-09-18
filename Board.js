class Board {
  constructor(height, width) {
    let x = [];
    for(let i = 0; i < height; i++){
      let tmp = [];
      for(let j = 0; j < width; j++){
        tmp.push(0);
      }
      x.push(tmp);
    }
    this.board = x;
    this.boardWidth = width;
    this.boardHeight = height;
  }

  determineWin() {
    const checkFoursome = (a,b,c,d) => a == b && b == c && c == d;

    for(let i = 0; i < this.boardHeight; i++){
      for(let j = 0; j < this.boardWidth; j++){
        // cause you can't win with empty spots, now can you?!
        if(this.board[i][j] == "0") continue;

        // horizontal check
        if(j < this.boardWidth-3){
          if(checkFoursome(this.board[i][j], this.board[i][j+1], this.board[i][j+2], this.board[i][j+3])) return this.board[i][j];
        }

        // vertical check
        if(i < this.boardHeight-3){
          if(checkFoursome(this.board[i][j], this.board[i+1][j], this.board[i+2][j], this.board[i+3][j])) return this.board[i][j];
        }

        // diagonal checks
        if(i < this.boardHeight-3 && j < this.boardWidth-3){
          if(checkFoursome(this.board[i][j], this.board[i+1][j+1], this.board[i+2][j+2], this.board[i+3][j+3])) return this.board[i][j];
        }

        if(i > 2 && j > 2){
          if(checkFoursome(this.board[i][j], this.board[i-1][j-1], this.board[i-2][j-2], this.board[i-3][j-3])) return this.board[i][j];
        }

        if(i > 2 && j < this.boardWidth-3){
          if(checkFoursome(this.board[i][j], this.board[i-1][j+1], this.board[i-2][j+2], this.board[i-3][j+3])) return this.board[i][j];
        }

        if(i < this.boardHeight-3 && j > 2){
          if(checkFoursome(this.board[i][j], this.board[i+1][j-1], this.board[i+2][j-2], this.board[i+3][j-3])) return this.board[i][j];
        }
      }
    }
    return 0;
  }

  getBoardTile(i,j) {
    return this.board[i][j];
  }

  setBoardTile(i,j,token) {
    this.board[i][j] = token;
  }

  placeToken(columnNumber, token) {
    for(let i = this.boardHeight-1; i >= 0; i--){
      if(this.getBoardTile(i,columnNumber) == 0){
        this.setBoardTile(i,columnNumber,token);
        break;
      }
    }
  }
}
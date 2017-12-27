
const hasEnded = function (numberOfRows, numberOfCols, oldHead) {
  if(oldHead['x']==1||oldHead['x']==numberOfCols-2) {
    stopGame();
  }
  if(oldHead['y']==1||oldHead['y']==numberOfRows-2) {
    stopGame();
  }
}

const stopGame = function() {
  clearInterval(animator);
  document.getElementById("playAgain").style.visibility = 'visible';
}

const hasEnded = function (numberOfRows, numberOfCols, head, body) {
  if(head['x']==0||head['x']==numberOfCols-1) {
    stopGame();
  }
  if(head['y']==0||head['y']==numberOfRows-1) {
    stopGame();
  }
  ateSelf(body, head);
}

const stopGame = function() {
  clearInterval(animator);
  document.getElementById("playAgain").style.visibility = 'visible';
}

const ateSelf = function (body,head) {
  for (let i = 0; i<body.length-1; i++) {
    if (body[i]['x']==head['x']&&body[i]['y']==head['y'])
      return stopGame();
  }
}

const calcRoverStatus = (plateauSize, initStatus, moves) => {
  const plateauSizeArr = plateauSize.split(' ');
  const initStatusArr = initStatus.split(' ');
  const movesArr = moves.split('');

  const [maxX, maxY] = plateauSizeArr;
  let [xVal, yVal, fVal] = initStatusArr;

  const checkValidMove = (posX, posY, dir, limitX, limitY) => {
    return (
      (dir === 'N' && posY < limitY) ||
      (dir === 'E' && posX < limitX) ||
      (dir === 'S' && posY > 0) ||
      (dir === 'W' && posX > 0)
    );
  };
  const moveForward = (direction) => {
    switch (direction) {
      case 'N':
        yVal++;
        break;
      case 'S':
        yVal--;
        break;
      case 'E':
        xVal++;
        break;
      case 'W':
        xVal--;
        break;
    }
  };
  const rotateLeft = (direction) => {
    switch (direction) {
      case 'N':
        fVal = 'W';
        break;
      case 'S':
        fVal = 'E';
        break;
      case 'E':
        fVal = 'N';
        break;
      case 'W':
        fVal = 'S';
        break;
    }
  };
  const rotateRight = (direction) => {
    switch (direction) {
      case 'N':
        fVal = 'E';
        break;
      case 'S':
        fVal = 'W';
        break;
      case 'E':
        fVal = 'S';
        break;
      case 'W':
        fVal = 'N';
        break;
    }
  };

  for (let i = 0; i < movesArr.length; i++) {
    switch (movesArr[i]) {
      case 'L':
        rotateLeft(fVal);
        break;
      case 'R':
        rotateRight(fVal);
        break;
      case 'M':
        if (checkValidMove(xVal, yVal, fVal, maxX, maxY)) {
          moveForward(fVal);
        }
        break;
    }
  }
  const finalStatus = `${xVal} ${yVal} ${fVal}`;
  return finalStatus;
};

export default calcRoverStatus;

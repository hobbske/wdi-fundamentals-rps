**********************************************************************************Tic-Tac-Toe Game
**********************************************************************************

/*   Set */

function cellValue(key) {
  switch(key) {
    case 'a': return null;
    case 'b': return null;
    case 'c': return null;
    case 'd': return null;
    case 'e': return null;
    case 'f': return null;
    case 'g': return null;
    case 'h': return null;
    case 'i': return null;
    default : return null;
  }
}

/*   Determine the winner */

function getWinner() {
    if (winnerIsX()) {
      return 'x';
    }
    if (winnerIsO()) {
      return 'o';
    }
    return null;
  }
  
/*   Determine which player won */
/*   There are 3 ways to win
    1) all cells in a row are the same 
    2) all cells in a column are the same
    3) all cells diagonally are the same   */
    
function winnerIs(player) {
  return winsRow(player) || winsColumn(player) || winsDiagonal(player);
}

/*   Determine if a player won the row */

function winsRow(player) {
  return allThree(player, cells('a'), cells('b'), cells('c')) ||
         allThree(player, cells('d'), cells('e'), cells('f')) ||
         allThree(player, cells('g'), cells('h'), cells('i'));
}

/*   Determine if a player won the column */

function winsColumn(player) {
  return allThree(player, cells('a'), cells('d'), cells('g')) ||
         allThree(player, cells('b'), cells('e'), cells('h')) ||
         allThree(player, cells('c'), cells('f'), cells('i'));
}

/*   Determine if a player won diagonally   */

function winsDiagonal(player) {
  return allThree(player, cells('a'), cells('e'), cells('i')) ||
         allThree(player, cells('c'), cells('e'), cells('g'));
}

/*   Determine if a player won diagonally   */

function allThree(player, cellOne, cellTwo, cellThree) {
  return (cellOne === player) && (cellTwo === player) && (cellThree === player);
}


**********************************************************************************
**********************************************************************************






// Row specification

// let rows = [1,2,3];
// let column = [1,2,3];

// function playTicTacToe() {
    
//     // PLAYER 1: X

//   let rowPlayer1 = prompt(`Player 1: X \n Enter row`)
  
//   if (rows.includes(rowPlayer1))

//   let columnN = prompt(`Enter culumn number`);

//   }

// let choosenArea = [1,2,3,4,5,6,7,8,9];
// let player1Choose = [0,0,0,0,0,0,0,0,0];

// function playTicTacToe() {
    
//     // PLAYER 1: X
//   let rowPlayer1 = prompt(`Player 1: X \n Enter row`);
  
//   if (choosenArea.includes(rowPlayer1)) {
//     player1Choose[rowPlayer1 -1] = player1Choose;
//     console.log(player1Choose);
//   } 

//   let columnN = prompt(`Enter culumn number`);


//   }

//   playTicTacToe();



let choosenArea = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let player1Choose = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let counter = 0;

// PLAYER 1: X

function playTicTacToe(input) {
  let row = input;
  
  if (choosenArea.includes(row) && counter % 2 === 0) {
    player1Choose[row - 1] = "X";
  } else {
    player1Choose[row - 1] = "Y";
  }
  
  console.log(player1Choose);
  counter++;
  return;
}

let boxes = document.getElementsByClassName('box')

console.log(boxes)

for (var i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener('click', (el) => {
    playTicTacToe(i)
    if (counter % 2 === 0) {
      el.srcElement.classList.add('cross')
    } else {
      el.srcElement.classList.add('circle')
    }
  })
}

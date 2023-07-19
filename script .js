const btn = document.querySelector("#reset");
const boxes = document.querySelectorAll(".box");
const chance = document.querySelector(".chance");
const resetBtn = document.getElementById("reset");
const winner = document.getElementById("win");
const display = document.querySelector(".left-container");
const boxText = document.querySelectorAll(".box-text");

let turn = "X";
// func for chance
function checkTurn() {
  return turn === "X" ? "0" : "X";
}

//check for win
function checkWin() {
  let win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  win.forEach((e) => {
    const [a, b, c] = e;
    //for win check
    if (
      boxText[a].innerText === boxText[b].innerText &&
      boxText[b].innerText === boxText[c].innerText &&
      boxText[a].innerText !== ""
    ) {

      winner.innerText = boxText[a].innerText + " winner!!";
    }
  });

  const isDraw = Array.from(boxes).every((box) => box.innerText !== "");

  if (isDraw) {
   winner.innerText = "Draw!!";
  }
}

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    const boxText = box.querySelector(".box-text");

    if (boxText.innerText === "") {
      boxText.innerText = turn;
      turn = checkTurn();
      checkWin();
      chance.innerText = turn;
    }
  });
});

resetBtn.addEventListener("click", () =>{
   boxText.forEach(box=>{
      box.innerText = " ";
   })

   chance.innerText = "";
   turn = "X";
   winner.innerText = " ";

});

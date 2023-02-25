let turn = "X";

//function change turn X to O and O to X
changetrun = () => {
  document.getElementsByClassName("apnaturn")[0].innerText = `Turn of the ${
    turn === "X" ? "O" : "X"
  }`;
  return turn === "X" ? "O" : "X";
};
// This is when win the game logic
checkwin = () => {
  let win = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
    [2, 4, 6],
  ];
  let boxiteam = document.getElementsByClassName("box-iteam");
  win.forEach((e) => {
    if (
      boxiteam[e[0]].innerText === boxiteam[e[1]].innerText &&
      boxiteam[e[1]].innerText === boxiteam[e[2]].innerText &&
      boxiteam[e[0]].innerText !== "" &&
      boxiteam[e[1]].innerText !== "" &&
      boxiteam[e[2]].innerText !== ""
    ) {
      document.getElementById("winner").innerHTML = `This Game Winner Is ${
        boxiteam[e[0]].innerText
      }`;
      document
        .getElementsByClassName("gameContainer")[0]
        .classList.add("apnazindex");
      document.querySelector("img").style.width = "100px";
    }
  });
};

// add eventlistener on the box
let boxes = document.getElementsByClassName("box");

Array.from(boxes).forEach((e) => {
  e.addEventListener("click", () => {
    if (e.querySelector("span").innerHTML === "") {
      e.querySelector("span").innerText = turn;
      turn = changetrun();
      checkwin();
    }
  });
});

//reset function
document.getElementById("reset").addEventListener("click", () => {
  let boxiteam = document.getElementsByClassName("box-iteam");
  Array.from(boxiteam).forEach((Element) => {
    Element.innerText = "";
  });
  document.getElementById("winner").innerText = "";
  document
    .getElementsByClassName("gameContainer")[0]
    .classList.remove("apnazindex");
  document.querySelector("img").style.width = "0px";
});

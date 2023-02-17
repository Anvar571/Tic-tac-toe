const btns = document.querySelectorAll(".game-btn");
const gameText = document.getElementById("res-score");
const modal = document.querySelector(".modal-wrapper ");
const gamer = document.querySelectorAll(".gamer");

let isFinish = false;

const winLine = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    modal.classList.remove("hide");
  }, 1000);
});

let ownGamer = "";
let nextVal = "";

gamer.forEach((gamer) => {
  gamer.addEventListener("click", (e) => {
    ownGamer = e.target.value;
    modal.classList.add("hide");
    gameText.innerHTML = ownGamer;
  });
});

nextVal = ownGamer;

btns.forEach((val) => handleBtn(val));

function handleBtn(val) {
  val.addEventListener("click", () => {
    if (val.innerHTML === "" && !isFinish) {
      val.innerHTML = nextVal === "x" ? "x" : "o";
      nextVal = nextVal == "x" ? "o" : "x";
      gameText.innerHTML = nextVal;
      winUser();
    } else {
      alert(isFinish ? "O'yin tugadi" : "Bu katak oldin belgilangan");
    }
  });
}

function winUser() {
  const win = winLine.find((widline) => {
    const first = btns[widline[0]].innerHTML;
    const second = btns[widline[1]].innerHTML;
    const third = btns[widline[2]].innerHTML;

    return first === second && second === third && third.length !== 0;
  });

  if (!win) {
    return false;
  }

  const winner = nextVal === "x" ? "o" : 'x';

  gameText.innerText = `O'yin g'olibi ${winner} o'yinchi`;
  isFinish = true;
}


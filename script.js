const boxList = document.querySelectorAll(".box");
const btn = document.querySelector("button");
const winPatterns = [
  [0, 1, 2],[0, 3, 6],
  [3, 4, 5],[1, 4, 7],
  [6, 7, 8],[2, 5, 8],
  [0, 4, 8],[2, 4, 6],
];
let trackSymbol = true;
function checkWin(count) {
  for (let patterns of winPatterns) {
    let [A, B, C] = patterns;
    let valA = boxList[A].innerText;
    let valB = boxList[B].innerText;
    let valC = boxList[C].innerText;
    if (valA !== "" && valA === valB && valB === valC) {
      alert(`player playing with symbol ${valA} wins the game`);
      reset(); return;
    } 
  }
  if(count === 9) {
      alert("match is draw");  
      reset();
    }
}
let count = 0;
for (let box of boxList) {
  box.addEventListener("click", () => {
    if (box.innerText !== "") return;
    box.innerText = trackSymbol ? "O" : "X";
    trackSymbol = !trackSymbol;
    box.style.opacity = 0.5;
    count++;
    setTimeout(()=>checkWin(count),1);
  });
}
function reset() {
  count = 0;
  for (box of boxList) {
    box.style.opacity = 1;
    box.innerText = "";
  }
}
btn.addEventListener("click", reset);

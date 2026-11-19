function initializeChessboard() {
  const chessboard = document.querySelector(".chessboard");
  let row = 0;
  for (let i = 0; i < 64; i++) {
    if (i % 8 === 0) {
      row++;
    }
    const column = (i % 8) + 1;
    let color;
    if ((row + column) % 2 === 0) {
      color = "white";
    } else {
      color = "black";
    }
    const square = document.createElement("div");
    square.classList.add("square");
    square.id = `square-${row}-${column}`;
    square.classList.add(`${color}`);

    chessboard.append(square);
  }

  let target = null;
  chessboard.addEventListener("click", function (event) {
    if (target) {
      target.classList.toggle(`red`);
    }

    if (target === event.target) {
      target = null;
      return;
    }

    target = event.target;
    target.classList.toggle(`red`);
  });
}

initializeChessboard();

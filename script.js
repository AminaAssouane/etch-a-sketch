const container = document.querySelector(".container");
let size = 16;

function makeGrid() {
  for (let i = 0; i < size; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    let sizeSquare = 640 / size;

    for (let j = 0; j < size; j++) {
      const square = document.createElement("div");
      square.classList.add("square");
      square.style.width = `${sizeSquare}px`;
      square.style.height = `${sizeSquare}px`;
      row.appendChild(square);
    }

    container.appendChild(row);
  }
}

function addHover() {
  const squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = "black";
    });
  });
}

// RESET

const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  size = prompt("What is the number of squares per side for the new grid?");
  container.replaceChildren();

  if (size <= 100) {
  } else alert("The maximum number of squares per side is 100!");
  makeGrid();
  addHover();
});

makeGrid();
addHover();

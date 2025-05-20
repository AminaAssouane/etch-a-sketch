const container = document.querySelector(".container");
let size = 16;

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

const squares = document.querySelectorAll(".square");
squares.forEach((square) => {
  square.addEventListener("mouseover", () => {
    square.style.backgroundColor = "black";
  });
});

// RESET

const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  size = prompt("What is the number of squares per side for the new grid?");
  squares.forEach((square) => square.remove());
});

function createRectangles(resolution){
  screen = document.getElementById("eas-screen");
  for(let i = 0; i < resolution; i++){
    let row = populateRow(resolution, screen);
    screen.appendChild(row);
  }
}

function populateRow(resolution, screen){
  let row = document.createElement("div");
  row.style.width = "100%";
  row.style.height = (screen.clientHeight / resolution).toString() + "px";
  row.style.boxSizing = "border-box";
  row.style.border = "1px solid black";
  row.style.display = "flex";
  row.classList.add("screen-row");
  for(let i = 0; i < resolution; i++){
      let box = document.createElement("div");
      box.classList.add("screen-box");
      box.style.width = row.style.height;
      box.style.height = row.style.height;
      box.style.borderCollapse = "collapse";
      box.style.border = "1px solid black";
      row.appendChild(box);
  }
  return row;
}


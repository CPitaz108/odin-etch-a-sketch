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
      box.addEventListener("mouseenter", (e)=>{fillBox(e)})
      box.addEventListener("mouseleave", (e)=>{emptyBox(e)})
      row.appendChild(box);
  }
  return row;
}



function fillBox(event){
  event.target.style.backgroundColor = "#ff0000";
}

function emptyBox(event){
  event.fromElement.classList.remove("fade")
  setTimeout(()=>{
    event.fromElement.classList.add("fade")
  }, 10);
}

function adjustResolution(event){
  //console.log("Res: " + event.target.value + "x" + event.target.value)
  let screen = document.getElementById("eas-screen")
  screen.innerHTML = ""
  createRectangles(parseInt(event.target.value));
  updateCounter(event.target.value)
}

function updateCounter(value){
  document.getElementById("current-res").textContent = value + "x" + value;
}

function hoverSquare(color){
}

createRectangles(10)

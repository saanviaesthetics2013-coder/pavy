function game() {
  return `
    <h3>Reaction Game</h3>
    <button onclick="startGame()">Start</button>
    <div id="box" style="width:100px;height:100px;background:red;margin-top:20px;"></div>
  `;
}

function startGame() {
  let box = document.getElementById("box");

  setTimeout(() => {
    box.style.background = "green";
    let start = Date.now();

    box.onclick = () => {
      alert("Reaction: " + (Date.now() - start) + "ms");
    };

  }, Math.random()*3000);
}

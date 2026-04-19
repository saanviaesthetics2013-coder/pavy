const canvas = document.getElementById("galaxy");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];

for (let i = 0; i < 200; i++) {
  stars.push({
    x: Math.random()*canvas.width,
    y: Math.random()*canvas.height,
    z: Math.random()*2
  });
}

function animate() {
  ctx.fillStyle = "black";
  ctx.fillRect(0,0,canvas.width,canvas.height);

  stars.forEach(s => {
    ctx.fillStyle = "cyan";
    ctx.fillRect(s.x, s.y, s.z, s.z);
    s.y += s.z;
    if (s.y > canvas.height) s.y = 0;
  });

  requestAnimationFrame(animate);
}
animate();

function openModule(name) {
  createWindow(name.toUpperCase(), window[name]());
}

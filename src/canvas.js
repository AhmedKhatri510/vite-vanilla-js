const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "yellow";
ctx.fillRect(10, 10, 100, 100);

ctx.fillStyle = "black";
ctx.font = "50px sans-serif";
ctx.fillText("JS", 40, 90, 50);

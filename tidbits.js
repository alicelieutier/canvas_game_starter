const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const WIDTH = canvas.width
const HEIGHT = canvas.height

// draw a rectangle
ctx.fillStyle = 'yellow';
ctx.fillRect(20, 40, 50, 150); // left, top, width, height


// win screen
function drawWinScreen() {
  ctx.font = "80px monospace";
  ctx.lineWidth = 5;
  ctx.strokeStyle = "fuschia";
  ctx.textAlign = 'center';
  ctx.strokeText("WELL DONE!", Math.floor(WIDTH/2), Math.floor(HEIGHT/2));
}

// clear the canvas
ctx.clearRect(0, 0, canvas.width, canvas.height);


// animation loop

function display() {
  // queue the next frame
  window.requestAnimationFrame(display)
}
window.requestAnimationFrame(display)

// key events
document.addEventListener('keydown', event => {
  switch (event.key) {
    case ' ':
      // do something when space is pressed
      break;

    default:
      break;
  }
})
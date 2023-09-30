console.log('Javascript is running')

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const WIDTH = canvas.width
const HEIGHT = canvas.height


let playerX = WIDTH / 2 -30
let playerY = HEIGHT - 30

function drawPlayer() {
  ctx.fillStyle = 'yellow';
  ctx.fillRect(playerX, playerY, 60, 30); // left, top, width, height
}


class Bullet {
  constructor(x, y) {
    this.x = x
    this.y = y
    this.spawnTime = Date.now()
  }

  draw(time) {
    ctx.fillStyle = 'red';
    // find new current position
    const timePassed = (time - this.spawnTime) / 1000
    const y = this.y - timePassed * 100
    ctx.fillRect(this.x, y, 10, 10); // left, top, width, height
  }

}

const bullets = []

document.addEventListener('keydown', event => {
  if (event.key === ' ') {
    const bullet = new Bullet(playerX + 25, playerY - 10)
    bullets.push(bullet)
  }
})



function display() {
  // find the current time
  const time = Date.now()

  // draw everything
  // clear everything
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // player
  drawPlayer()
  // bullets
  bullets.forEach(bullet => bullet.draw(time))
  // call itself again later
  requestAnimationFrame(display)
}
display()
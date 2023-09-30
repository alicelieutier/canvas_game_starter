console.log('Javascript is running')

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const WIDTH = canvas.width
const HEIGHT = canvas.height

class Player {
  constructor() {
    this.x = WIDTH / 2 -30
    this.y = HEIGHT - 30
  }

  draw() {
    ctx.fillStyle = 'yellow';
    ctx.fillRect(this.x, this.y, 60, 30);
  }
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

const player = new Player()
const bullets = []

document.addEventListener('keydown', event => {
  if (event.key === ' ') {
    const bullet = new Bullet(player.x + 25, player.y - 10)
    bullets.push(bullet)
  }
})

function display() {
  // find the current time
  const time = Date.now()

  // clear everything
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // draw everything
  // player
  player.draw()
  // bullets
  bullets.forEach(bullet => bullet.draw(time))
  // call itself again later
  requestAnimationFrame(display)
}
display()
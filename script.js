const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const WIDTH = canvas.width
const HEIGHT = canvas.height

class Player {
  constructor() {
    this.x = WIDTH / 2 -30
    this.y = HEIGHT - 30
    this.dx = 30 // player horizontal speed
  }

  move(direction) {
    let x = this.x + direction * this.dx
    x = Math.max(0, x)
    x = Math.min(x, WIDTH - 60)
    this.x = x
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
    this.dy = -100 // vertical speed | bullets go up
    this.spawnTime = Date.now()
  }

  position(time) {
    const timePassed = (time - this.spawnTime) / 1000
    const y = this.y + timePassed * this.dy
    return [this.x, y]
  }

  draw(time) {
    ctx.fillStyle = 'red';
    const [x,y] = this.position(time)
    ctx.fillRect(x, y, 10, 10);
  }
}

const player = new Player()
const bullets = []

document.addEventListener('keydown', event => {
  // firing bullets when 'Space' is pressed
  if (event.key === ' ') {
    const bullet = new Bullet(player.x + 25, player.y - 10)
    bullets.push(bullet)
  }

  if (event.key === 'ArrowRight') {
    player.move(1)
  }
  if (event.key === 'ArrowLeft') {
    player.move(-1)
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

  // call display again later
  requestAnimationFrame(display)
}
display()
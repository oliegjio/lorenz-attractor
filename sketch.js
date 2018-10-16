let x = 0.01
let y = 0
let z = 0

const a = 10
const b = 28
const c = 8 / 3

const dt = 0.01

let vertices = []

function setup() {
    createCanvas(800, 600, WEBGL)
}

function draw() {
    background(0)

    let dx = a * (y - x)
    let dy = x * (b - z) - y
    let dz = x * y - c * z

    x += dx * dt
    y += dy * dt
    z += dz * dt

    vertices.push({x: x, y: y, z: z})

    scale(5)
    stroke(255)
    noFill()

    beginShape(LINES)
    for (const v of vertices) {
        vertex(v.x, v.y, v.z)
    }
    endShape()
}

import THREE from "three"

import "./styles"

// Maths
const PI = Math.PI
const rand = (min, max) => min + Math.random() * (max - min)
const randInt = (min, max) => Math.round(rand(min, max))

const colors = {
  ambient: 0x050505,
  global: 0x00BCD4,
}

const c = document.querySelector(".js-Canvas")

// init the scene
let WIDTH = window.innerWidth,
  HEIGHT = window.innerHeight,
  RATIO = WIDTH / HEIGHT,
  FIELDVIEW = 60,
  NEAR = 1,
  FAR = 1000

c.width = WIDTH
c.height = HEIGHT

const CAMERA = new THREE.PerspectiveCamera(FIELDVIEW, RATIO, NEAR, FAR)
const SCENE = new THREE.Scene()
const RENDERER = new THREE.WebGLRenderer({
  alpha: true,
  antialias: true,
  canvas: c,
})

RENDERER.setSize(WIDTH, HEIGHT)

CAMERA.position.set(0, 0, 180)
CAMERA.lookAt(new THREE.Vector3())

// draw the scene
const nbBoxes = 250,
  minSize = 1,
  maxSize = 10,
  boxSize = (maxSize - minSize) / nbBoxes

const rad = 90, a = .08, vZ = .015, vX = .002

const boxes = new THREE.Object3D()
const boxMat = new THREE.MeshLambertMaterial()

for (let i = nbBoxes ; i > 0 ; i--) {
  const size = minSize + boxSize * i

  const boxParent = new THREE.Object3D()
  const boxGeom = new THREE.BoxGeometry(size, size, size)
  const box = new THREE.Mesh(boxGeom, boxMat)

  boxParent.add(box)
  box.position.y = randInt(rad - size, rad + size)
  box.position.z = randInt(-size, size)

  boxes.add(boxParent)
  boxParent.rotation.z = i * a
}

const lights = new THREE.Object3D()
const ambientLight = new THREE.AmbientLight(colors.ambient)
const globalLight = new THREE.PointLight(colors.global, 1, rad + 30)

lights.add(ambientLight)
lights.add(globalLight)

SCENE.add(boxes)
SCENE.add(lights)

// update the scene
function update() {
  boxes.children.forEach((box, index, _boxes) => {
    if (index === 0 || _boxes[index - 1].rotation.z > a) {
      box.rotation.z += vZ
    }

    if (index === 0 || _boxes[index - 1].rotation.x > vX) {
      box.rotation.x += vX
    }

    let sign = index % 2 === 0 ? 1 : -1

    box.children[0].rotation.x += sign * rand(.01, .04)
    box.children[0].rotation.y += sign * rand(.01, .04)
  })
}

window.onresize = () => {
  WIDTH = window.innerWidth
  HEIGHT = window.innerHeight
  RATIO = WIDTH / HEIGHT

  RENDERER.setSize(WIDTH, HEIGHT)

  CAMERA.aspect = RATIO
  CAMERA.updateProjectionMatrix()
}

// render the scene
function render() {
  update()
  RENDERER.render(SCENE, CAMERA)
}

(function loop() {
  render()
  requestAnimationFrame(loop)
})()

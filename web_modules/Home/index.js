import THREE from "three"
import TweenLite from "gsap"

import "./styles"

// Maths
const PI = Math.PI
const rand = (min, max) => min + Math.random() * (max - min)
const randInt = (min, max) => Math.round(rand(min, max))

const colors = {
    primary: 0x000000,
    secondary: 0x2196F3,
}

// init the scene
let WIDTH = window.innerWidth,
    HEIGHT = window.innerHeight,
    RATIO = WIDTH / HEIGHT,
    FIELDVIEW = 60,
    NEAR = 1,
    FAR = 5000,
    MOUSE = new THREE.Vector2()

const CAMERA = new THREE.PerspectiveCamera(FIELDVIEW, RATIO, NEAR, FAR)
const SCENE = new THREE.Scene()
const RENDERER = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true,
    canvas: document.querySelector(".js-Canvas"),
})

RENDERER.setSize(WIDTH, HEIGHT)

CAMERA.position.set(0, 0, 200)
CAMERA.lookAt(new THREE.Vector3())

// draw the scene
const nbBoxes = 100
const minSize = 1, maxSize = 10
const boxSize = (maxSize - minSize) / nbBoxes

const rad = 100, a = .02

const boxes = new THREE.Object3D()
const boxMat = new THREE.MeshLambertMaterial()

const spheres = []
const sphMat = new THREE.MeshBasicMaterial({ color: colors.secondary })

for (let i = nbBoxes ; i > 0 ; i--) {
    const size = minSize + boxSize * i
    const posY = size * 2 + randInt(-10, 10)

    const boxGeom = new THREE.BoxGeometry(size, size, size)
    const boxParent = new THREE.Object3D()
    const box = new THREE.Mesh(boxGeom, boxMat)

    box.position.y = randInt(rad - size, rad + size)
    box.position.z = randInt(-size, size)

    const sphGeom = new THREE.SphereGeometry(rand(.1, .6), 4, 4)
    const sphParent = new THREE.Object3D()
    const sph = new THREE.Mesh(sphGeom, sphMat)
    const sphLight = new THREE.PointLight(colors.secondary, .15, posY)

    sph.position.y = posY
    sphLight.position.y = posY

    sphParent.add(sph)
    sphParent.add(sphLight)
    sphParent.position.y = box.position.y
    sphParent.rotation.x = rand(0, PI)

    spheres.push(sphParent)

    boxParent.add(box)
    boxParent.add(sphParent)
    boxParent.rotation.z = i * a

    boxes.add(boxParent)
}

const lights = new THREE.Object3D()
const ambientLight = new THREE.AmbientLight(colors.primary)

lights.add(ambientLight)

SCENE.add(lights)
SCENE.add(boxes)

// update the scene
function update() {
    boxes.children.forEach((box, index, _boxes) => {
        if (index === 0 || _boxes[index - 1].rotation.z > a) {
            box.rotation.z += .01
        }

        if (index === 0 || _boxes[index - 1].rotation.x > .005) {
            box.rotation.x += .005
        }

        let sign = index % 2 === 0 ? 1 : -1

        box.children[0].rotation.x += sign * rand(.01, .05)
        box.children[0].rotation.y += sign * rand(.01, .05)
    })

    spheres.forEach((sph, index, _spheres) => sph.rotation.x += (index + 1) / _spheres.length * .05)
}

window.onmousemove = (e) => {
    MOUSE.x = (e.clientX / WIDTH) * 2 - 1
    MOUSE.y = - (e.clientY / HEIGHT) * 2 + 1

    TweenLite.to(CAMERA.rotation, 1, {
        x: MOUSE.y * PI / 32,
        y: -MOUSE.x * PI / 32,
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

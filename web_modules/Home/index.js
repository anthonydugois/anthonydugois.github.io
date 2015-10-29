import THREE from "three"
import "./styles"

const PI = Math.PI

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
const RAYCASTER = new THREE.Raycaster()
const RENDERER = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true,
    canvas: document.querySelector(".js-Canvas"),
})

RENDERER.setSize(WIDTH, HEIGHT)

CAMERA.position.set(0, 0, 300)
CAMERA.lookAt(new THREE.Vector3())

// helpers
// SCENE.add(new THREE.AxisHelper(500))

// draw the scene
const nbBoxes = 100
const minSize = 1, maxSize = 10
const boxSize = (maxSize - minSize) / nbBoxes

const rad = 100, a = .02

const boxes = new THREE.Object3D()
const boxMat = new THREE.MeshBasicMaterial({ color: 0x000000 })

for (let i = nbBoxes ; i > 0 ; i--) {
    const size = minSize + boxSize * i
    const boxGeom = new THREE.BoxGeometry(size, size, size)
    const boxParent = new THREE.Object3D()
    const box = new THREE.Mesh(boxGeom, boxMat)

    box.position.y = randInt(rad - size, rad + size)
    box.position.z = randInt(-size, size)

    boxParent.add(box)

    boxParent.rotation.z = i * a

    boxes.add(boxParent)
}

SCENE.add(boxes)

function rand(min, max) {
    return min + Math.random() * (max - min)
}

function randInt(min, max) {
    return Math.round(rand(min, max))
}

// update the scene
function update() {
    boxes.children.forEach((box, index, _boxes) => {
        if (index === 0 || _boxes[index - 1].rotation.z > a) {
            box.rotation.z += .01
        }

        let sign = index % 2 === 0 ? 1 : -1

        box.children[0].rotation.x += sign * rand(.01, .05)
        box.children[0].rotation.y += sign * rand(.01, .05)
    })

    RAYCASTER.setFromCamera(MOUSE, CAMERA)

    let intersects = RAYCASTER.intersectObjects(SCENE.children, true)

    intersects.forEach((intersect, index) => {
        intersect.object.position.y += 10
    })
}

window.onmousemove = (e) => {
    MOUSE.x = (e.clientX / WIDTH) * 2 - 1
    MOUSE.y = - (e.clientY / HEIGHT) * 2 + 1
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

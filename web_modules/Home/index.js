import "./styles"
import THREE from "three"
import oc from "three-orbit-controls"

const OrbitControls = oc(THREE)

// mathematic constants
const PI = Math.PI

// init the scene
let WIDTH = window.innerWidth,
    HEIGHT = window.innerHeight,
    RATIO = WIDTH / HEIGHT,
    FIELDVIEW = 60,
    NEAR = 1,
    FAR = 5000

const CAMERA = new THREE.PerspectiveCamera(FIELDVIEW, RATIO, NEAR, FAR),
    SCENE = new THREE.Scene(),
    RENDERER = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
    })

RENDERER.setSize(WIDTH, HEIGHT)
document.querySelector("#three").appendChild(RENDERER.domElement)

CAMERA.position.set(0, 0, 300)
CAMERA.lookAt(new THREE.Vector3())

const controls = new OrbitControls(CAMERA)

// handle resize
window.onresize = () => {
    WIDTH = window.innerWidth
    HEIGHT = window.innerHeight
    RATIO = WIDTH / HEIGHT

    RENDERER.setSize(WIDTH, HEIGHT)

    CAMERA.aspect = RATIO
    CAMERA.updateProjectionMatrix()
}

// helpers
SCENE.add(new THREE.AxisHelper(500))

// let's draw the scene!
// ...

// events
window.onmousemove = function (e) {}

// udate the scene
function update() {}

// rendering
function render() {
    update()
    RENDERER.render(SCENE, CAMERA)
}

(function loop() {
    render()
    requestAnimationFrame(loop)
})()

import "./styles"
import getCubesMatrix from "./cubesMatrix"

import THREE from "three"
import oc from "three-orbit-controls"
import TweenLite from "gsap"

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

CAMERA.position.set(0, 150, 150)
CAMERA.lookAt(new THREE.Vector3())

// let's draw the scene!
const o = new THREE.Object3D()

const lightX = new THREE.DirectionalLight(0xeeeeee, 1),
    lightX2 = lightX.clone(),
    lightY = new THREE.DirectionalLight(0xdddddd, 1),
    lightY2 = lightY.clone(),
    lightZ = new THREE.DirectionalLight(0xcccccc, 1),
    lightZ2 = lightZ.clone()

lightX.position.set(100, 0, 0)
lightY.position.set(0, 100, 0)
lightZ.position.set(0, 0, 100)

lightX2.position.set(-100, 0, 0)
lightY2.position.set(0, -100, 0)
lightZ2.position.set(0, 0, -100)

o.add(lightX)
o.add(lightY)
o.add(lightZ)

o.add(lightX2)
o.add(lightY2)
o.add(lightZ2)

// dimensions
const size = 5,
    gap = .2,
    d = size + gap

// objects
const cubes = new THREE.Object3D(),
    cube = new THREE.Mesh(
        new THREE.BoxGeometry(size, size, size),
        new THREE.MeshLambertMaterial()
    )

// matrixes
let cubesMatrix = getCubesMatrix(d),
    randomCube = THREE.Math.randInt(0, cubesMatrix.length - 1)

// define cubes
cubesMatrix.forEach((coords, index) => {
    const _cube = (index !== randomCube) ? cube.clone() : new THREE.Object3D()

    cubes.add(_cube)

    _cube.position.x = coords.x
    _cube.position.y = coords.y
    _cube.position.z = coords.z
})

o.add(cubes)

o.applyMatrix(new THREE.Matrix4().makeRotationY(PI / 4))

SCENE.add(o)

// udate the scene
let toRight = true

update()

function update(spd = .5) {
    for (let cubesCount = cubes.children.length, emptyIndex = 0 ; emptyIndex < cubesCount ; emptyIndex++) {
        if (cubes.children[emptyIndex].type === "Object3D") {
            let cubeIndex

            if (toRight) {
                cubeIndex = emptyIndex + 1
            } else {
                cubeIndex = emptyIndex - 1
            }

            if (cubeIndex > cubesCount - 1) {
                cubeIndex = cubesCount - 1
                toRight = false
            }

            if (cubeIndex < 0) {
                cubeIndex = 0
                toRight = true
            }

            const empty = cubes.children[emptyIndex],
                cube = cubes.children[cubeIndex]

            cubes.children[emptyIndex] = cube
            cubes.children[cubeIndex] = empty

            const fakeEmpty = empty.clone(),
                fakeCube = cube.clone()

            TweenLite.to(cube.position, spd, {
                x: fakeEmpty.position.x,
                y: fakeEmpty.position.y,
                z: fakeEmpty.position.z,
            })

            empty.position.x = fakeCube.position.x
            empty.position.y = fakeCube.position.y
            empty.position.z = fakeCube.position.z

            break
        }
    }

    setTimeout(update, 1000 * spd)
}

window.onmousemove = (e) => {
    const x = e.pageX,
        halfX = x / 2,
        halfW = WIDTH / 2,
        y = e.pageY,
        halfY = y / 2,
        halfH = HEIGHT / 2

    TweenLite.to(o.rotation, 1, {
        x: (halfY / halfH) * PI,
        y: -(halfX / halfW) * PI,
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

// rendering
function render() {
    RENDERER.render(SCENE, CAMERA)
}

(function loop() {
    render()
    requestAnimationFrame(loop)
})()

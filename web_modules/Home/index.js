import "./styles"

import THREE from "three"
import TweenLite from "gsap"

const PI = Math.PI
const styles = {
    bigCube: [0xEEEEEE, 0xDDDDDD, 0xCCCCCC],
    minCube: [0x4FC3F7, 0x03A9F4, 0x0288D1],
}

// init the scene
let WIDTH = 500
let HEIGHT = 250
let RATIO = WIDTH / HEIGHT
let FIELDVIEW = 60
let NEAR = 1
let FAR = 5000

const CAMERA = new THREE.PerspectiveCamera(FIELDVIEW, RATIO, NEAR, FAR)
const SCENE = new THREE.Scene()
const RENDERER = new THREE.WebGLRenderer({
    canvas: document.querySelector("#three"),
    alpha: true,
    antialias: true,
})

RENDERER.setSize(WIDTH, HEIGHT)

CAMERA.position.set(40, 40, 40)
CAMERA.lookAt(new THREE.Vector3())

// let's draw the scene!
const globalObject = new THREE.Object3D()

// objects
const length = 3, size = 6
const bigCube = new THREE.Object3D()
const cubes = new THREE.Object3D()
const cubeGeometry = new THREE.BoxGeometry(size, size, size)
const cubeMaterial = new THREE.MeshFaceMaterial([
    new THREE.MeshBasicMaterial({ color: styles.bigCube[0] }),
    new THREE.MeshBasicMaterial({ color: styles.bigCube[0] }),
    new THREE.MeshBasicMaterial({ color: styles.bigCube[1] }),
    new THREE.MeshBasicMaterial({ color: styles.bigCube[1] }),
    new THREE.MeshBasicMaterial({ color: styles.bigCube[2] }),
    new THREE.MeshBasicMaterial({ color: styles.bigCube[2] }),
])
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial)

// define cubes
getCube({ size, length }).forEach((coords, index) => {
    const _cube = (index !== 0) ? cube.clone() : new THREE.Object3D()

    cubes.add(_cube)

    _cube.position.set(coords.x, coords.y, coords.z)
})

bigCube.add(cubes)

const minCubes = new THREE.Object3D()
const minCubeMaterial = new THREE.MeshFaceMaterial([
    new THREE.MeshBasicMaterial({ color: styles.minCube[0] }),
    new THREE.MeshBasicMaterial({ color: styles.minCube[0] }),
    new THREE.MeshBasicMaterial({ color: styles.minCube[1] }),
    new THREE.MeshBasicMaterial({ color: styles.minCube[1] }),
    new THREE.MeshBasicMaterial({ color: styles.minCube[2] }),
    new THREE.MeshBasicMaterial({ color: styles.minCube[2] }),
])
const minCube = new THREE.Mesh(new THREE.BoxGeometry(size, size, size), minCubeMaterial)
const xminCube = new THREE.Mesh(new THREE.BoxGeometry(size / 3, size / 3, size / 3), minCubeMaterial)
const radius = size * length * 3 / 2

minCube.position.set(radius, 0, 0)
xminCube.position.set(radius, -size / 2, size * 3 / 2)

minCubes.add(minCube)
minCubes.add(xminCube)

globalObject.add(bigCube)
globalObject.add(minCubes)

SCENE.add(globalObject)

function getCube({ size, length }) {
    let vectors = []
    let gap = .2
    let d = size + gap
    let half = Math.floor(length / 2)

    for (let f = 0 ; f < length ; f++) {
        let lines = []

        for (let l = 0 ; l < length ; l++) {
            let cols = []

            for (let c = 0 ; c < length ; c++) {
                let x = (c - half) * d
                let y = (l - half) * d
                let z = (f - half) * d

                // place the big cube on center
                if (length % 2 === 0) {
                    x += size / 2
                    y += size / 2
                    z += size / 2
                }

                cols.push(new THREE.Vector3(x, y, z))
            }

            if (l % 2 === 0) {
                lines.push(...cols)
            } else {
                lines.push(...cols.reverse())
            }
        }

        if (f % 2 === 0) {
            vectors.push(...lines)
        } else {
            vectors.push(...lines.reverse())
        }
    }

    return vectors
}

// udate the scene
moveCubes(true, .5)

function moveCubes(toRight, spd) {
    for (let cubesCount = cubes.children.length, emptyIndex = 0 ; emptyIndex < cubesCount ; emptyIndex++) {
        if (cubes.children[emptyIndex].type === "Object3D") {
            let cubeIndex

            if (toRight) cubeIndex = emptyIndex + 1
            else cubeIndex = emptyIndex - 1

            if (cubeIndex < 0) {
                cubeIndex = 1
                toRight = true
            }

            if (cubeIndex > cubesCount - 1) {
                cubeIndex = cubesCount - 2
                toRight = false
            }

            const empty = cubes.children[emptyIndex]
            const cube = cubes.children[cubeIndex]
            const _empty = empty.clone()
            const _cube = cube.clone()

            cubes.children[emptyIndex] = cube
            cubes.children[cubeIndex] = empty

            TweenLite.to(cube.position, spd, { ..._empty.position })
            empty.position.set(_cube.position.x, _cube.position.y, _cube.position.z)

            break
        }
    }

    setTimeout(() => moveCubes(toRight, spd), 1000 * spd)
}

function update() {
    minCube.rotation.x += 0.01
    minCube.rotation.y += 0.01

    xminCube.rotation.x -= 0.01
    xminCube.rotation.y -= 0.01

    minCubes.rotation.y += .005
}

window.onmousemove = (e) => {
    const x = e.pageX, y = e.pageY
    const halfW = window.innerWidth / 2, halfH = window.innerHeight / 2
    const pX = x / halfW - 1, pY = y / halfH - 1
    const a = PI / 2

    TweenLite.to(bigCube.rotation, 1, {
        x: pY * a,
        y: pX * a,
    })
}

// rendering
function render() {
    update()
    RENDERER.render(SCENE, CAMERA)
}

(function loop() {
    render()
    requestAnimationFrame(loop)
})()

import "./styles"

import THREE from "three"
import TweenLite from "gsap"

// mathematic constants
const PI = Math.PI

// init the scene
let WIDTH = window.innerWidth
let HEIGHT = window.innerHeight
let RATIO = WIDTH / HEIGHT
let FIELDVIEW = 60
let NEAR = 1
let FAR = 5000

const CAMERA = new THREE.PerspectiveCamera(FIELDVIEW, RATIO, NEAR, FAR)
const SCENE = new THREE.Scene()
const RENDERER = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
    })

RENDERER.setSize(WIDTH, HEIGHT)

document.querySelector("#three").appendChild(RENDERER.domElement)

CAMERA.position.set(150, 150, 150)
CAMERA.lookAt(new THREE.Vector3())

SCENE.add(new THREE.AxisHelper(500))

// let's draw the scene!
const globalObject = new THREE.Object3D()

// objects
const length = 3, size = 5
const bigCube = new THREE.Object3D()
const cubes = new THREE.Object3D()
const cubeGeometry = new THREE.BoxGeometry(size, size, size)
const cubeMaterial = new THREE.MeshFaceMaterial([
    new THREE.MeshBasicMaterial({ color: 0xeeeeee }),
    new THREE.MeshBasicMaterial({ color: 0xeeeeee }),
    new THREE.MeshBasicMaterial({ color: 0xdddddd }),
    new THREE.MeshBasicMaterial({ color: 0xdddddd }),
    new THREE.MeshBasicMaterial({ color: 0xcccccc }),
    new THREE.MeshBasicMaterial({ color: 0xcccccc }),
])
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial)

// matrixes
let cubesMatrix = getCube({ size, length })
let randomCube = THREE.Math.randInt(0, cubesMatrix.length - 1)

// define cubes
cubesMatrix.forEach((coords, index) => {
    const _cube = (index !== randomCube) ? cube.clone() : new THREE.Object3D()

    cubes.add(_cube)

    _cube.position.set(coords.x, coords.y, coords.z)
})

bigCube.add(cubes)

globalObject.add(bigCube)

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
update(true, .5)

function update(toRight, spd) {
    for (let cubesCount = cubes.children.length, emptyIndex = 0 ; emptyIndex < cubesCount ; emptyIndex++) {
        if (cubes.children[emptyIndex].type === "Object3D") {
            let cubeIndex

            if (toRight) cubeIndex = emptyIndex + 1
            else cubeIndex = emptyIndex - 1

            if (cubeIndex < 0) {
                cubeIndex = 0
                toRight = true
            }

            if (cubeIndex > cubesCount - 1) {
                cubeIndex = cubesCount - 1
                toRight = false
            }

            const empty = cubes.children[emptyIndex],
                cube = cubes.children[cubeIndex],
                _cube = cube.clone()

            cubes.children[emptyIndex] = cube
            cubes.children[cubeIndex] = empty

            TweenLite.to(cube.position, spd, { ...empty.position })

            empty.position.set(_cube.position.x, _cube.position.y, _cube.position.z)

            break
        }
    }

    setTimeout(() => update(toRight, spd), 1000 * spd)
}

window.onmousemove = (e) => {
    const x = e.pageX, y = e.pageY
    const halfW = WIDTH / 2, halfH = HEIGHT / 2
    const pX = x / halfW - 1, pY = y / halfH - 1
    const a = PI / 2

    TweenLite.to(bigCube.rotation, 1, {
        x: pY * a,
        y: pX * a,
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

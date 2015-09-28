import "./styles"

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

SCENE.add(new THREE.AxisHelper(500))

// let's draw the scene!
const bigCube = new THREE.Object3D()

// lights
/*const lightX = new THREE.DirectionalLight(0xeeeeee, 1),
    lightY = new THREE.DirectionalLight(0xdddddd, 1),
    lightZ = new THREE.DirectionalLight(0xcccccc, 1)

lightX.position.x = 100
lightY.position.y = 100
lightZ.position.z = 100

bigCube.add(lightX)
bigCube.add(lightY)
bigCube.add(lightZ)*/

// objects
const length = 3, size = 5,
    cubes = new THREE.Object3D(),
    cube = new THREE.Mesh(new THREE.BoxGeometry(size, size, size), new THREE.MeshLambertMaterial())

// matrixes
let cubesMatrix = getCube({ size, length }),
    randomCube = THREE.Math.randInt(0, cubesMatrix.length - 1)

function getCube({ size, length }) {
    let vectors = [],
        gap = .2,
        d = size + gap,
        half = Math.floor(length / 2)

    for (let f = 0 ; f < length ; f++) {
        let lines = []

        for (let l = 0 ; l < length ; l++) {
            let cols = []

            for (let c = 0 ; c < length ; c++) {
                let x = (c - half) * d,
                    y = (l - half) * d,
                    z = (f - half) * d

                cols.push(new THREE.Vector3(x, y, z))
            }

            if (l % 2 === 0) lines.push(...cols)
            else lines.push(...cols.reverse())
        }

        if (f % 2 === 0) vectors.push(...lines)
        else vectors.push(...lines.reverse())
    }

    return vectors
}

// define cubes
cubesMatrix.forEach((coords, index) => {
    const _cube = (index !== randomCube) ? cube.clone() : new THREE.Object3D()

    cubes.add(_cube)

    _cube.position.set(coords.x, coords.y, coords.z)
})

bigCube.add(cubes)

SCENE.add(bigCube)

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
    const x = e.pageX,
        halfX = x / 2,
        halfW = WIDTH / 2,
        y = e.pageY,
        halfY = y / 2,
        halfH = HEIGHT / 2

    TweenLite.to(bigCube.rotation, 1, {
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

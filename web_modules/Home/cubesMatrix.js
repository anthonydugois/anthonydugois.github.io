import THREE from "three"

export default (d) => [
    new THREE.Vector3(-d, d, d),
    new THREE.Vector3(-d, 0, d),
    new THREE.Vector3(-d, -d, d),
    new THREE.Vector3(0, -d, d),
    new THREE.Vector3(0, 0, d),
    new THREE.Vector3(0, d, d),
    new THREE.Vector3(d, d, d),
    new THREE.Vector3(d, 0, d),
    new THREE.Vector3(d, -d, d),

    new THREE.Vector3(d, -d, 0),
    new THREE.Vector3(d, 0, 0),
    new THREE.Vector3(d, d, 0),
    new THREE.Vector3(0, d, 0),
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(0, -d, 0),
    new THREE.Vector3(-d, -d, 0),
    new THREE.Vector3(-d, 0, 0),
    new THREE.Vector3(-d, d, 0),

    new THREE.Vector3(-d, d, -d),
    new THREE.Vector3(-d, 0, -d),
    new THREE.Vector3(-d, -d, -d),
    new THREE.Vector3(0, -d, -d),
    new THREE.Vector3(0, 0, -d),
    new THREE.Vector3(0, d, -d),
    new THREE.Vector3(d, d, -d),
    new THREE.Vector3(d, 0, -d),
    new THREE.Vector3(d, -d, -d),
]

import React, { Component } from "react"
import React3 from "react-three-renderer"
import * as THREE from "three"
// import centroid from "triangle-centroid"
import reindex from "mesh-reindex"
import unindex from "unindex-mesh"
import SvgMesh from "svg-mesh-3d"
import ComplexFactory from "three-simplicial-complex"

const Complex = ComplexFactory(THREE)
const { positions, cells } = SvgMesh('M148.41,152.55a12.47,12.47,0,0,0,7.51,3.59v4.53q-13.59-.66-34.37-.66-23.21,0-34.37.66v-4.53q8.51-.33,12.21-2.1a6.29,6.29,0,0,0,3.7-6.19q0-3.42-2.76-10.72L86.75,100H37.46l-6,15.58q-6.19,15.91-6.19,25.19,0,8.4,5,11.71t15,3.65v4.53Q30.06,160,17.24,160,6.85,160,0,160.67v-4.53q11.27-1.88,19.45-23.76L71.05,0Q74.7.33,78.9.33q4.42,0,7.85-.33l54.92,141.66Q144.65,149.18,148.41,152.55ZM62.66,34.37,39.23,95.47H85.09Z')
const complex = Complex(reindex(unindex(positions, cells)))

/*function centroids(positions, cells) {
  const centroids = new Float32Array(cells.length * 3)

  cells.forEach(([f0, f1, f2], index) => {
    const triangle = [positions[f0], positions[f1], positions[f2]]
    const center = centroid(triangle)
    const dir = new THREE.Vector3().fromArray(center)

    centroids[index] = dir
    centroids[index + 1] = dir
    centroids[index + 2] = dir
  })

  return centroids
}*/

class Scene extends Component {
  constructor(props, context) {
    super(props, context)

    this.camera = new THREE.Vector3(0, 0, 100)
    this.origin = new THREE.Vector3()
    // this.centroids = centroids(positions, cells)
    this.svgGeometry = {
      name: complex.name,
      vertices: complex.vertices,
      colors: complex.colors,
      faceVertexUvs: complex.faceVertexUvs,
      faces: complex.faces,
      dynamic: complex.dynamic,
    }
  }

  state = {
    width: window.innerWidth,
    height: window.innerHeight,
  }

  componentDidMount() {
    window.addEventListener('resize', this.onResize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize)
  }

  onResize = () => {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }

  onAnimate() {}

  render() {
    const { width, height } = this.state

    return (
      <React3
        mainCamera="camera"
        width={ width }
        height={ height }
        antialias={ true }
        clearColor={ 0x08151c }
        onAnimate={ this.onAnimate }>
        <scene>
          <perspectiveCamera
            name="camera"
            fov={ 75 }
            aspect={ width / height }
            near={ 0.1 }
            far={ 1000 }
            position={ this.camera }
            lookAt={ this.origin } />

          <axisHelper size={ 500 } />

          <mesh
            position={ new THREE.Vector3(0, 0, 50) }
            scale={ new THREE.Vector3(22, 22, 22) }>
            <geometry
              ref={ (geometry) => this.geometry = geometry }
              { ...this.svgGeometry } />
            <shaderMaterial
              side={ THREE.DoubleSide }
              wireframe={ true } />
          </mesh>
        </scene>
      </React3>
    )
  }
}

export default Scene

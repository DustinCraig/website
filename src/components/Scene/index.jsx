import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import Desk from './Desk'
import Resume from './Resume'
import { Canvas } from '@react-three/fiber'

const Scene = () => {
    let renderRef = useRef()
    useEffect(() => {
        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        )
        const renderer = new THREE.WebGLRenderer()
        renderer.setSize(window.innerWidth, window.innerHeight)
        //     renderer.setPixelRatio(window.innerWidth, window.innerHeight)
        renderRef.appendChild(renderer.domElement)

        camera.position.z = 30

        const geometry = new THREE.TorusGeometry(10, 3, 16, 100)
        const material = new THREE.MeshBasicMaterial({
            color: 0xff6347,
            wireframe: true,
        })
        const torus = new THREE.Mesh(geometry, material)
        scene.add(torus)
        const light = new THREE.HemisphereLight(0xffffbb, 0x080820, 1)
        scene.add(light)
        //renderer.render(scene, camera)

        const animate = () => {
            requestAnimationFrame(animate)
            torus.rotation.x += 0.01
            renderer.render(scene, camera)
        }

        animate(renderer, scene)
    }, [])

    return (
        <div
            style={{ width: '100%', height: '100%' }}
            ref={(ref) => (renderRef = ref)}
        >
            {/* <canvas
                id='__threjs__canvas'
                style={{ position: 'fixed', top: 0, left: 0 }}
            ></canvas> */}
            {/* <Canvas orthographic camera={{ zoom: 50, position: [0, 30, 100] }}>
                <ambientLight />
                <pointLight position={[10, 15, 10]} />
                <directionalLight intensity={4.16} />
                <Suspense fallback={<> </>}>
                    <Resume />
                    <Desk />
                </Suspense>
            </Canvas> */}
        </div>
    )
}

export default Scene

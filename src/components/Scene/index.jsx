import React, { Suspense } from 'react'
import Desk from './Desk'
import Resume from './Resume'
import { Canvas } from '@react-three/fiber'

const Scene = () => {
    return (
        <div style={{ width: '100%', height: '100%' }}>
            <Canvas orthographic camera={{ zoom: 50, position: [0, 30, 100] }}>
                <ambientLight />
                <pointLight position={[10, 15, 10]} />
                <directionalLight intensity={4.16} />
                <Suspense fallback={<> </>}>
                    <Resume />
                    <Desk />
                </Suspense>
            </Canvas>
        </div>
    )
}

export default Scene

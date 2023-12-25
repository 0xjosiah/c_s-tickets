import { Canvas } from '@react-three/fiber'
import AnimatedRoutes from './components/AnimatedRoutes'
import Scene from './Scene'
import useFullScreen from './hooks/useFullScreen'
import OrientationControls from './components/OrientationControls'
import { useState } from 'react'
import { Vector3 } from 'three'

const camConfig = {
    // fov: 45,
    // near: 0.1,
    // far: 200,
    // position: [ 4.25, .6, 7.75 ]
}


export default function App() {
    useFullScreen()

    const [targetPosition, setTargetPosition] = useState(new Vector3(0, 0, 0));


    return (
        <>
            <Canvas shadows camera={{...camConfig}}>
                <Scene targetPosition={targetPosition} />
                <OrientationControls setTargetPosition={setTargetPosition} />
            </Canvas>

            <AnimatedRoutes />
        </>
    )
}
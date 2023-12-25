import { Plane } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"

export default function Pic({ image, position, size, targetPosition }) {
    const planeRef = useRef(null)

    // const { x, y, z } = targetPosition
    useFrame(({ mouse }) => {
        if (planeRef.current) {
            planeRef.current.lookAt(.5 * mouse.x, .5 * mouse.y, Math.PI)
            // planeRef.current.lookAt(targetPosition)
        }
    })

    const width = image.image.width / 750 * size
    const height = image.image.height / 750 * size

    return (
        <Plane args={[ width, height ]} position={position} ref={planeRef}>
            <meshBasicMaterial map={image} />
        </Plane>
    )
}
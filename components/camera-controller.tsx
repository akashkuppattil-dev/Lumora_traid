"use client"

import { useRef } from "react"
import { useFrame, useThree } from "@react-three/fiber"
import * as THREE from "three"

interface CameraControllerProps {
    scrollProgress: number
}

export function CameraController({ scrollProgress }: CameraControllerProps) {
    const { camera } = useThree()

    useFrame(() => {
        // Fix camera at a constant distance to stop forward movement while scrolling
        const targetZ = 12
        camera.position.z = THREE.MathUtils.lerp(camera.position.z, targetZ, 0.1)

        // Slight FOV change for cinematic effect (optional)
        // camera.fov = THREE.MathUtils.lerp(45, 50, scrollProgress)
        // camera.updateProjectionMatrix()
    })

    return null
}

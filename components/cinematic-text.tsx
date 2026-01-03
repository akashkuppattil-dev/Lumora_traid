"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Text } from "@react-three/drei"
import * as THREE from "three"

interface CinematicTextProps {
    scrollProgress: number
    text: string
    scrollStart: number
    scrollEnd: number
    yOffset?: number
    xOffset?: number
    entryXOffset?: number
    isStatic?: boolean
    fontSize?: number
    zStart?: number
    persistEnd?: boolean
}

export function CinematicText({
    scrollProgress,
    text,
    scrollStart,
    scrollEnd,
    yOffset = 0,
    xOffset = 0,
    entryXOffset = 0,
    isStatic = false,
    fontSize = 0.7,
    zStart = -12,
    persistEnd = false
}: CinematicTextProps) {
    const groupRef = useRef<THREE.Group>(null)

    useFrame(() => {
        if (groupRef.current) {
            // Calculate current progress for this text
            const progress = THREE.MathUtils.clamp(
                (scrollProgress - scrollStart) / (scrollEnd - scrollStart),
                0,
                1
            )

            // Double eased progress for ultra-smooth cinematic motion
            const easedProgress = THREE.MathUtils.smootherstep(progress, 0, 1)

            // Snappier Z-travel for Phase 2 keywords
            const z = isStatic ? 5 : THREE.MathUtils.lerp(zStart, 5, easedProgress)

            // X entry logic
            const x = THREE.MathUtils.lerp(xOffset + entryXOffset, xOffset, easedProgress)

            // Subtle rotation as it emerges
            const rotateX = isStatic ? 0 : THREE.MathUtils.lerp(0.2, 0, easedProgress)

            groupRef.current.position.set(x, yOffset, z)
            groupRef.current.rotation.x = rotateX

            // Sharp fade in/out (5% margin instead of 15% for snappy reveal)
            const fadeMargin = 0.05
            let opacity = progress < fadeMargin ? progress / fadeMargin : 1

            // Only fade out if not persisting
            if (!persistEnd && progress > (1 - fadeMargin)) {
                opacity = (1 - progress) / fadeMargin
            }

            // Direct material access for all children
            groupRef.current.traverse((child) => {
                if (child instanceof THREE.Mesh && child.material) {
                    const material = child.material as THREE.MeshStandardMaterial
                    material.opacity = opacity
                    material.transparent = true
                    material.needsUpdate = true
                }
            })
        }
    })

    const fontPath = "/rigamesh/OpenType-TT/Rigamesh.ttf"

    return (
        <group ref={groupRef}>
            {/* Primary High-Glow Layer */}
            <Text
                font={fontPath}
                fontSize={fontSize}
                maxWidth={12}
                textAlign="center"
                anchorX="center"
                anchorY="middle"
                letterSpacing={0.2}
            >
                {text}
                <meshStandardMaterial
                    color="#ffffff"
                    transparent
                    opacity={1}
                    emissive="#00f2ff"
                    emissiveIntensity={1.8}
                    metalness={0.5}
                    roughness={0.2}
                />
            </Text>
            {/* Sub-glow / Shadow Layer for '3D Blending' */}
            <Text
                font={fontPath}
                fontSize={fontSize}
                maxWidth={12}
                textAlign="center"
                anchorX="center"
                anchorY="middle"
                letterSpacing={0.2}
                position={[0, 0, -0.05]}
            >
                {text}
                <meshBasicMaterial
                    color="#002233"
                    transparent
                    opacity={0.5}
                />
            </Text>
        </group>
    )
}

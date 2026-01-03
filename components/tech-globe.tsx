"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Sphere, Icosahedron } from "@react-three/drei"
import * as THREE from "three"

interface TechGlobeProps {
    scrollProgress: number
}

export function TechGlobe({ scrollProgress }: TechGlobeProps) {
    const mainGroupRef = useRef<THREE.Group>(null)
    const nodesRef = useRef<THREE.Points>(null)
    const linesRef = useRef<THREE.Mesh>(null)
    const subGlobe1Ref = useRef<THREE.Mesh>(null)
    const subGlobe2Ref = useRef<THREE.Mesh>(null)
    const subGlobe3Ref = useRef<THREE.Mesh>(null)

    useFrame((state) => {
        const time = state.clock.getElapsedTime()

        if (mainGroupRef.current) {
            // Overall system slow rotation
            mainGroupRef.current.rotation.y += 0.002
            mainGroupRef.current.rotation.x = Math.sin(time * 0.2) * 0.05
        }

        if (nodesRef.current) {
            // Subtle pulse effect for nodes
            const scale = 1 + Math.sin(time * 2) * 0.05
            nodesRef.current.scale.set(scale, scale, scale)
        }

        // Sub-globe 1: Fast, close orbit
        if (subGlobe1Ref.current) {
            const orbitSpeed = 1.2
            const orbitRadius = 4.5
            subGlobe1Ref.current.position.x = Math.cos(time * orbitSpeed) * orbitRadius
            subGlobe1Ref.current.position.z = Math.sin(time * orbitSpeed) * orbitRadius
            subGlobe1Ref.current.position.y = Math.sin(time * orbitSpeed * 0.5) * 1.5
            subGlobe1Ref.current.rotation.y += 0.02
        }

        // Sub-globe 2: Medium speed, tilted orbit
        if (subGlobe2Ref.current) {
            const orbitSpeed = 0.8
            const orbitRadius = 6
            const tilt = Math.PI / 4
            subGlobe2Ref.current.position.x = Math.cos(time * orbitSpeed) * orbitRadius
            subGlobe2Ref.current.position.y = Math.sin(time * orbitSpeed) * orbitRadius * Math.sin(tilt)
            subGlobe2Ref.current.position.z = Math.sin(time * orbitSpeed) * orbitRadius * Math.cos(tilt)
            subGlobe2Ref.current.rotation.x += 0.01
        }

        // Sub-globe 3: Slow, far orbit, vertical-ish
        if (subGlobe3Ref.current) {
            const orbitSpeed = 0.5
            const orbitRadius = 7.5
            subGlobe3Ref.current.position.y = Math.cos(time * orbitSpeed) * orbitRadius
            subGlobe3Ref.current.position.z = Math.sin(time * orbitSpeed) * orbitRadius
            subGlobe3Ref.current.position.x = Math.sin(time * orbitSpeed * 0.8) * 2
            subGlobe3Ref.current.rotation.z += 0.01
        }
    })

    const matteSilverProps = {
        color: "#9ca3af",
        metalness: 0.6,
        roughness: 0.8,
        envMapIntensity: 0.5,
    }

    const glowColor = "#00f2ff"

    return (
        <group ref={mainGroupRef}>
            {/* The Neural Globe Structure */}
            <group scale={0.9}>
                {/* Connecting Lines */}
                <mesh ref={linesRef}>
                    <icosahedronGeometry args={[2.5, 3]} />
                    <meshStandardMaterial
                        color={glowColor}
                        emissive={glowColor}
                        emissiveIntensity={2}
                        wireframe
                        transparent
                        opacity={0.4}
                    />
                </mesh>

                {/* Nodes (Glowing Points) */}
                <points ref={nodesRef}>
                    <icosahedronGeometry args={[2.5, 3]} />
                    <pointsMaterial
                        color={glowColor}
                        size={0.15}
                        sizeAttenuation
                        transparent
                        opacity={1}
                    />
                </points>

                {/* Inner Glow Sphere */}
                <Sphere args={[2.45, 32, 32]}>
                    <meshStandardMaterial
                        color="#002233"
                        transparent
                        opacity={0.2}
                    />
                </Sphere>
            </group>

            {/* Core Glow Light */}
            <pointLight intensity={3} color={glowColor} distance={15} />

            {/* Orbiting Sub-globes (Matte) */}
            <Sphere ref={subGlobe1Ref} args={[0.4, 32, 32]}>
                <meshStandardMaterial {...matteSilverProps} />
            </Sphere>

            <Sphere ref={subGlobe2Ref} args={[0.3, 32, 32]}>
                <meshStandardMaterial {...matteSilverProps} />
            </Sphere>

            <Sphere ref={subGlobe3Ref} args={[0.5, 32, 32]}>
                <meshStandardMaterial {...matteSilverProps} />
            </Sphere>

            {/* General Lighting */}
            <ambientLight intensity={0.3} />
            <pointLight position={[10, 10, 10]} intensity={1.5} />
            <pointLight position={[-10, -5, -10]} color="#3b82f6" intensity={1} />
        </group>
    )
}

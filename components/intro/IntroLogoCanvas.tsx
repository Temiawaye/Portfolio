"use client"

import { Suspense, useEffect, useMemo, useRef } from "react"
import { useGLTF } from "@react-three/drei"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Box3, Group, Vector3 } from "three"

const MODEL_URL = "/models/at-monogram-3d.glb"
const ROTATION_SPEED = (Math.PI * 2) / 4

type IntroLogoCanvasProps = {
    reducedMotion: boolean
    onReady: () => void
    onError: () => void
}

function LogoModel({ reducedMotion, onReady }: Omit<IntroLogoCanvasProps, "onError">) {
    const groupRef = useRef<Group>(null)
    const viewport = useThree((state) => state.viewport)
    const { scene } = useGLTF(MODEL_URL, false)

    const { model, horizontalRadius, halfHeight } = useMemo(() => {
        const clonedScene = scene.clone(true)
        clonedScene.updateMatrixWorld(true)

        const bounds = new Box3().setFromObject(clonedScene)
        const center = bounds.getCenter(new Vector3())
        clonedScene.position.sub(center)
        clonedScene.updateMatrixWorld(true)

        const centeredBounds = new Box3().setFromObject(clonedScene)
        const maxHorizontalRadius = Math.max(
            Math.hypot(centeredBounds.min.x, centeredBounds.min.z),
            Math.hypot(centeredBounds.min.x, centeredBounds.max.z),
            Math.hypot(centeredBounds.max.x, centeredBounds.min.z),
            Math.hypot(centeredBounds.max.x, centeredBounds.max.z),
        )
        const maxHalfHeight = Math.max(
            Math.abs(centeredBounds.min.y),
            Math.abs(centeredBounds.max.y),
        )

        return {
            model: clonedScene,
            horizontalRadius: Math.max(maxHorizontalRadius, 0.001),
            halfHeight: Math.max(maxHalfHeight, 0.001),
        }
    }, [scene])

    const fittedScale = Math.min(
        (viewport.width * 0.10) / horizontalRadius,
        (viewport.height * 0.10) / halfHeight,
    )

    useFrame((_, delta) => {
        if (!reducedMotion && groupRef.current) {
            groupRef.current.rotation.y -= delta * ROTATION_SPEED
        }
    })

    useEffect(() => {
        let paintedFrame = 0
        const firstFrame = requestAnimationFrame(() => {
            paintedFrame = requestAnimationFrame(onReady)
        })

        return () => {
            cancelAnimationFrame(firstFrame)
            cancelAnimationFrame(paintedFrame)
        }
    }, [onReady])

    return (
        <group ref={groupRef} scale={fittedScale}>
            <primitive object={model} />
        </group>
    )
}

function WebGLContextGuard({ onError }: Pick<IntroLogoCanvasProps, "onError">) {
    const gl = useThree((state) => state.gl)

    useEffect(() => {
        const canvas = gl.domElement
        const handleContextLoss = (event: Event) => {
            event.preventDefault()
            onError()
        }

        canvas.addEventListener("webglcontextlost", handleContextLoss)
        return () => canvas.removeEventListener("webglcontextlost", handleContextLoss)
    }, [gl, onError])

    return null
}

export default function IntroLogoCanvas({ reducedMotion, onReady, onError }: IntroLogoCanvasProps) {
    return (
        <Canvas
            aria-hidden="true"
            camera={{ position: [0, 0, 6], fov: 35 }}
            dpr={[1, 1.5]}
            frameloop={reducedMotion ? "demand" : "always"}
            gl={{ antialias: true, alpha: false, powerPreference: "high-performance" }}
            className="size-full"
        >
            <color attach="background" args={["#000000"]} />
            <ambientLight intensity={0.9} />
            <directionalLight position={[3, 4, 6]} intensity={2.1} />
            <directionalLight position={[-3, -2, 3]} intensity={0.55} />
            <WebGLContextGuard onError={onError} />
            <Suspense fallback={null}>
                <LogoModel reducedMotion={reducedMotion} onReady={onReady} />
            </Suspense>
        </Canvas>
    )
}

useGLTF.preload(MODEL_URL, false)

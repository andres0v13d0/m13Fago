import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import ModelLoader from "./ModelLoader";

export default function SceneViewer({ modelUrl, play, speed }) {
    return (
        <Canvas camera={{ position: [0, 2, 5], fov: 50 }} style={{ height: "500px" }}>
            <ambientLight intensity={1.2} />
            <directionalLight position={[5, 5, 5]} intensity={1.5} />
            <ModelLoader url={modelUrl} play={play} speed={speed} />
            <OrbitControls />
        </Canvas>
    );
}

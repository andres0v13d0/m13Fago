import React, { useState } from "react";
import SceneViewer from "./SceneViewer";
import "./styles.css";

export default function App() {
    const [play, setPlay] = useState(false);
    const modelUrl = "https://m13-modelos-privado.s3.amazonaws.com/modelos/m13.glb"; // cambia si tienes otro

    return (
        <div className="app-container">
            <h1>Bacteriófago M13 - Visualización 3D</h1>
            <SceneViewer modelUrl={modelUrl} play={play} speed={0.8} />
            <button onClick={() => setPlay(!play)}>
                {play ? "Pausar" : "Reproducir"}
            </button>
        </div>
    );
}

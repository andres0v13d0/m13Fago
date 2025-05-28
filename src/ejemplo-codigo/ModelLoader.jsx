import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

export default function ModelLoader({ url, play = false, speed = 1 }) {
    const { scene, animations } = useGLTF(url);
    const mixer = useRef(null);
    const actions = useRef([]);

    useEffect(() => {
        if (scene && animations.length > 0) {
            mixer.current = new THREE.AnimationMixer(scene);
            actions.current = animations.map((clip) => {
                const action = mixer.current.clipAction(clip);
                action.setLoop(THREE.LoopOnce);
                action.setEffectiveTimeScale(speed);
                return action;
            });
        }
    }, [scene, animations]);

    useEffect(() => {
        if (actions.current.length > 0) {
            actions.current.forEach((action) => {
                if (play) action.play();
                else action.stop();
            });
        }
    }, [play]);

    useEffect(() => {
        return () => mixer.current?.stopAllAction();
    }, []);

    useGLTF.preload(url);

    return <primitive object={scene} />;
}

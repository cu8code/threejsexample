import style from "../../styles/Home.module.css";
import { createRoot } from "react-dom/client";
import React, { useMemo, StrictMode } from "react";

import { Canvas } from "@react-three/fiber";

import { BufferAttribute } from "three";
import { OrbitControls } from "@react-three/drei";

import Layout from "../../layouts/layout";

function BufferPoints({ count = 1000 }) {
  const points = useMemo(() => {
    const p = new Array(count).fill(0).map((v) => (0.5 - Math.random()) * 7.5);
    // return p;
    return new BufferAttribute(new Float32Array(p), 3);
  }, [count]);
  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach={"attributes-position"} {...points} />
      </bufferGeometry>
      <pointsMaterial size={0.1} color={0xff00ff} sizeAttenuation={true} />
    </points>
  );
}

export default function App() {
  return (
    <Layout>
      <div className={style.fullScreen}>
        <Canvas color="lightblue">
          <color attach="background" args={["#f5efe6"]} />
          <BufferPoints />
          <OrbitControls />
        </Canvas>
      </div>
    </Layout>
  );
}

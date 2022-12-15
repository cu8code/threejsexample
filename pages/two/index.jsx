import style from "../../styles/Home.module.css";

import { useState, useRef } from "react";
import { a, useSpring } from "@react-spring/three";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import Layout from "../../layouts/layout";

function Cube() {
  const [scale, setScale] = useState(false);
  const props = useSpring({
    scale: scale ? [2, 2, 2] : [1, 1, 1],
  });
  const mesh = useRef();
  useFrame(() => {
    mesh.current.rotation.y += 0.01;
  });
  return (
    <a.mesh
      ref={mesh}
      onPointerOver={() => setScale(true)}
      onPointerOut={() => setScale(false)}
      scale={props.scale}
    >
      <boxGeometry attach={"geometry"} args={[1, 1, 1]} />
      <meshBasicMaterial attach={"material"} color={"red"} wireframe={true} />
    </a.mesh>
  );
}

export default function App() {
  return (
    <Layout>
      <div className={style.fullScreen}>
        <Canvas color="lightblue">
          <color attach="background" args={["#f5efe6"]} />
          <Cube />
          <OrbitControls />
        </Canvas>
      </div>
    </Layout>
  );
}

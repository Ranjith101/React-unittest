// src/Model.jsx
import { useGLTF } from "@react-three/drei";

export function Model({ path = "/models/Duck.glb", scale = 0.5 }) {
  const { scene } = useGLTF(path);
  return <primitive object={scene} scale={scale} />;
}

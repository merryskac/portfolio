/* eslint-disable react/no-unknown-property */
import React, { useRef } from "react";
import pentool from "/3d/pentool.glb";
import { Float, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function Pentool(props) {
  const { nodes, materials, scene } = useGLTF(pentool);
  const ref = useRef();

  useFrame(() => {
    if (ref.current) {
    }
  });
  return (
    <Float
      speed={5.5} // kecepatan gerakan naik-turun & rotasi
      rotationIntensity={0.5} // intensitas rotasi
      floatIntensity={0.8} // seberapa jauh melayang
    >
      <directionalLight position={[0, 0, 5]} intensity={2} />
      <primitive object={scene} scale={3} rotation={[1.5, 0, 0]} />
    </Float>
  );
}

useGLTF.preload(pentool);

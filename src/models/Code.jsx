/* eslint-disable react/no-unknown-property */
import React, { useRef } from "react";
import code from "/3d/code.glb";
import { Float, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function Code(props) {
  const { nodes, materials, scene } = useGLTF(code);
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
      <primitive object={scene} scale={3} rotation={[1.5, 0, 0]} />
    </Float>
  );
}

useGLTF.preload(code);

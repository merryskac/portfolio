import { Canvas, useThree } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import Experience from "../components/Experience";
import Loader from "../components/Loader";
import Tablet from "../models/Tablet";
import { Physics } from "@react-three/rapier";
import NameText from "../models/Text";
import Header from "../components/Header";
import Portfolio from "../components/Portfolio";

const Mainpage = () => {
  const canvasRef = useRef();
  const adjustScreenSize = () => {
    let screenScale, screenPosition;
    let rotation = [0, 0, 0];
    screenPosition = [0, 0, -300];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }

    return [screenScale, screenPosition, rotation];
  };

  const CameraLogger = () => {
    const { camera } = useThree();
    canvasRef.current = camera;

    useEffect(() => {
      console.log("Camera Position:", camera.position);
      camera.lookAt(0, 10, 0);
    }, [camera]);

    return null; // Tidak perlu me-render apa pun
  };

  console.log(canvasRef);

  const [tabScale, tabPosition, tabRotation] = adjustScreenSize();

  return (
    // <>
    <section className="w-full h-[100vh] relative">
      <Canvas
        ref={canvasRef}
        className={`w-full h-full bg-transparent `}
        // 15,6,10
        camera={{ position: [0, 10, 15], fov: 30, near: 1, far: 1000 }}
      >
        {/* suspense wrapper for rendering the loading screen*/}
        <Suspense fallback={<Loader />}>
          {/* <NameText position={[0, 0, -10]} /> */}
          <Physics>
            {/* sun */}
            <directionalLight position={[1, 1, 1]} intensity={2} />
            {/* brightness */}
            <ambientLight intensity={0.5} />
            {/* one direcction */}
            {/* <pointLight /> */}
            {/* <spotLight position={[0,5,0]}/> */}
            {/* sky color */}
            <hemisphereLight />
            {/* <Tablet
						position={tabPosition}
						scale={tabScale}
						rotation={tabRotation}
						isRotating = {rotating}
						setIsRotating={isRotating}
            /> */}
            <Experience canvas={canvasRef} />
          </Physics>
        </Suspense>
      </Canvas>
    </section>
    // </>
  );
};

export default Mainpage;

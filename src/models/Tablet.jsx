/* eslint-disable react/prop-types */
import { a } from "@react-spring/three";
import { useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import Gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import Portfolio from "../components/Portfolio";
import tabletScene from "/3d/Sketchfab_Scene.glb";

export const Tablet = ({ ...props }) => {
  console.log(props.canvasRef);

  const [isTabClick, setIsTabClick] = useState(false);

  const [isTabInFront, setIsTabInFront] = useState(false);

  const [showPortfolio, setShowPortfolio] = useState(false);

  const getTargetTransform = () => {
    const isMobile = window.innerWidth < 768;

    return {
      position: isMobile ? { x: 0, y: -8, z: 12 } : { x: 0.5, y: -9.5, z: 15 },
      rotation: isMobile
        ? { x: 0.7, y: 0.1, z: 0.03 }
        : { x: 0.8805, y: 0.1636, z: 0.0673 },
    };
  };

  const [targetTransform, setTargetTransform] = useState(getTargetTransform());

  // Animasi fade-in untuk HTML

  const { camera } = useThree();

  const { nodes, materials } = useGLTF(tabletScene);

  const tabRef = useRef();
  const isMobile = window.innerWidth < 768;

  const adjustScreenSize = () => {
    let screenScale, screenPosition, rotation;

    if (window.innerWidth < 768) {
      screenScale = [1, 1, 1];
      screenPosition = [0, 7, 0];
      rotation = [0, 0, 0]; // Tablet tegak, menghadap kamera
    } else {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, 7, 0];
      rotation = [-0.1, 0, 0]; // Sedikit miring untuk layar besar
    }

    return [screenScale, screenPosition, rotation];
  };

  const [tabScale, tabPosition, tabRotation] = adjustScreenSize();

  useEffect(() => {
    const handleResize = () => {
      const [newScale, newPosition, newRotation] = adjustScreenSize();

      const frontTransform = getTargetTransform();

      if (tabRef.current) {
        // Update scale
        tabRef.current.scale.set(...newScale);

        // Jika tablet sedang di depan (showPortfolio), gunakan posisi & rotasi depan
        if (showPortfolio) {
          Gsap.to(tabRef.current.position, {
            duration: 0.5,
            ...frontTransform.position,
          });

          tabRef.current.rotation.set(
            frontTransform.rotation.x,
            frontTransform.rotation.y,
            frontTransform.rotation.z
          );
        } else {
          // Jika tablet belum dibuka, kembalikan ke posisi awal
          Gsap.to(tabRef.current.position, {
            duration: 0.5,
            x: newPosition[0],
            y: newPosition[1],
            z: newPosition[2],
          });

          tabRef.current.rotation.set(...newRotation);
        }
      }
    };

    // Jalankan saat mount
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [showPortfolio]);

  const tabClick = () => {
    setIsTabClick(true);
    if (!isTabInFront) {
      const { position, rotation } = targetTransform;

      const tl = Gsap.timeline();
      tl.to(tabRef.current.scale, {
        duration: 1,
        x: 1,
        y: 1,
        z: 1,
      })
        .to(
          tabRef.current.position,
          {
            duration: 0.7,
            ...position,
            onComplete: () => {
              tabRef.current.lookAt(camera.position);
            },
          },
          "<"
        )
        .to(
          tabRef.current.rotation,
          {
            duration: 0.7,
            ...rotation,
            onUpdate: () => {
              setTimeout(() => {
                setShowPortfolio(true);
              }, 730);
            },
            onComplete: () => {
              tabRef.current.lookAt(camera.position);
            },
          },
          "<"
        );

      setIsTabInFront(true);
    }
  };

  console.log(props);

  return (
    <>
      {showPortfolio && (
        <Portfolio
          show={showPortfolio}
          onClose={() => {
            const tl = Gsap.timeline();

            tl.to(tabRef.current.scale, {
              duration: 1,
              x: isMobile ? 1 : 1.5,
              y: isMobile ? 1 : 1.5,
              z: isMobile ? 1 : 1.5,
            })
              .to(
                tabRef.current.position,
                {
                  duration: 1,
                  x: 0,
                  y: 7,
                  z: 0,
                },
                "<"
              )
              .to(
                tabRef.current.rotation,
                {
                  duration: 1,
                  x: 0,
                  y: 0,
                  z: 0,
                  onUpdate: () => {
                    setShowPortfolio(false);
                  },
                },
                "<"
              );

            setIsTabInFront(false);
          }}
        />
      )}
      <RigidBody
        colliders="cuboid"
        restitution={0.1}
        friction={1}
        angularDamping={5}
        linearDamping={1}
        rotation={[-0.3, 0, 0]}
      >
        <a.group {...props}>
          <mesh
            //2.1
            position={tabPosition}
            scale={tabScale}
            rotation={tabRotation}
            onClick={() => tabClick()}
            ref={tabRef}
            geometry={nodes.Cube002_Material_0.geometry}
            material={materials.Material}
          ></mesh>
        </a.group>
      </RigidBody>
    </>
  );
};

export default Tablet;

import { Text } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import font from "/font/LexendDeca-VariableFont_wght.ttf";

const TextOverlay = () => {
  const textRef = useRef();
  const textRef2 = useRef();
  const textRef3 = useRef();
  const isMobile = window.innerWidth < 768;
  const { camera } = useThree();
  useFrame(() => {
    if (textRef.current) {
      textRef.current.lookAt(camera.position);
      textRef2.current.lookAt(camera.position);
      textRef3.current.lookAt(camera.position);
    }
  });
  return (
    <>
      <Text
        ref={textRef}
        position={[0, -3, -9]}
        fontSize={isMobile ? 0.5 : 0.8}
        color="#2786df"
        anchorX="center"
        anchorY="top"
        font={
          import.meta.env.BASE_URL + "/font/LexendDeca-VariableFont_wght.ttf"
        }
        fontWeight={0.5}
        outlineWidth={0.02}
        outlineColor="#2786df"
      >
        Hi, I&apos;m Merryska
      </Text>
      <Text
        ref={textRef2}
        position={[0, -3, -7]}
        fontSize={isMobile ? 0.27 : 0.35}
        color="#2786df"
        anchorX="center"
        anchorY="top"
        font={
          import.meta.env.BASE_URL + "/font/LexendDeca-VariableFont_wght.ttf"
        }
        fontWeight={0.8}
      >
        Software Developer, Graphic Designer
      </Text>
      <Text
        ref={textRef3}
        position={[0, -1, 3]}
        fontSize={0.2}
        color="#2786df"
        anchorX="center"
        anchorY="top"
        font={
          import.meta.env.BASE_URL + "/font/LexendDeca-VariableFont_wght.ttf"
        }
        fontWeight={0.8}
      >
        click the tab
      </Text>
    </>
  );
};

export default TextOverlay;

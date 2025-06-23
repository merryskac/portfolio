import { Box } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { Color } from "three";

const Floor = () => {
  return (
    <>
      <RigidBody type="fixed">
        <Box position={[0, -5, 0]} args={[70, 1, 70]}>
          <meshStandardMaterial color={new Color(0x40d0ff)} />
        </Box>
      </RigidBody>
    </>
  );
};

export default Floor;

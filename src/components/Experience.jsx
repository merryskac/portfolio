/* eslint-disable react/prop-types */
import Floor from "../models/Floor";
import Tablet from "../models/Tablet";
import TextOverlay from "../models/Text";

const Experience = ({ ...props }) => {
  console.log(props);
  return (
    <>
      {/* <OrbitControls/> */}
      <Tablet canvasRef={props.canvas} />
      <TextOverlay />
      {/* <Table /> */}
      <Floor />
    </>
  );
};

export default Experience;

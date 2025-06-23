/* eslint-disable react/no-unknown-property */
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Pentool } from "../models/Pentool";
import DesignProjects from "./DesignProject";
// import code from "../assets/3d/code.glb";

const Designer = () => {
  return (
    <>
      <div className="mt-20">
        <h2 className="text-4xl font-bold inline-block text-black drop-shadow-[4px_4px_0px_rgba(252,113,121,1)]">
          About me
        </h2>
        <div className="xl:flex gap-6 mt-10 text-black">
          <div>
            <p className="text-lg">
              I'm a self-taught Graphic designer with experience in branding,
              social-media posts, and product design
              <span className="font-bold"> branding</span>,
              <span className="font-bold"> social-media posts</span>
              <span className="font-bold"> product design</span> and
              <span className="font-bold"> 3d Modelling</span> and
            </p>
            <div>
              <h2 className="font-bold text-xl mt-8">
                Technologies I've worked with:
              </h2>
              <ul className="list-disc ml-5 leading-8">
                <li>
                  <span className="font-bold">Application:</span> Adobe
                  Photoshop, Adobe Illustrator, Figma, Blender 3d
                </li>
              </ul>
            </div>
          </div>

          {/* 3D preview */}
          <div className="w-full xl:w-1/2 h-64">
            <Canvas>
              <ambientLight intensity={0.5} />
              <directionalLight position={[2, 2, 2]} />
              <Suspense fallback={null}>
                <Pentool />
              </Suspense>
              <OrbitControls enableZoom={false} />
            </Canvas>
          </div>
        </div>
      </div>

      {/* <div className="mt-28">
        <h2 className="text-4xl font-bold mt-10 inline-block text-black drop-shadow-[4px_4px_0px_rgba(52,154,71,1)]">
          Experiences
        </h2>

        <Card activeTab="designer" />
      </div> */}
      <div className="mt-16">
        <h2 className="text-4xl font-bold mt-10 inline-block text-black drop-shadow-[4px_4px_0px_rgba(253,194,30,1)]">
          Projects
        </h2>
        <DesignProjects />
      </div>
    </>
  );
};

export default Designer;

/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense } from "react";
import { Code } from "../models/Code";
import Card from "../models/Cards";
import { exp } from "../data/devExp";
import DevProjects from "./DevProjects";
// import code from "../assets/3d/code.glb";

const Dev = () => {
  return (
    <>
      <div className="mt-20">
        <h2 className="text-4xl font-bold inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text drop-shadow-[0_2px_30px_rgba(0,0,0,1)]">
          About me
        </h2>
        <div className="xl:flex gap-6 mt-10">
          <div>
            <p className="text-lg">
              I'm a software developer, currently focused on
              <span className="font-bold"> backend development</span>, also
              trying to be <span className="font-bold">fullstack</span>.
            </p>
            <div>
              <h2 className="font-bold text-xl mt-8">
                Technologies I've worked with:
              </h2>
              <ul className="list-disc ml-5 leading-8">
                <li>
                  <span className="font-bold">Languages:</span> JavaScript,
                  TypeScript, Python, C#
                </li>
                <li>
                  <span className="font-bold">Frameworks:</span> Node.js,
                  Nest.js, Express, React, Next.js
                </li>
                <li>
                  <span className="font-bold">Databases:</span> MongoDB,
                  PostgreSQL, MySQL
                </li>
                <li>
                  <span className="font-bold">Tools:</span> Git
                </li>
                <li>
                  <span className="font-bold">Others:</span> Supabase, S3
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
                <Code />
              </Suspense>
              <OrbitControls enableZoom={false} />
            </Canvas>
          </div>
        </div>
      </div>

      <div className="mt-28">
        <h2 className="text-4xl font-bold mt-10 inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text drop-shadow-[0_2px_30px_rgba(0,0,0,1)]">
          Experiences
        </h2>

        <Card />
      </div>
      <div className="mt-28">
        <h2 className="text-4xl font-bold mt-10 inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text drop-shadow-[0_2px_30px_rgba(0,0,0,1)]">
          Experiment Study
        </h2>
        <DevProjects />
      </div>
    </>
  );
};

export default Dev;

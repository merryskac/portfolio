/* eslint-disable react/prop-types */
"use client";

import { Environment, Html, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Suspense,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Fanmo",
    description: "Social media posts",
    image: import.meta.env.BASE_URL + "/img/fanmo.png",
    project_images: import.meta.env.BASE_URL + "/img/designs/1.jpg",
  },
  {
    title: "Graciella Music School Concert 2024",
    description: "Social media posts, backdrop, proposal, certificates",
    image: import.meta.env.BASE_URL + "/img/concert24.png",
    project_images: import.meta.env.BASE_URL + "/img/designs/2.jpg",
  },
  {
    title: "Graciella Music School Concert 2022",
    description:
      "Social media posts, backdrop, proposal, certificates, utilities",
    image: import.meta.env.BASE_URL + "/img/concert2022.png",
    project_images: import.meta.env.BASE_URL + "/img/designs/3.jpg",
  },
  {
    title: "Graciella Music School Palu",
    description: "Brand design",
    image: import.meta.env.BASE_URL + "/img/graciella-music.png",
    project_images: import.meta.env.BASE_URL + "/img/designs/4.jpg",
  },
  {
    title: "Others",
    description: "Other graphic design projects",
    image: import.meta.env.BASE_URL + "/img/designs/other.jpg",
    project_images: import.meta.env.BASE_URL + "/img/designs/5.jpg",
  },
];

const objects = [
  {
    id: 1,
    path: import.meta.env.BASE_URL + "3d/kecapi.glb",
    thumb: import.meta.env.BASE_URL + "/img/designs/kecapi.jpg",
    position: [0, 0, 10],
    light: [1, 1, 1],
    scale: 3,
    orbit: [0, 2, 0],
    description:
      "Traditional harp (object from National Museum in Central Sulawesi, was made for research purpose)",
  },
  {
    id: 2,
    path: import.meta.env.BASE_URL + "3d/kipas_angin.glb",
    thumb: import.meta.env.BASE_URL + "/img/designs/kipas.jpg",
    position: [0, 0, 10],
    light: [1, 1, 1],
    scale: 5,
    orbit: [0, 2, 0],
    description:
      "Brass-Fan (object from National Museum in Central Sulawesi, was made for research purpose)",
  },
  {
    id: 3,
    path: import.meta.env.BASE_URL + "3d/taiganja.glb",
    thumb: import.meta.env.BASE_URL + "/img/designs/tg.jpg",
    position: [0, 0, 10],
    light: [1, 1, 1],
    scale: 10,
    orbit: [0, 4.5, 0],
    description:
      "Taiganja (traditional artifacts, object from National Museum in Central Sulawesi, was made for research purpose)",
  },
  {
    id: 4,
    path: import.meta.env.BASE_URL + "3d/robot.glb",
    thumb: import.meta.env.BASE_URL + "/img/designs/robot.jpg",
    position: [0, 10, 25],
    light: [1, 1, 1],
    scale: 1,
    orbit: [0, 5, 0],
    description:
      "Modeling for game purpose and learning for rigging (failed, device not supported)",
  },
  {
    id: 5,
    path: import.meta.env.BASE_URL + "3d/orang.glb",
    thumb: import.meta.env.BASE_URL + "/img/designs/orang.jpg",
    position: [0, 10, 25],
    light: [1, 1, 1],
    scale: 1,
    orbit: [0, 5, 0],
    description:
      "Modeling for game purpose and learning for rigging (failed, device not supported)",
  },
  {
    id: 6,
    path: import.meta.env.BASE_URL + "3d/kevin.glb",
    thumb: import.meta.env.BASE_URL + "/img/designs/kev.jpg",
    position: [0, 5, 10],
    light: [1, 2, 1],
    scale: 5,
    orbit: [0, 2.5, 0],
    description: "First time learning shading using shader editor",
  },
  {
    id: 7,
    path: import.meta.env.BASE_URL + "3d/BLUEFISH.glb",
    thumb: import.meta.env.BASE_URL + "/img/designs/fish.jpg",
    position: [0, 0, 10],
    light: [1, 1, 1],
    scale: 5,
    orbit: [0, 2, 0],
    description: "First time learning shading using shader editor",
  },
  // Tambahkan model lainnya
];

const Loader = () => (
  <Html center>
    <div className="flex items-center justify-center h-full w-full">
      <div className="animate-spin h-8 w-8 border-t-2 border-b-2 border-gray-600 rounded-full"></div>
    </div>
  </Html>
);

function ModelViewer({ object }) {
  const gltf = useGLTF(object.path);

  useEffect(() => {
    return () => {
      gltf.scene?.traverse((child) => {
        if (child.isMesh) {
          child.geometry.dispose();
          if (child.material.map) child.material.map.dispose();
          child.material.dispose();
        }
      });
    };
  }, [gltf]);

  return (
    <primitive object={gltf.scene} scale={object.scale} position={[0, 0, 0]} />
  );
}

export default function DesignProjects() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const [selectedProject, setSelectedProject] = useState(null); // <- modal data
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [is3d, setIs3d] = useState(false);
  const [activeObject, setActiveObject] = useState(objects[0]);

  useLayoutEffect(() => {
    if (!cardsRef.current || !containerRef.current) return;

    cardsRef.current.forEach((card) => {
      if (!card) return;

      // Set posisi awal
      gsap.set(card, { opacity: 0, yPercent: 20 });

      // Masuk (animasi scroll)
      gsap.to(card, {
        opacity: 1,
        yPercent: 0,
        ease: "none",
        scrollTrigger: {
          trigger: card,
          scroller: "#scroll-container",
          start: "top 90%",
          end: "top 70%",
          scrub: true,
          // markers: true, // opsional
        },
      });

      card.addEventListener("mouseenter", () => {
        gsap.to(card, { scale: 1.05, duration: 0.3 });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(card, { scale: 1, duration: 0.3 });
      });
    });

    ScrollTrigger.refresh();
  }, []);

  // useEffect(() => {
  //   objects.forEach((obj) => useGLTF.preload(obj.path)); // ✅ Ini aman, jika obj.path adalah string
  // }, []);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    setIs3d(false);
  };

  const openModal3d = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    setIs3d(true);
  };
  return (
    <div ref={containerRef} className="px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {projects.map((project, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className="project-card bg-white border-2 border-black rounded-2xl p-6 text-black transform-gpu transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl will-change-transform cursor-pointer"
            onClick={() => openModal(project)}
          >
            <img
              src={project.image}
              alt={project.title}
              className="rounded-xl mb-4 w-full object-cover h-40"
            />
            <h3 className="text-xl font-semibold mb-2 text-black  drop-shadow">
              {project.title}
            </h3>
            <p className="text-xs text-gray-300 mb-2">{project.tech}</p>
            <p className=" mb-4">{project.description}</p>
            <div className="">
              <a
                href=""
                target="_blank"
                className="flex items-center justify-end gap-2"
              >
                <p>Details</p>
                <FaExternalLinkAlt
                  className="text-black hover:text-blue-400 transition"
                  size={20}
                />
              </a>
            </div>
          </div>
        ))}
        <div
          // key={index}
          ref={(el) => (cardsRef.current[cardsRef.current.length] = el)}
          className="project-card bg-white border-2 border-black rounded-2xl p-6 text-black transform-gpu transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl will-change-transform cursor-pointer"
          onClick={() =>
            openModal3d({
              title: "3d",
              description: "3d",
              image: "/img/blender.png",
            })
          }
        >
          <img
            src={import.meta.env.BASE_URL + "/img/blender.png"}
            alt={"blender"}
            className="rounded-xl mb-4 w-full object-cover h-40"
          />
          <h3 className="text-xl font-semibold mb-2 text-black  drop-shadow">
            {"3d Modelling"}
          </h3>
          <p className=" mb-4">{"Blender 3d"}</p>
          <div className="">
            <a
              href=""
              target="_blank"
              className="flex items-center justify-end gap-2"
            >
              <p>Details</p>
              <FaExternalLinkAlt
                className="text-black hover:text-blue-400 transition"
                size={20}
              />
            </a>
          </div>
        </div>
      </div>
      {isModalOpen && selectedProject && is3d && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-3xl relative flex flex-col max-h-[95vh] shadow-lg overflow-hidden">
            {/* Tombol close */}
            <button
              className="absolute top-4 right-4 text-black text-lg z-10"
              onClick={closeModal}
            >
              ✕
            </button>

            <div className="overflow-y-auto pt-16 px-6 pb-6 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent">
              <h2 className="text-2xl font-bold mb-4 text-black">
                3D Modelling
              </h2>

              {/* Thumbnail Selector */}
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 mb-6">
                {objects.map((obj, idx) => (
                  <img
                    key={obj.id}
                    src={obj.thumb}
                    onClick={() => setActiveObject(obj)}
                    className={`cursor-pointer rounded-xl border-2 ${
                      activeObject?.id === obj.id
                        ? "border-blue-500"
                        : "border-transparent"
                    } hover:border-blue-300 transition`}
                    alt={"3D Thumbnail " + idx}
                  />
                ))}
              </div>
              <p className="text-gray-500 text-xs">Spin the object around</p>
              {/* 3D Preview */}
              {activeObject && (
                <div className="w-full h-64 sm:h-96 bg-gray-100 rounded-xl overflow-hidden shadow-md mb-4">
                  <Canvas
                    key={activeObject.id}
                    dpr={1}
                    frameloop="demand"
                    camera={{ position: [0, 0, 10], fov: 30 }}
                    gl={{ preserveDrawingBuffer: true }}
                  >
                    <ambientLight />
                    <Environment preset="warehouse" background={false} />
                    <Suspense fallback={<Loader />}>
                      <ModelViewer
                        key={activeObject.id}
                        object={activeObject}
                      />
                    </Suspense>
                    <OrbitControls
                      enableZoom={true}
                      target={activeObject.orbit}
                      // autoRotate={true}
                    />
                  </Canvas>
                </div>
              )}

              <p className="text-gray-600 text-sm mb-4">
                {activeObject?.description}
              </p>
              <h2 className="text-2xl font-bold mb-4 text-black mt-5 ">
                Some render result from Blender
              </h2>
              <div>
                <img
                  className=""
                  src={import.meta.env.BASE_URL + "/img/render/render1.jpeg"}
                  alt=""
                />
                <img
                  className="mt-5 mb-3"
                  src={import.meta.env.BASE_URL + "/img/render/render2.jpeg"}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {isModalOpen && selectedProject && !is3d && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          {/* Modal wrapper */}
          <div className="bg-white rounded-2xl w-full max-w-2xl relative flex flex-col max-h-[90vh] shadow-lg overflow-hidden">
            {/* Tombol close tetap di atas */}
            <button
              className="absolute top-4 right-4 text-black text-lg z-10"
              onClick={closeModal}
            >
              ✕
            </button>

            {/* Scrollable content */}
            <div className="overflow-y-auto pt-16 px-6 pb-6 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent">
              <h2 className="text-2xl font-bold mb-1 text-black">
                {selectedProject.title}
              </h2>
              <img
                src={selectedProject?.project_images || selectedProject.image}
                alt={selectedProject.title}
                className="rounded-xl mb-4 w-full object-cover"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

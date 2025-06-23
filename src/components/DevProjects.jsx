"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Explore Untad",
    description:
      "Help visitor to know their location in Tadulako University using voice assistant",
    image: "/img/image.png",
    url: "https://thesis-ph76.vercel.app/",
    github_url: "https://github.com/merryskac/thesis",
    tech: "Text-to-speech, ReactJs, ExpressJs, MongoDB, Leaflet",
    screenshot: [
      "/img/dev/jju1.jpg",
      "/img/dev/jju2.jpg",
      "/img/dev/jju3.jpg",
      "/img/dev/jju4.jpg",
    ],
  },
  {
    title: "Autopause Chrome Extension",
    description: "Pause Youtube video with finger gesture using camera",
    image: "/img/Untitled2.png",
    tech: "ReactJs, Chrome Extension, Hand-pose Detection",
    github_url: "https://github.com/merryskac/autopauseExtension",
    screenshot: ["/img/dev/3.png", "/img/dev/4.png"],
  },
  {
    title: "Safe Trip",
    description: "Let someone track your trip location in real-time",
    image: "/img/safetrip.jpg",
    tech: "ReactJs, ExpressJs, socket.io, mongodb, leaflet",
    github_url: "https://github.com/merryskac/safeTripFE",
    screenshot: [
      "/img/safetrip3.jpg",
      "/img/safetrip4.jpg",
      "/img/safetrip5.jpg",
    ],
  },
];

export default function DevProjects() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useLayoutEffect(() => {
    if (!cardsRef.current || !containerRef.current) return;

    cardsRef.current.forEach((card) => {
      if (!card) return;

      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: card,
            scroller: "#scroll-container",
            start: "top 70%",
            end: "top 60%",
            scrub: true,
          },
        }
      );
    });

    ScrollTrigger.refresh();
  }, []);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
  };

  return (
    <div ref={containerRef} className="px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {projects.map((project, index) => (
          <div
            onClick={() => openModal(project)}
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className="project-card bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] rounded-2xl p-6 text-white opacity-0 transform transition-all duration-500 cursor-pointer"
          >
            <img
              src={project.image}
              alt={project.title}
              className="rounded-xl mb-4 w-full object-cover h-40"
            />
            <h3 className="text-xl font-semibold mb-2 text-white drop-shadow">
              {project.title}
            </h3>
            <p className="text-xs text-gray-300 mb-2">{project.tech}</p>
            <p className="text-gray-200 mb-4">{project.description}</p>
            <div className="flex items-center justify-end gap-2">
              {project.github_url && (
                <a
                  href={project.github_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub
                    className="text-white hover:text-purple-400 transition"
                    size={25}
                  />
                </a>
              )}
              {project.url && (
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt
                    className="text-white hover:text-blue-400 transition"
                    size={20}
                  />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-3xl relative shadow-lg flex flex-col max-h-[90vh] overflow-hidden">
            {/* Tombol Close Sticky */}
            <div className="sticky top-0 bg-white z-10 flex justify-end p-4">
              <button
                onClick={closeModal}
                className="text-black text-2xl hover:text-red-500 transition"
              >
                ✕
              </button>
            </div>

            {/* Konten Modal Scrollable */}
            <div className="overflow-y-auto px-6 pb-6 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent">
              <h2 className="text-2xl text-gray-800 font-bold mb-2">
                {selectedProject.title}
              </h2>
              {selectedProject.screenshot.length > 0 &&
                selectedProject.screenshot.map((p, index) => (
                  <img
                    key={index}
                    src={p}
                    alt={selectedProject.title}
                    className="rounded-lg mb-4 w-full object-cover"
                  />
                ))}
              <p className="text-sm text-gray-700 mb-1">
                {selectedProject.tech}
              </p>
              <p className="mb-4 text-gray-700">
                {selectedProject.description}
              </p>
              <div className="flex justify-end gap-4">
                {selectedProject.github_url && (
                  <a
                    href={selectedProject.github_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:text-purple-600"
                  >
                    <FaGithub size={25} />
                  </a>
                )}
                {selectedProject.url && (
                  <a
                    href={selectedProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:text-blue-600"
                  >
                    <FaExternalLinkAlt size={20} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

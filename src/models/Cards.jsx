import { useState } from "react";
import { exp } from "../data/devExp";

const Card = ({ ...props }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="md:flex mt-10 gap-6">
      {/* Sidebar */}
      <ul className="flex-column space-y-4 text-sm font-medium text-white md:me-4 mb-4 md:mb-0 w-full md:w-[220px]">
        {exp.map((tab, i) => (
          <li key={i}>
            <button
              onClick={() => setActiveTab(i)}
              className={`text-left px-4 py-3 rounded-xl w-full transition duration-300 border backdrop-blur-md ${
                activeTab === i
                  ? "bg-blue-500/30 text-white border-blue-300 shadow-[0_0_30px_5px_rgba(59,130,246,0.4)]"
                  : "bg-white/10 hover:bg-white/20 dark:bg-black/10 dark:hover:bg-black/20 border-white/20 text-white shadow-md"
              }`}
            >
              {tab.workplace}
            </button>
          </li>
        ))}
      </ul>

      {/* Content Area */}
      <div className="p-6 w-full bg-white/10 backdrop-blur-md text-white rounded-xl border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]">
        {exp.map((tab, i) => {
          return (
            activeTab === i && (
              <div key={i}>
                <h3 className="text-lg font-bold text-white drop-shadow">
                  {tab.workplace}
                </h3>
                <p className="mb-4 text-gray-300">{tab.time}</p>
                <ul className="list-disc ml-5 space-y-1">
                  {tab.details.map((tech, j) => (
                    <li key={j}>{tech}</li>
                  ))}
                </ul>
              </div>
            )
          );
        })}
      </div>
    </div>
  );
};

export default Card;

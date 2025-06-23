/* eslint-disable react/prop-types */
import { Html } from "@react-three/drei";
import { useSpring, animated } from "@react-spring/web";
import Header from "./Header";
import Designer from "./Designer";
import { useEffect, useState } from "react";
import Dev from "./Dev";
import Footer from "./Footer";

const Portfolio = ({ show, onClose }) => {
  const styles = useSpring({
    opacity: 1,
    transform: "translateY(0px) scale(1)",
    from: { opacity: 0, transform: "translateY(40px) scale(0.95)" },
    config: { tension: 170, friction: 24 },
  });

  const [activeTab, setActiveTab] = useState("dev");

  useEffect(() => {
    const currentTab =
      new URLSearchParams(window.location.search).get("tab") ?? "dev";
    if (currentTab) setActiveTab(currentTab);
  }, []);

  const switchTab = (tab) => {
    setActiveTab(tab);
    const url = new URL(window.location);
    url.searchParams.set("tab", tab);
    window.history.pushState({}, "", url);
  };

  return (
    <Html fullscreen>
      <animated.div
        style={styles}
        className="text-white w-full h-full overflow-hidden"
      >
        {/* //className="min-h-[200vh] bg-[url('/img/Untitled-1.jpg')] bg-cover bg-no-repeat bg-center bg-scroll" */}
        <div className="overflow-y-auto h-screen" id="scroll-container">
          <div
            className={
              activeTab === "dev"
                ? "min-h-[350vh] bg-[url('/img/Untitled-1.jpg')] bg-cover bg-no-repeat bg-center bg-scroll"
                : "min-h-[350vh] bg-[#f2efea] bg-scroll"
            }
          >
            <Header onClose={onClose} activeTab={activeTab} />
            <div className="flex flex-col items-center justify-center h-[60vh] m-10  text-center">
              <h1
                style={
                  activeTab !== "dev"
                    ? {
                        textShadow:
                          "4px 4px 0px rgba(58,153,78,1), 8px 8px 0px rgba(251,196,18,1), 12px 12px 0px rgba(247,116,114,1)",
                      }
                    : {}
                }
                className={
                  activeTab === "dev"
                    ? "md:text-8xl text-xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text"
                    : "md:text-8xl text-6xl font-bold text-black"
                }
              >
                Portfolio
              </h1>
              <h1
                className={
                  activeTab === "dev"
                    ? "text-2xl font-semibold"
                    : "text-black text-2xl font-semibold"
                }
              >
                Merryska Christy
              </h1>
              <p className={activeTab === "dev" ? "mt-5" : "mt-5 text-black"}>
                I'm software developer and graphic designer based in Palu,
                Indonesia
              </p>
              <p className={activeTab === "dev" ? "" : "text-black"}>
                Passionate about solving problems through apps and compelling
                visuals that bring ideas to life.
              </p>
            </div>
            <div className=" mb-[300px] xl:mx-[300px] m-16">
              <div className="flex flex-wrap items-center justify-center my-2">
                <p className={activeTab === "dev" ? "" : "text-black"}>
                  See me as
                </p>
              </div>

              <div className="relative max-w-md mx-auto">
                <div className="relative rounded-lg">
                  {/* Tabs */}
                  <ul
                    className={
                      activeTab === "dev"
                        ? "flex relative z-30 rounded-full"
                        : "flex relative z-30 rounded-full outline outline-2 outline-black"
                    }
                  >
                    <li className="w-1/2">
                      <button
                        onClick={() => switchTab("dev")}
                        className={`relative z-50 w-full px-4 py-3 text-sm font-medium transition ease-in-out duration-300 ${
                          activeTab === "dev" ? "text-white" : "text-black"
                        }`}
                      >
                        Software Dev
                      </button>
                    </li>
                    <li className="w-1/2">
                      <button
                        onClick={() => switchTab("design")}
                        className={`relative z-50 w-full px-4 py-3 text-sm font-medium transition ease-in-out duration-300 ${
                          activeTab === "design"
                            ? "text-white"
                            : "text-gray-400"
                        }`}
                      >
                        Designer
                      </button>
                    </li>
                  </ul>

                  {/* Slider - posisi absolute & di bawah tombol dengan z-0 */}
                  <div
                    className={`absolute top-0 left-0 h-full w-1/2 rounded-full transition-transform duration-300 ease-in-out z-10 ${
                      activeTab === "dev"
                        ? " bg-gradient-to-r from-cyan-500 to-blue-500"
                        : "bg-[#f7823f]"
                    }`}
                    style={{
                      transform:
                        activeTab === "dev"
                          ? "translateX(0%)"
                          : "translateX(100%)",
                    }}
                  ></div>
                </div>
              </div>

              {activeTab === "dev" && <Dev />}
              {activeTab === "design" && <Designer />}
            </div>
            <Footer activeTab={activeTab} />
          </div>
        </div>

        {/* Tambahkan isi portfolio lainnya */}
      </animated.div>
    </Html>
  );
};

export default Portfolio;

import { FaGithub, FaLinkedin, FaWindowClose } from "react-icons/fa";

const Header = ({ ...props }) => {
  return (
    <header
      className={`sticky top-0 z-50 ${
        props.activeTab === "dev"
          ? "backdrop-blur-md bg-black/30 "
          : "bg-white/10 backdrop-blur-md"
      } border-b border-white/10 shadow-md`}
    >
      <div className="mx-auto flex h-16 w-full items-center gap-8 px-4 sm:px-6 lg:px-8">
        <a className="block text-teal-600" href="#">
          <span className="sr-only">Home</span>
          <p
            className={`font-bold ${
              props.activeTab === "dev"
                ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text"
                : "text-[#000000]"
            } `}
          >
            Merryska C
          </p>
        </a>

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global"></nav>

          <div className="flex items-center gap-4 ">
            <div className="flex gap-4 items-center">
              <a
                href="https://github.com/merryskac"
                target="_blank"
                className="block py-2.5 text-sm font-medium group"
              >
                <FaGithub
                  size={30}
                  className={`transition duration-300 ${
                    props.activeTab === "dev" ? "text-white" : "text-black"
                  }  group-hover:text-purple-400`}
                  style={{ display: "inline-block" }}
                />
              </a>

              <a
                href="https://www.linkedin.com/in/merryska-christy-mait-62426a212/"
                target="_blank"
                className="block py-2.5 text-sm font-medium group"
              >
                <FaLinkedin
                  size={33}
                  className={`transition duration-300 ${
                    props.activeTab === "dev" ? "text-white" : "text-black"
                  } group-hover:text-blue-500`}
                  style={{ display: "inline-block" }}
                />
              </a>

              <a
                href="#"
                className="block py-2.5 text-sm font-medium group"
                onClick={props.onClose}
              >
                <FaWindowClose
                  size={30}
                  className={`transition duration-300 ${
                    props.activeTab === "dev" ? "text-white" : "text-black"
                  } group-hover:text-red-500`}
                  style={{ display: "inline-block" }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

const Footer = ({ ...props }) => {
  return (
    <footer
      className={`mt-20 ${
        props.activeTab === "design" ? "bg-black" : "bg-white/10"
      }  backdrop-blur-md border-t border-white/20  py-8 px-4`}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
        {/* Column 1 */}
        <div className={`}`}>
          <h4 className="text-lg font-bold mb-3">About Me</h4>
          <p className="text-gray-300">
            A passionate developer who enjoys building interactive and
            meaningful user experiences through web technologies.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="text-lg font-bold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a href="#experience" className="hover:text-white transition">
                Experience
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-white transition">
                Projects
              </a>
            </li>
            <li>
              <a
                href="mailto:merryska@example.com"
                className="hover:text-white transition"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h4 className="text-lg font-bold mb-3">Connect</h4>
          <div className="flex space-x-4">
            <a
              href="https://github.com/merryskac"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="w-6 h-6 hover:text-purple-400 transition"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .5C5.4.5 0 6 0 12.6c0 5.3 3.4 9.8 8.2 11.4.6.1.8-.3.8-.6v-2.3c-3.3.7-4-1.5-4-1.5-.5-1.2-1.3-1.5-1.3-1.5-1-.7.1-.7.1-.7 1 .1 1.6 1.1 1.6 1.1.9 1.6 2.4 1.1 3 .8.1-.7.4-1.1.7-1.4-2.7-.3-5.4-1.3-5.4-5.8 0-1.3.4-2.3 1.2-3.1-.1-.3-.5-1.4.1-2.9 0 0 1-.3 3.3 1.2a11.3 11.3 0 0 1 6 0C18 7.8 19 8 19 8c.6 1.5.2 2.6.1 2.9.8.9 1.2 1.9 1.2 3.1 0 4.5-2.8 5.5-5.4 5.8.4.3.7.9.7 1.9v2.8c0 .3.2.7.8.6 4.8-1.6 8.2-6.1 8.2-11.4C24 6 18.6.5 12 .5z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/merryska-christy-mait-62426a212"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="w-6 h-6 hover:text-blue-400 transition"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5v-14a5 5 0 00-5-5zm-11 20h-3v-11h3v11zm-1.5-12.3a1.8 1.8 0 110-3.6 1.8 1.8 0 010 3.6zm13.5 12.3h-3v-5.4c0-1.3-.5-2.1-1.6-2.1-.9 0-1.4.6-1.7 1.2-.1.2-.1.5-.1.8v5.5h-3v-11h3v1.5h.1a3.2 3.2 0 012.8-1.6c2 0 3.5 1.3 3.5 4.1v7z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-gray-400 text-xs">
        © {new Date().getFullYear()} Merryska C. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

import { useState } from "react";

export const SendEmail = (props) => {
  const [clicked, setClicked] = useState(false);
  return (
    <div className="flex flex-col items-center justify-center text-center mb-[250px] px-6 text-black">
      <h2
        className={`text-2xl font-bold mb-4 ${
          props.activeTab === "dev" ? "text-white" : "text-black"
        }`}
      >
        Contact Me
      </h2>
      <p
        className={`mb-4 ${
          props.activeTab === "dev" ? "text-white/70" : "text-black"
        }`}
      >
        Feel free to send me a message!
      </p>
      <form
        action="https://formspree.io/f/mpwrbpvj"
        method="POST"
        encType="text/plain"
        className="w-full max-w-md space-y-4"
      >
        <input
          type="text"
          name="Name"
          placeholder="Your Name"
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="email"
          name="Email"
          placeholder="Your Email"
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <textarea
          name="Message"
          placeholder="Your Message"
          rows="4"
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          onClick={() => setClicked(true)}
          disabled={clicked}
          className={`w-full py-2 px-4 rounded-md font-semibold transition-colors ${
            props.activeTab === "dev"
              ? "bg-cyan-600 text-white hover:bg-cyan-700"
              : "bg-black text-white hover:bg-gray-800"
          }`}
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

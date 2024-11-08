import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";
import { Download } from "lucide-react";
import Resume from '../Assests/KARANM-21CSR077.pdf'

const techStack = [

  {
    name: "React",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "HTML5",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "Node.js",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "MongoDB",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "Flutter",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
  },
  {
    name: "Material-UI",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
  },
  {
    name: "JavaScript",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/javascript/javascript-plain.svg",
  },
  {
    name: "Tailwind CSS",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "VS Code",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },
  {
    name: "GitHub",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    name: "Canva",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/canva/canva-original.svg",
  },
];

export const Hero = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = Resume;
    link.setAttribute("download", "Karan_Resume.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <section id="home" className="min-h-screen pt-16 lg:pt-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center"
        >
          <h1 className="mb-4 text-5xl font-bold md:text-7xl">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              KARAN M
            </span>
          </h1>

          <div className="mb-8 text-2xl font-light text-gray-600 md:text-3xl">
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000,
                "UI/UX Developer",
                2000,
                "Problem Solver",
                2000,
              ]}
              repeat={Infinity}
            />
          </div>

          <p className="mb-8 max-w-2xl text-gray-600">
            Passionate about creating beautiful, functional, and user-friendly
            applications. With Hands-On practices and freelance experience in web development, I
            specialize in building modern web applications using cutting-edge
            technologies.
          </p>
              <div className="flex flex-col justify-around">
          <div className="flex space-x-6 mb-16">
            {[
              { Icon: Github, href: "https://github.com/KARAN-M077" },
              { Icon: Linkedin, href: "https://linkedin.com/in/karan55" },
              {
                Icon: Instagram,
                href: "https://instagram.com/_.karan._m?utm_source=qr&igshid=NGExMmI2YTkyZg%3D%3D",
              },
              { Icon: Mail, href: "mailto:karanm17ab@gmail.com" },
            ].map(({ Icon, href }, index) => (
              <motion.a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="rounded-full bg-gray-100 p-3 text-gray-600 transition-colors hover:bg-blue-100 hover:text-blue-600"
              >
                <Icon size={24} />
              </motion.a>
            ))}

          </div>
          <div className=" flex justify-center mt-[-30px] mb-10">
              <button
                onClick={handleDownload}
                className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <Download className="w-5 h-5" />
                <span className="font-medium">Download Resume</span>
              </button>
            </div>
          </div>

          {/* Tech Stack Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="w-full max-w-4xl"
          >
            <div className="relative">
              {/* Background Elements */}
              <div className="absolute  inset-0 bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl transform -skew-y-2 " />
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]" />

              <div className="relative p-8 md:p-12">
                <h2 className="text-3xl font-bold text-cyan-400 mb-2">
                  Tech Stack and Tools
                </h2>
                <p className="text-gray-300 mb-8">
                  Crafting digital experiences with modern technologies
                </p>

                <div className="md:grid md:grid-cols-4 lg:grid lg:grid-cols-4  grid grid-cols-2 gap-3 gap-6 md:gap-6 ">
                  {techStack.map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        delay: index * 0.1,
                        type: "spring",
                        stiffness: 100,
                      }}
                      whileHover={{ y: -5 }}
                      className="group relative bg-gray-800/50 rounded-xl p-4 backdrop-blur-sm 
                               hover:bg-gray-700/50 transition-all duration-300"
                    >
                      <div className="flex items-center space-x-4">
                        <div
                          className="w-12 h-12 rounded-lg bg-gray-700/50 p-2 sm:w-8 sm:h-8
                                    group-hover:bg-gray-600/50 transition-colors duration-300"
                        >
                          <img
                            src={tech.image}
                            alt={tech.name}
                            className="w-fit h-fit object-contain"
                          />
                        </div>
                        <span
                          className="text-gray-300 group-hover:text-white 
                                     transition-colors duration-300 sm:text-sm"
                        >
                          {tech.name}
                        </span>
                      </div>
                      <div
                        className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 
                                  opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

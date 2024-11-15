import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";
import { Download } from "lucide-react";
import Resume from '../Assests/KARANM-21CSR077.pdf'


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
    <section id="home" className="min-h-auto pt-16 lg:pt-32">
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
        </motion.div>
      </div>
    </section>
  );
};

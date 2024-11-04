import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const techStack = [
  { name: 'JavaScript', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'React', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'HTML5', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS3', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'Node.js', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'MongoDB', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'TypeScript', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'Flutter', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
];

export const Hero = () => {
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
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              KARAN M
            </span>
          </h1>
          
          <div className="mb-8 text-2xl font-light text-gray-600 md:text-3xl">
            <TypeAnimation
              sequence={[
                'Full Stack Developer',
                2000,
                'UI/UX Developer',
                2000,
                'Problem Solver',
                2000,
              ]}
              repeat={Infinity}
            />
          </div>

          <p className="mb-8 max-w-2xl text-gray-600">
            Passionate about creating beautiful, functional, and user-friendly applications.
            With 5 years of experience in web development, I specialize in building
            modern web applications using cutting-edge technologies.
          </p>

          <div className="flex space-x-6 mb-16">
            {[
              { Icon: Github, href: 'https://github.com' },
              { Icon: Linkedin, href: 'https://linkedin.com' },
              { Icon: Twitter, href: 'https://twitter.com' },
              { Icon: Mail, href: 'mailto:alex@example.com' },
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

          {/* Tech Stack Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="w-full max-w-4xl"
          >
            <div className="relative">
              {/* Background Elements */}
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl transform -skew-y-2" />
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]" />
              
              <div className="relative p-8 md:p-12">
                <h2 className="text-3xl font-bold text-cyan-400 mb-2">
                  Tech Stack
                </h2>
                <p className="text-gray-300 mb-8">
                  Crafting digital experiences with modern technologies
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {techStack.map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        delay: index * 0.1,
                        type: "spring",
                        stiffness: 100
                      }}
                      whileHover={{ y: -5 }}
                      className="group relative bg-gray-800/50 rounded-xl p-4 backdrop-blur-sm 
                               hover:bg-gray-700/50 transition-all duration-300"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-lg bg-gray-700/50 p-2 
                                    group-hover:bg-gray-600/50 transition-colors duration-300">
                          <img
                            src={tech.image}
                            alt={tech.name}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <span className="text-gray-300 group-hover:text-white 
                                     transition-colors duration-300">
                          {tech.name}
                        </span>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 
                                  opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300" />
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
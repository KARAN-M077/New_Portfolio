import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Code2, Database, Globe, Palette, Server, Settings,
  Terminal, Layout, Cpu, Cloud, GitBranch, Monitor
} from 'lucide-react';

const skills = [
  { name: 'Frontend Development', Icon: Layout },
  { name: 'Backend Development', Icon: Server },
  { name: 'Database Management', Icon: Database },
  { name: 'UI/UX Design', Icon: Palette },
  { name: 'DevOps', Icon: Settings },
  { name: 'API Development', Icon: Globe },
  { name: 'Version Control', Icon: GitBranch },
  { name: 'Cloud Services', Icon: Cloud },
  { name: 'System Architecture', Icon: Cpu },
  { name: 'Command Line', Icon: Terminal },
  { name: 'Clean Code', Icon: Code2 },
  { name: 'Responsive Design', Icon: Monitor },
];

export const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Leveraging modern technologies and best practices to build scalable solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map(({ name, Icon }, index) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4 p-3 bg-blue-50 rounded-full text-blue-600">
                <Icon size={24} />
              </div>
              <h3 className="text-lg font-medium text-gray-900">{name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
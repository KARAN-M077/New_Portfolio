import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contact" className="relative py-20 bg-gray-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500 rounded-full blur-xl animate-pulse" />
        <div className="absolute top-40 right-20 w-32 h-32 bg-purple-500 rounded-full blur-xl animate-pulse delay-300" />
        <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-cyan-500 rounded-full blur-xl animate-pulse delay-700" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="container relative mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left side - Illustration */}
            <div className="w-full lg:w-1/2">
              <div className="relative">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={inView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="relative z-10"
                >
                  <img
                    src="https://raw.githubusercontent.com/your-username/your-repo/main/developer-illustration.png"
                    alt="Developer"
                    className="w-full h-auto"
                  />
                </motion.div>
                {/* Floating elements */}
                <div className="absolute top-0 left-0 w-full h-full">
                  <div className="absolute top-1/4 left-1/4 w-12 h-12 bg-blue-500/20 rounded-lg animate-float" />
                  <div className="absolute top-1/2 right-1/4 w-8 h-8 bg-purple-500/20 rounded-lg animate-float-delayed" />
                  <div className="absolute bottom-1/4 left-1/3 w-10 h-10 bg-cyan-500/20 rounded-lg animate-float-slow" />
                </div>
              </div>
            </div>

            {/* Right side - Contact text */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <h2 className="text-4xl font-bold text-white mb-6">
                  Let's Create Something
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> Amazing</span>
                </h2>
                
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  "Delving into the dynamic world of full-stack development, where creativity meets functionality. 
                  Crafting visually stunning interfaces and architecting robust server-side systems – it's the 
                  art and science of the digital realm."
                </p>

                <p className="text-gray-300 text-lg mb-4">
                  Feel free to{' '}
                  <span className="text-cyan-400 font-semibold">contact me</span> through the{' '}
                  <span className="text-cyan-400 font-semibold">social media links above</span>.
                </p>
                
                <p className="text-gray-400">
                  I will reply to your messages as soon as possible.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
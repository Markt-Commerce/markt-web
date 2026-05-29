import { motion, Variants } from 'motion/react';
import { visionContent } from '../constants/content';
import connectionImage from '../assets/beautiful-three-welldressed-afro-american-girls-with-colored-shopping-bags-walking-mall.jpg';
import trustImage from '../assets/african-female-happily-shopping-online-using-laptop-smartphone-while-holding-her-credit-card.jpg';
import creatorsImage from '../assets/cute-african-american-woman-making-video-her-blog-using-tripod-mounted-digital-camera-young-female-blogger-vlogger-camera.jpg';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const imageMap: Record<string, string> = {
  'vision-connection': connectionImage,
  'vision-trust': trustImage,
  'vision-creators': creatorsImage
};

export const Vision = () => {
  return (
    <div className="bg-background dark:bg-zinc-950 overflow-hidden">
      {/* Hero Section */}
      <section className="py-xl md:py-20 px-4 sm:px-6">
        <motion.div className='w-1/6 mx-auto rounded-DEFAULT h-1 my-6 bg-primary'></motion.div>
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black mb-8 tracking-tighter text-secondary dark:text-zinc-50 font-display">
              {visionContent.hero.title.split('. ').map((part, i, arr) => (
                <span key={i} className={i === arr.length - 1 ? "text-primary block sm:inline" : ""}>
                  {part}{i < arr.length - 1 ? ". " : ""}
                </span>
              ))}
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-tertiary dark:text-zinc-400 leading-relaxed max-w-3xl mx-auto font-medium font-sans">
              {visionContent.hero.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Detailed Sections */}
      {visionContent.sections.map((section, index) => (
        <section key={section.title} className={`py-xl px-4 sm:px-6 ${index % 2 === 1 ? 'bg-neutral/30 dark:bg-zinc-900/30' : ''}`}>
          <div className="max-w-7xl mx-auto">
            <div className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-xl`}>
              <motion.div
                className="w-full md:w-1/2"
                initial={{ opacity: 0, x: index % 2 === 1 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-kinetic border border-outline dark:border-zinc-800 bg-neutral dark:bg-zinc-800">
                  <img
                    src={imageMap[section.image]}
                    alt={section.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                  />
                </div>
              </motion.div>
              <motion.div
                className="w-full md:w-1/2 flex flex-col gap-6"
                initial={{ opacity: 0, x: index % 2 === 1 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter text-secondary dark:text-zinc-50 font-display">
                  {section.title}
                </h2>
                <p className="text-lg sm:text-xl text-tertiary dark:text-zinc-400 leading-relaxed font-medium font-sans">
                  {section.description}
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* Values Grid */}
      <section className="py-xl px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-xl">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tighter text-secondary dark:text-zinc-50 font-display">Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
            {visionContent.values.map((value, i) => (
              <motion.div
                key={value.title}
                className="p-8 rounded-lg border border-outline dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm hover:shadow-kinetic transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <h3 className="text-xl font-bold mb-4 tracking-tight text-secondary dark:text-zinc-50 font-display">{value.title}</h3>
                <p className="text-tertiary dark:text-zinc-400 font-medium font-sans">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};


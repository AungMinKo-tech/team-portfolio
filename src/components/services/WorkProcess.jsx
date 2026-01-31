import { motion } from "framer-motion";
import { Search, PenTool, Code2, ShieldCheck, Rocket } from "lucide-react";

const processes = [
  {
    icon: <Search className="w-5 h-5 md:w-6 md:h-6" />,
    title: "Discovery & Strategy",
    description:
      "We dive deep into your business goals and requirements to create a strategic plan.",
  },
  {
    icon: <PenTool className="w-5 h-5 md:w-6 md:h-6" />,
    title: "UI/UX Design",
    description:
      "Crafting intuitive, high-fidelity prototypes and user-centric interfaces.",
  },
  {
    icon: <Code2 className="w-5 h-5 md:w-6 md:h-6" />,
    title: "Agile Development",
    description:
      "Building robust and scalable solutions using the latest tech stacks.",
  },
  {
    icon: <ShieldCheck className="w-5 h-5 md:w-6 md:h-6" />,
    title: "Quality Assurance",
    description:
      "Rigorous testing to ensure your product is bug-free and performs perfectly.",
  },
  {
    icon: <Rocket className="w-5 h-5 md:w-6 md:h-6" />,
    title: "Deployment",
    description:
      "Seamless launch and ongoing support to ensure long-term success.",
  },
];

export default function WorkProcess() {
  return (
    <section className="py-20 overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-extrabold text-center text-brand-navy dark:text-brand-gold mb-20">
          Our Working Process
        </h2>

        <div className="relative">
          {/* Vertical Line (Desktop only) */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-linear-to-b from-brand-gold/50 to-brand-gold/10 hidden md:block"></div>

          <div className="space-y-16 md:space-y-24">
            {processes.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-center justify-between w-full ${
                  index % 2 !== 0 ? "md:flex-row-reverse" : ""
                } relative`}
              >
                {/* Content Card Side */}
                <div className="w-full md:w-[42%] group">
                  <div className="p-8 rounded-3xl bg-gray-50 dark:bg-gray-800 shadow-xl border-t-4 md:border-t-0 md:border-l-4 border-brand-gold hover:shadow-brand-gold/10 transition-all duration-300">
                    <h3 className="text-2xl font-bold text-brand-navy dark:text-white mb-4">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Center Circle with Icon (Desktop & Mobile Friendly) */}
                <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex w-14 h-14 bg-white dark:bg-gray-900 border-4 border-brand-gold rounded-full items-center justify-center z-10 shadow-[0_0_20px_rgba(212,175,55,0.3)] group-hover:scale-110 transition-transform duration-300">
                  <div className="text-brand-navy dark:text-brand-gold">
                    {item.icon}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

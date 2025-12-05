// src/components/Skills/Skills.jsx
import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom"
    >
      {/* Section Title */}
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A comprehensive overview of my technical skills and expertise
          developed through hands-on projects and continuous learning.
        </p>
      </motion.div>

      {/* Skill Categories */}
      <motion.div
        className="flex flex-wrap gap-1 lg:gap-5 py-10 justify-between"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
      >
        {SkillsInfo.map((category) => (
          <motion.div
            key={category.title}
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
            className="bg-gray-900 backdrop-blur-md px-6 sm:px-10 py-8 sm:py-6 mb-10 w-full sm:w-[48%] rounded-2xl border border-white 
          shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]"
          >
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-400 mb-4 text-center">
              {category.title}
            </h3>

            {/* Tilt + Skills Grid */}
            <Tilt
              key={category.title}
              tiltMaxAngleX={20}
              tiltMaxAngleY={20}
              perspective={1000}
              scale={1.05}
              transitionSpeed={1000}
              gyroscope={true}
            >
              <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={{
                  hidden: {},
                  show: {
                    transition: { staggerChildren: 0.08 },
                  },
                }}
              >
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={{
                      hidden: { opacity: 0, scale: 0.8 },
                      show: { opacity: 1, scale: 1 },
                    }}
                    transition={{ duration: 0.4 }}
                    className="flex items-center justify-center space-x-2 bg-transparent border-2 border-gray-700 rounded-3xl py-2 px-2 sm:py-2 sm:px-2 text-center"
                  >
                    <img
                      src={skill.logo}
                      alt={`${skill.name} logo`}
                      className="w-6 h-6 sm:w-8 sm:h-8"
                    />
                    <span className="text-xs sm:text-sm text-gray-300">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </Tilt>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;

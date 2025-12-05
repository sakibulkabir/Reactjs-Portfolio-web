import { education } from "../../constants";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My educational journey reflects my continuous learning and growth.
          Below are the details of my academic background.
        </p>
      </motion.div>

      {/* Timeline Container */}
      <div className="relative">
        {/* Vertical line animation */}
        <motion.div
          className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-white h-full"
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          viewport={{ once: true }}
        ></motion.div>

        {/* Education Items */}
        {education.map((edu, index) => (
          <motion.div
            key={edu.id}
            className={`flex flex-col sm:flex-row items-center mb-16 ${
              index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
            }`}
            initial={{
              opacity: 0,
              x: index % 2 === 0 ? -50 : 50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            {/* Card */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]
                ${index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"}
                sm:ml-44 sm:mr-44 ml-8`}
            >
              <div className="flex items-center space-x-6">
                {/* Placeholder for School Logo */}
                <div className="w-24 h-16 bg-white rounded-md overflow-hidden"></div>

                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl sm:text-xl font-semibold text-white">
                      {edu.degree}
                    </h3>
                    <h4 className="text-md sm:text-sm text-gray-300">
                      {edu.school}
                    </h4>
                  </div>

                  <p className="text-sm text-gray-500 mt-2">{edu.date}</p>
                </div>
              </div>

              <p className="mt-4 text-gray-400 font-bold">Grade: {edu.grade}</p>
              <p className="mt-4 text-gray-400">{edu.desc}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;

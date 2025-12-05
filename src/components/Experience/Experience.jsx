import { experiences } from "../../constants";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-16 opacity-0 animate-fadeDown">
        <h2 className="text-4xl font-bold text-white tracking-wide">
          EXPERIENCE
        </h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of practical experiences, internships, and projects that
          showcase my journey in web development.
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative">

        {/* Vertical Timeline Line */}
        <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-white h-full opacity-0 animate-growLine"></div>

        {/* Experience Items */}
        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className={`flex flex-col sm:flex-row items-center mb-16 
              ${index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"}
            `}
          >
            {/* Card */}
            <div
              className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl border border-white bg-gray-900 backdrop-blur-lg shadow-[0_0_25px_rgba(130,69,236,0.4)]
                sm:ml-44 sm:mr-44 ml-8 transform transition-transform duration-300 hover:scale-105 
                opacity-0 
                ${index % 2 === 0 ? "animate-slideLeft" : "animate-slideRight"}
              `}
            >
              {/* Top Row: Image & Details */}
              <div className="flex items-center space-x-6">
                {/* Logo */}
                <div className="w-16 h-16 bg-white rounded-md overflow-hidden animate-floatingSlow">
                  <img
                    src={experience.img}
                    alt={experience.company}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-white">
                    {experience.role}
                  </h3>
                  <h4 className="text-md text-gray-300">
                    {experience.company}
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">
                    {experience.date}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="mt-4 text-gray-300 leading-relaxed">
                {experience.desc}
              </p>

              {/* Skills Tags */}
              <div className="mt-4">
                <h5 className="font-medium text-white">Skills:</h5>
                <ul className="flex flex-wrap mt-2">
                  {experience.skills.map((skill, idx) => (
                    <li
                      key={idx}
                      className="bg-[#8245ec] text-gray-200 px-4 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-gray-500 animate-tagPop"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Experience;

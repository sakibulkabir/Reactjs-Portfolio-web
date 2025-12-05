import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/profile2.png';

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">

        {/* LEFT SIDE */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0
          opacity-0 animate-slideUp"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight animate-glowText">
            Sakibul Kabir
          </h2>

          {/* Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>
            <ReactTypingEffect
              text={[
                'MERN Stack Developer',
                'Frontend Developer',
                'UI/UX Designer',
                'Coder',
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#8245ec]">{cursor}</span>
              )}
            />
          </h3>

          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            I am a frontend-focused web developer with practical experience in 
            building modern, responsive, and user-friendly web applications. I 
            have a strong foundation in JavaScript, React, Nextjs, Redux and modern 
            web technologies, along with backend knowledge using the MERN stack, 
            NestJS, GraphQL, MongoDB, Express.js, and TypeScript.
          </p>

          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1AzzWEIu-_dfXUi9ge-qV527c2mdDiGdK/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold 
            transition duration-300 transform hover:scale-110 animate-fadeIn delay-200"
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow:
                '0 0 4px #8245ec, 0 0 15px #8245ec, 0 0 40px #8245ec',
            }}
          >
            DOWNLOAD CV
          </a>
        </div>

        {/* RIGHT SIDE */}
        <div
          className="md:w-1/2 flex justify-center md:justify-end 
          opacity-0 animate-slideInRight delay-150"
        >
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full
            animate-floating"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Sakibul Kabir"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;

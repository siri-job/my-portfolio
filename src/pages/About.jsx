import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode, FaGithub, FaBitbucket, FaBootstrap, FaTrello } from 'react-icons/fa';

const About = () => {
  return (
    <>
      <section
        id="about"
        className="py-16 bg-gradient-to-br from-purple-200 via-pink-200 to-blue-200 relative overflow-hidden sm:py-8"
      >
        {/* Background Shapes for Large Screens */}
        
        {/* <div className="absolute bottom-0 left-0 w-[190px] h-[120px] bg-orange-400 opacity-30 rounded-t-full transform z-0 sm:block hidden sm:w-[100px] sm:h-[100px] sm:left-0 sm:bottom-10 sm:transform-none"></div> */}
        <div className="absolute top-0 left-0 w-1/5 h-1/5 bg-lime-300 opacity-40 rounded-full transform -translate-x-1/4 z-0"></div>
      <div className="absolute top-0 right-0 w-1/5 h-1/5 bg-pink-300 opacity-40 rounded-full transform translate-x-1/4 z-0"></div>
      <div className="absolute bottom-0 left-0 w-1/5 h-1/5 bg-emerald-300 opacity-40 rounded-full transform -translate-x-1/4 translate-y-1/4 z-0"></div>
      <div className="absolute bottom-0 right-0 w-1/5 h-1/5 bg-yellow-300 opacity-40 rounded-full transform translate-x-1/4 translate-y-1/4 z-0"></div>
      <div className="absolute top-1/4 right-1/4 w-1/5 h-1/5 bg-blue-400 opacity-30 rounded-full transform translate-x-1/4 z-0 hidden sm:block"></div>
      <div className="absolute bottom-1/4 left-1/4 w-1/5 h-1/5 bg-purple-400 opacity-30 rounded-full transform translate-x-1/4 translate-y-1/4 z-0 hidden sm:block"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/4 h-32 bg-green-400 opacity-30 rounded-b-full transform z-0"></div>
        
        {/* Content */}
        <div className="container mx-auto text-center relative z-10 px-6 sm:px-8 mt-22">
          {/* About Me Title with cloud-like background */}
          <h2 className="text-3xl mb-8 text-blue-950 font-extrabold font-sans relative z-10 text-center sm:text-2xl">
            <span className="bg-purple-300 px-8 py-2 mt-20  rounded-full shadow-md">...About Me...</span>
          </h2>

          {/* About Me Text */}
          <p className="text-lg max-w-4xl mx-auto font-semibold font-sans text-gray-800 leading-relaxed mb-6 sm:text-base sm:max-w-xl sm:px-4 sm:leading-relaxed sm:mb-4">
            A highly motivated and detail-oriented Web Developer with a strong foundation in Web Development. Gained through freelancing and an internship at iNeuron, I have hands-on experience in developing dynamic, user-friendly web applications. I specialize in creating efficient, scalable, and visually appealing web solutions using modern technologies such as React.js, Node.js, TypeScript, and Tailwind CSS.
            <br /><br />
            Throughout my internship, I contributed to real-time projects, worked in an Agile environment, and received "Best Performance" recognition for consistently delivering high-quality code. I am eager to contribute my skills and continue learning in a challenging role that allows me to grow as part of a forward-thinking company.
          </p>
        </div>

        
        {/* My Resume Section */}
        <div className="container mx-auto text-center mt-12 px-6 sm:px-8">
  <h3 className="text-3xl mb-8 text-blue-950 font-extrabold font-sans relative z-10 text-center sm:text-2xl">
    <span className="bg-indigo-200 px-8 py-2 rounded-full shadow-md sm:px-4 sm:py-1">...My Resume...</span>
  </h3>
  
  {/* Flex container for text and button */}
  <div className="flex justify-center items-center space-x-2 sm:text-2xl sm:px-4 sm:py-1">
    <p className="text-lg font-semibold font-sans text-gray-800 sm:text-base sm:px-4">
    Click here to open my resume and learn more about my background.
    </p>
    
    {/* Download Button */}
    <a href="/Siri%20Dasari%20Resume.pdf" target="_blank" rel="noopener noreferrer">
      <button className="bg-green-300 bg-opacity-20 font-sans font-medium text-gray-600 px-3 py-2 rounded-lg hover:bg-blue-400 hover:text-white transition duration-300 sm:px-2 sm:py-1 sm:text-sm md:bg-opacity-40 ">
      View Resume
      </button>
    </a>
  </div>
</div>




        {/* Skills Section with cloud-like background */}
        <div className="container mx-auto text-center mt-12 px-6 sm:px-8">
          <h3 className="text-3xl mb-8 text-blue-950 font-extrabold font-sans relative z-10 text-center sm:text-2xl">
            <span className="bg-pink-300 px-8 py-2 rounded-full shadow-md">...Skills...</span>
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            {/* Skills with Icons */}
            <div className="flex flex-col items-center">
              <FaHtml5 className="text-4xl text-orange-600 mb-4" />
              <p>HTML</p>
            </div>
            <div className="flex flex-col items-center">
              <FaCss3Alt className="text-4xl text-blue-500 mb-4" />
              <p>CSS</p>
            </div>
            <div className="flex flex-col items-center">
              <FaJs className="text-4xl text-yellow-500 mb-4" />
              <p>JavaScript</p>
            </div>
            <div className="flex flex-col items-center">
              <FaReact className="text-4xl text-blue-400 mb-4" />
              <p>React.js</p>
            </div>
            <div className="flex flex-col items-center">
              <FaNode className="text-4xl text-green-600 mb-4" />
              <p>Node.js</p>
            </div>
            <div className="flex flex-col items-center">
              <FaGithub className="text-4xl text-black mb-4" />
              <p>Github</p>
            </div>
            <div className="flex flex-col items-center">
              <FaBootstrap className="text-4xl text-info mb-4" />
              <p>Bootstrap</p>
            </div>
            <div className="flex flex-col items-center">
              <FaTrello className="text-4xl text-green-400 mb-4" />
              <p>Agile / Scrum</p>
            </div>
          </div>
        </div>

        {/* Achievements Section with cloud-like background */}
        <div className="container mx-auto text-center mt-12 px-6 sm:px-8">
          <h3 className="text-3xl font-extrabold mb-8 text-blue-950 font-sans relative z-10 text-center sm:text-2xl">
            <span className="bg-violet-200 px-8 py-2 rounded-full shadow-md">..Achievements..</span>
          </h3>

          {/* Grid layout for achievements */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="p-6 rounded-lg bg-transparent shadow-lg">
              <h4 className="text-xl font-bold font-sans text-gray-800 mb-4">Best Performance Recognition 🏆🎯</h4>
              <p className="text-lg mb-4 font-serif">
                Awarded Best Performance Recognition during my internship at iNeuron for consistently delivering high-quality work under tight deadlines. 
                This recognition was a result of my commitment to excellence, ability to quickly adapt to new technologies, and proactive approach in tackling challenges.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-transparent shadow-lg">
              <h4 className="text-xl font-bold font-sans text-gray-800 mb-4">Topper of the Department 🥇🎓</h4>
              <p className="text-lg mb-4 font-serif">
                Achieved the Topper position in the 3rd & Final Year of my undergraduate course, ranking first in my department. 
                This accomplishment was a result of my strong academic performance, dedication to my studies, and consistent hard work throughout the semester. 
                I demonstrated leadership in both technical and non-technical subjects and developed a deep understanding of core concepts that helped me excel in my coursework. 
                This achievement reflects my discipline, time management skills, and ability to perform under pressure.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

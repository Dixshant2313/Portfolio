import React from "react";

const About = () => {
  return (
    <React.Fragment>
      <div
        name="about"
        className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
      >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="sm:pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              About
            </p>
          </div>

          <p className="text-lg mt-10 sm:mt-20 sm:text-xl mb-8">
            I am a passionate Full Stack Developer. I specialize in building web
            applications using modern technologies like React, Node.js, and
            MongoDB. With a keen eye for design and a dedication to crafting
            high-quality code, I strive to create intuitive and visually
            appealing user experiences. I am constantly seeking opportunities to
            expand my skill set and stay up-to-date with the latest industry
            trends.
          </p>

          <p className="text-lg mb-8 sm:text-xl">
            I have worked on various projects, ranging from e-commerce platforms
            to social networking applications. I am experienced in front-end
            development, creating responsive layouts and implementing
            interactive features. On the back-end, I am skilled in building
            APIs, handling databases, and ensuring robust server-side
            functionality. I am a strong believer in clean code, continuous
            learning, and collaborative teamwork. Let's connect and bring your
            ideas to life!
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;

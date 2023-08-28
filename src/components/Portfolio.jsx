import React from "react";
import reactWeather from "../assets/portfolio/reactWeather.jpg";
import netflixClone from "../assets/portfolio/netflixClone.png";
import chitChat from "../assets/portfolio/chitChat.jpg";
import ecommerce from "../assets/portfolio/ecommerce.jpg";
import todoApp from "../assets/portfolio/todoApp.jpg";
import devPortfolio from "../assets/portfolio/devPortfolio.png"

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: chitChat,
      demoUrl:
        "https://64aa9cf7803f811ddbe0bb4c--comforting-gumdrop-62a440.netlify.app/",
      codeUrl: "https://github.com/Dixshant2313/chitchat",
    },
    {
      id: 2,
      src: netflixClone,
      demoUrl:
        "https://netflix-clone-blush-chi.vercel.app/?vercelToolbarCode=FISLsEs8bTIuici",
      codeUrl: "https://github.com/Dixshant2313/netflix-clone",
    },
    {
      id: 3,
      src: ecommerce,
      demoUrl: "https://shoe-store-frontend-kappa.vercel.app",
      codeUrl: "https://github.com/Dixshant2313/shoe_store-frontend",
    },
    {
      id: 4,
      src: todoApp,
      demoUrl: "https://todo-react-eight-rho.vercel.app",
      codeUrl: "https://github.com/Dixshant2313/todo_react",
    },
    {
      id: 5,
      src: devPortfolio,
      demoUrl: "https://master--incomparable-faloodeh-2ea6c5.netlify.app/",
      codeUrl: "https://github.com/Dixshant2313/Portfolio",
    },
    {
      id: 6,
      src: reactWeather,
      demoUrl: "https://weather-app-react-xji806fbq-dixshant2313.vercel.app/",
      codeUrl: "https://github.com/Dixshant2313/weatherApp_react",
    },
  ];

  const redirectToDemo = (demoUrl) => {
    if (demoUrl) {
      window.open(demoUrl, "_blank");
    } else {
      console.log("Demo URL not available");
    }
  };

  const redirectToCode = (codeUrl) => {
    if (codeUrl) {
      window.open(codeUrl, "_blank");
    } else {
      console.log("Code URL not available");
    }
  };

  return (
    <React.Fragment>
      <div
        name="portfolio"
        className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
      >
        <div className="max-w-screen-lg p-4 mx-auto w-full h-full flex flex-col justify-center">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              Portfolio
            </p>
            <p className="py-6">Check out some of my work here</p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
            {portfolios.map(({ id, src, demoUrl, codeUrl }) => (
              <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                <img
                  src={src}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105"
                />
                <div className="flex items-center justify-center">
                  <button
                    className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                    onClick={() => redirectToDemo(demoUrl)}
                  >
                    Demo
                  </button>
                  <button
                    className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                    onClick={() => redirectToCode(codeUrl)}
                  >
                    Code
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Portfolio;

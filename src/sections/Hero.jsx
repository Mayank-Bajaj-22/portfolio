import React from "react";
import Button from "../components/Button";
import { MdDownload } from "react-icons/md";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const words = [
  {
    text: "Ideas",
    imgPath: "/images/ideas.svg",
  },
  {
    text: "Concepts",
    imgPath: "/images/concepts.svg",
  },
  {
    text: "Designs",
    imgPath: "/images/designs.svg",
  },
  {
    text: "Code",
    imgPath: "/images/code.svg",
  },
];

gsap.registerPlugin(useGSAP);

const Hero = () => {
  const handleDownload = () => {
    fetch("/images/mayank-cv.pdf")
      .then((response) => response.blob())
      .then((blob) => {
        const link = document.createElement("a");
        link.href = window.URL.createObjectURL(blob);
        link.download = "DownloadedFile.pdf";
        link.click();
      });
  };

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(".hero-text", {
      y: 150,
      opacity: 0,
      stagger: 0.25,
      duration: 0.6,
      ease: "power3.out",
      delay: 0.5,
    });
  }, []);
  return (
    <section className="relative overflow-hidden mt-7">
      {/* Background Image */}
      <div className="absolute top-0 left-0 z-0">
        <img src="/images/bg.png" alt="background" />
      </div>

      <div className="relative z-10 xl:mt-10 mt-24 md:h-dvh h-[80vh] flex xl:items-center items-start justify-center">
        {/* Left: HERO Content */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 pl-4 pr-3">
          <div className="flex flex-col gap-5">
            <div className="px-[1px] overflow-hidden">
              <h1 className="hero-text md:text-[60px] text-[25px] font-bold leading-snug">
                Transforming{" "}
                <span className="slide h-[1.7rem] md:h-[3.3rem] leading-[0.9] md:leading-[0.6]">
                  <span className="wrapper">
                    {words.map((word, i) => (
                      <span
                        key={i}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt={word.text}
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-[#d9ecff]"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1 className="hero-text md:text-[60px] text-[26px] font-bold leading-snug">
                into Seamless User
              </h1>
              <h1 className="hero-text md:text-[60px] text-[26px] font-bold leading-snug">
                Experiences & Results.
              </h1>
            </div>

            <div>
              <p className="md:text-xl text-[#d9ecff] relative z-10 text-xs pointer-events-none px-[2px]">
                Hello, I'm Mayank Bajaj, a frontend developer based in Jaipur
                with a passion for code.
              </p>
            </div>
          </div>

          <div className="flex items-center mt-8 gap-7">
            <div
              onClick={handleDownload}
              className="md:px-5 md:py-4 px-3 py-2 bg-[#111111] rounded-lg flex items-center gap-3"
            >
              Download CV{" "}
              <span className="text-[20px]">
                <MdDownload />
              </span>
            </div>
            <div className="w-[15%] hidden lg:block">
              <a href="#work">
                <Button
                text="See My Work"
                className="md:w-80 md:h-16 w-60 h-12"
                id="counter"
              />
              </a>
            </div>
            <div className=" flex gap-5">
              <a
                href="https://github.com/Mayank-Bajaj-22"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="ri-github-fill md:text-2xl text-xl"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/mayank-bajaj-439988309/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="ri-linkedin-box-fill md:text-2xl text-xl"></i>
              </a>
              <a
                href="https://x.com/MayankBajaj22?t=4IkegovJ4bB6lloZ26LjIw&s=08"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="ri-twitter-x-line md:text-2xl text-xl"></i>
              </a>
            </div>
          </div>
        </header>

        {/* Right: My Image */}

        <div className="xl:w-[50%] w-full h-[42vh] min-h-[40vh] absolute xl:top-40 top-70 xl:-right-70 right-0 flex items-center justify-center md:mr-[17%]">
          <div className="md:h-[50vh] md:w-[50vh] h-[35vh] w-[35vh] flex items-center rounded-full justify-center bg-gradient-to-tr from-[#d9ecff] to-[#ffffff] p-1">
            <img
              className="object-cover w-full h-full rounded-full"
              // src="https://images.unsplash.com/photo-1624395213043-fa2e123b2656?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              src="/images/m1.png"
              alt="no image"
            />
          </div>
        </div>
      </div>

      <div className="w-full md:h-[16vh] h-auto md:absolute md:top-[80%] relative mt-13 px-5 md:px-20 grid grid-cols-2 md:flex gap-5 justify-between">
        <div className="md:w-[20%] w-full flex items-center justify-center gap-6 px-6 py-4 rounded-lg text-white">
          <h2 className="text-4xl md:text-7xl font-bold">0</h2>
          <h1 className="text-sm md:text-md w-[60%] md:w-[40%] font-semibold leading-snug">
            Years of Experience
          </h1>
        </div>
        <div className="md:w-[20%] justify-center gap-6 w-full flex items-center justify-center px-6 py-4 rounded-lg  text-white">
          <h2 className="text-4xl md:text-7xl font-bold">8</h2>
          <h1 className="text-sm md:text-md md:w-[40%] w-[60%] font-semibold leading-snug">
            Project Complete
          </h1>
        </div>
        <div className="md:w-[20%] w-full flex items-center justify-center gap-6  px-6 py-4 rounded-lg text-white">
          <h2 className="text-4xl md:text-7xl font-bold">9</h2>
          <h1 className="text-sm md:text-md w-[60%] md:w-[40%] font-semibold leading-snug">
            Technologies Used
          </h1>
        </div>
        <div className="md:w-[20%] w-full flex items-center justify-center gap-6 px-6 py-4 rounded-lg text-white">
          <h2 className="text-4xl md:text-7xl font-bold">0</h2>
          <h1 className="text-sm md:text-md w-[60%] md:w-[40%] font-semibold leading-snug">
            Open Source Contribution
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;

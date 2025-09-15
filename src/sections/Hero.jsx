import React from "react";
import Button from "../components/Button";

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

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute top-0 left-0 z-0">
        <img src="/images/bg.png" alt="background" />
      </div>

      <div className="relative z-10 xl:mt-10 mt-24 md:h-dvh h-[80vh] flex xl:items-center items-start justify-center">
        {/* Left: HERO Content */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-5">
            <div className="px-[1px]">
              <h1 className="md:text-[60px] text-[25px] font-bold leading-snug">
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
              <h1 className="md:text-[60px] text-[26px] font-bold leading-snug">
                into Seamless User
              </h1>
              <h1 className="md:text-[60px] text-[26px] font-bold leading-snug">
                Experiences & Results.
              </h1>
            </div>

            <div>
              {/* <h2 className="md:text-[20px] text-[14px] font-medium text-zinc-400">
                Frontend Developer{" "}
                <span className="md:text-[14px] text-[12px] font-normal text-zinc-500">
                  based in Jaipur
                </span>
              </h2>

              <h1 className="md:text-[31px] text-[22px] font-semibold leading-tight text-zinc-400">
                Hello, I'm Mayank Bajaj
              </h1> */}
              <p className="md:text-xl text-[#d9ecff] relative z-10 text-xs pointer-events-none px-[2px]">
                Hello, I'm Mayank Bajaj, a frontend developer based in Jaipur
                with a passion for code.
              </p>
            </div>
          </div>
          <Button
            className="md:w-60 md:h-13 w-40 h-10 mt-8"
            id="button"
            text="See my Work"
          />
          {/* <div className="px-4 py-2 bg-zinc-200 text-black md:w-[15vw]">Download CV</div> */}
        </header>
      </div>
    </section>
  );
};

export default Hero;

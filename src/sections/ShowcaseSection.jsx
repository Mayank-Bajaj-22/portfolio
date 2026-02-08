import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const linkedinRef = useRef(null);
  const aiEcommerceRef = useRef(null);
  const movieRef = useRef(null);
  const travelRef = useRef(null);
  const dribbleRef = useRef(null);
  const refokusRef = useRef(null);
  const ecommerceRef = useRef(null);
  const obysRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 },
    );

    // Animations for each app showcase
    const cards = [
      linkedinRef.current,
      aiEcommerceRef.current,
      movieRef.current,
      travelRef.current,
      dribbleRef.current,
      refokusRef.current,
      ecommerceRef.current,
      obysRef.current,
    ];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.2 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        },
      );
    });
  }, []);
  return (
    <div
      id="work"
      ref={sectionRef}
      className="w-full md:mt-20 mt-5 px-5 md:px-20 py-10 md:py-10 flex items-center justify-center"
    >
      <div className="w-full">
        <div className="flex xl:flex-row flex-col gap-8 justify-between mb-25">
          {/* left */}
          <div
            ref={linkedinRef}
            className="h-full flex flex-col justify-between xl:w-[65%]"
          >
            <div className="xl:h-[74vh] md:h-[50vh] h-55 relative">
              <a
                href="https://ai-powered-ecommerce-frontend.onrender.com/"
                target="_blank"
              >
                <img
                  className="rounded-xl object-fit absolute inset-0 w-full h-full"
                  src="/images/p8.png"
                  alt="AI Ecommerce MERN"
                />
              </a>
            </div>
          </div>

          {/* right */}
          <div className="xl:w-[35%] bg-[#111] p-4 rounded-xl space-y-6 hover:bg-[#181818] transition-all duration-300">
            <h2 className="text-2xl md:text-3xl font-bold">
              1. AI Powered Ecommerce – MERN
            </h2>

            <p className="text-gray-300">
              Smart ecommerce platform with AI-based navigation, Google
              authentication, and complete admin dashboard for product & order
              management.
            </p>

            <div>
              <h3 className="text-xl font-semibold mb-2">Features</h3>
              <ul className="text-gray-300 space-y-1">
                <li>• Google OAuth Authentication</li>
                <li>• AI Chat Navigation between pages</li>
                <li>• Cart & Checkout System</li>
                <li>• Order Tracking</li>
                <li>• Admin Panel (CRUD Products)</li>
                <li>• Role Based Access</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Tech Stack</h3>
              <p className="text-gray-300">
                React • Node • Express • MongoDB • Google Auth • OpenAI API •
                Tailwind
              </p>
            </div>
          </div>
        </div>

        <div className="flex xl:flex-row flex-col gap-8 justify-between mb-25">
          {/* right */}
          <div className="xl:w-[35%] bg-[#111] p-4 rounded-xl space-y-6 hover:bg-[#181818] transition-all duration-300">
            <h2 className="text-2xl md:text-3xl font-bold">
              2. LinkedIn Clone – MERN Stack
            </h2>

            <p className="text-gray-300">
              A full-stack social platform inspired by LinkedIn with real-time
              interactions and professional networking features.
            </p>

            <div>
              <h3 className="text-xl font-semibold mb-2">Features</h3>
              <ul className="text-gray-300 space-y-1">
                <li>• JWT Authentication</li>
                <li>• Post, Like, Comment</li>
                <li>• Connection Requests</li>
                <li>• Real-time Notifications</li>
                <li>• Profile Management</li>
                <li>• Cloudinary Image Upload</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Tech Stack</h3>
              <p className="text-gray-300">
                • React • Node • Express • MongoDB • Socket.io • Tailwind • JWT
              </p>
            </div>
          </div>

          {/* left */}
          <div
            ref={linkedinRef}
            className="h-full flex flex-col justify-between xl:w-[65%]"
          >
            <div className="xl:h-[72vh] md:h-[50vh] h-55 relative">
              <a
                href="https://linkedin-frontend-5h6g.onrender.com/"
                target="_blank"
              >
                <img
                  className="rounded-xl object-fit absolute inset-0 w-full h-full"
                  src="/images/p7.png"
                  alt="LinkedIn MERN"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="flex xl:flex-row flex-col gap-10 justify-between">
          <div
            ref={movieRef}
            className="h-full flex flex-col justify-between xl:w-[65%]"
          >
            <div className="xl:h-[70vh] md:h-[50vh] h-55 relative">
              <a
                href="https://movie-app-red-nu.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="rounded-xl object-cover rounded-xl absolute inset-0"
                  src="/images/p1.png"
                  alt="React Movie APP"
                />
              </a>
            </div>
            <div className="space-y-5 mt-5">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                3. Discover and explore movies & tv shows with a seamless React
                experience.
              </h2>
              <p className="text-white-50 md:text-xl">
                An web app built with React JS, TMDB API, & TailwindCSS for a
                fast, user-friendly experience.
              </p>
            </div>
          </div>

          <div className="flex md:flex-row flex-col xl:flex-col gap-10 xl:w-[35%] overflow-hidden">
            <div className="project" ref={travelRef}>
              <div className="xl:h-[37vh] md:h-52 lg:h-72 h-64 relative overflow-hidden rounded-xl bg-[#222222]">
                <a
                  href="https://travel-advisory-all.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="w-full h-full object-contain rounded-xl"
                    src="/images/p2.png"
                    alt="Travel Advisor"
                  />
                </a>
              </div>
              <h2 className="text-lg md:text-xl lg:text-2xl font-semibold mt-5">
                4. Travel Advisor Web - APP
              </h2>
            </div>
            <div className="project" ref={dribbleRef}>
              <div className="xl:h-[37vh] md:h-52 lg:h-72 h-64 relative overflow-hidden rounded-xl bg-[#222222]">
                <a
                  href="https://mayank-bajaj-22.github.io/dribble-html-css-project/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="w-full h-full object-contain rounded-xl"
                    src="/images/p3.png"
                    alt="Dribble Clone"
                  />
                </a>
              </div>
              <h2 className="text-lg md:text-xl lg:text-2xl font-semibold mt-5">
                5. Dribble Clone Web - APP
              </h2>
            </div>
          </div>
        </div>
        {/* <hr className="h-[1vw] my-15 bg-[bg-zinc-100]" /> */}

        {/*  */}
        <div className="flex xl:flex-row flex-col gap-10 justify-between mt-20">
          <div className="flex md:flex-row flex-col xl:flex-col gap-10 xl:w-[35%]">
            <div className="project" ref={refokusRef}>
              <div className="xl:h-[37vh] md:h-52 lg:h-72 h-64 relative overflow-hidden rounded-xl bg-[#222222]">
                <a
                  href="https://refokus-clone-nc4t.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="w-full h-full object-contain rounded-xl"
                    src="/images/p4.png"
                    alt="Refokus Clone"
                  />
                </a>
              </div>
              <h2 className="text-lg md:text-xl lg:text-2xl font-semibold mt-5">
                6. Refokus Clone Web - APP
              </h2>
            </div>
            <div className="project" ref={ecommerceRef}>
              <div className="xl:h-[37vh] md:h-52 lg:h-72 h-64 relative overflow-hidden rounded-xl bg-[#222222]">
                <a
                  href="https://react-ecommerce-nine-murex.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="w-full h-full object-contain rounded-xl"
                    src="/images/p5.png"
                    alt="React Ecommerce"
                  />
                </a>
              </div>
              <h2 className="text-lg md:text-xl lg:text-2xl font-semibold mt-5">
                7. React Ecommerce Web-APP
              </h2>
            </div>
          </div>
          <div
            className="h-full flex flex-col justify-between xl:w-[65%]"
            ref={obysRef}
          >
            <div className="xl:h-[70vh] md:h-[50vh] h-55 relative">
              <a
                href="https://mayank-bajaj-22.github.io/Obys-Agency/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="rounded-xl object-cover rounded-xl absolute inset-0"
                  src="/images/p6.png"
                  alt="Obys Agency Clone"
                />
              </a>
            </div>
            <div className="space-y-5 mt-3">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                8. Minimalist Obys Agency clone with smooth GSAP animations and
                modern UI.
              </h2>
              <p className="text-white-50 md:text-xl">
                Built with JavaScript, TailwindCSS, GSAP, and Locomotive Scroll
                for seamless animations and styling.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseSection;

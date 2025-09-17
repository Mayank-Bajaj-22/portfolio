import React from "react";

const Footer = () => {
  return (
    <footer className="my-10 md:mt-20 mt-10 text-white-50 px-5 md:px-20 xl:px-20 flex items-center justify-center">
      <div className="flex gap-5">
        <a href="https://github.com/Mayank-Bajaj-22">
          <i className="ri-github-fill md:text-2xl text-xl"></i>
        </a>
        <a href="https://www.linkedin.com/in/mayank-bajaj-439988309/">
          <i className="ri-linkedin-box-fill md:text-2xl text-xl"></i>
        </a>
        <a href="https://x.com/MayankBajaj22?t=4IkegovJ4bB6lloZ26LjIw&s=08">
          <i class="ri-twitter-x-line md:text-2xl text-xl"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;

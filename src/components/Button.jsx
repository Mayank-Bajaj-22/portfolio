const Button = ({ text, className, id }) => {
  return (
    <a
      id={id}
      className={`group ${className ?? ""} relative z-20 cursor-pointer`}
    >
      <div className="px-6 py-3 rounded-lg bg-[#d9ecff] hover:bg-[#282732] flex justify-center items-center relative cursor-pointer overflow-hidden transition-all duration-500">
        {/* Hover Circle Effect */}
        <div className="absolute -right-6 top-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full bg-white/10 transition-all duration-600 group-hover:w-6 group-hover:h-6 group-hover:right-10" />

        {/* Text */}
        <p className="uppercase md:text-[15px] text-xs font-medium text-black transition-all duration-500 group-hover:text-[#d9ecff] group-hover:-translate-x-5 -translate-x-4   font-semibold">
          {text}
        </p>

        {/* Icon */}
        <div className="size-9 rounded-full absolute right-4 md:right-8 top-1/2 -translate-y-1/2 flex justify-center items-center bg-transparent transition-all duration-500 group-hover:bg-[#d9ecff]">
          <img src="/images/arrow-down.svg" alt="arrow" className="w-4" />
        </div>
      </div>
    </a>
  );
};

export default Button;

import { abilities } from "../constants";

const Card = () => {
  return (
    <div className="w-full px-5 md:px-20">
    <div className="mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {abilities.map(({ imgPath, title, desc }) => (
        <div
          key={title}
          className="border border-black-50 bg-[#0e0e10] rounded-xl p-8 flex flex-col gap-4"
        >
          <div className="size-14 flex items-center justify-center rounded-full">
            <img src={imgPath} alt={title} />
          </div>
          <h3 className="text-white text-2xl font-semibold mt-2">{title}</h3>
          <p className="text-[#d9ecff] text-lg">{desc}</p>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Card
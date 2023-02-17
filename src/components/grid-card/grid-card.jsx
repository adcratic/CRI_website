import Image from "next/image";

function GridCard({ src, alt, title, content, link }) {
  return (
    <div className="group flex flex-col gap-5 p-10 border-[12px] border-white hover:border-sky-500 bg-gray-50 transition ease-in-out delay-75 cursor-pointer">
      <div className="relative mx-auto overflow-hidden ">
        {/*When using an external URL, you must add it to remotePatterns in next.config.js*/}
        <Image
          src={src}
          alt={alt}
          width="250"
          height="200"
          className="transition ease-in-out delay-75 group-hover:scale-125 "
        />
      </div>
      <h2 className="text-2xl font-bold">{title}</h2>
      <p>{content}</p>
      <a href={link} className="text-sky-500">
        View More
      </a>
    </div>
  );
}

export default GridCard;

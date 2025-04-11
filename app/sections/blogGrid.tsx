import Image from "next/image";
import olga from "@/assets/images/olga.jpg";
import halal from "@/assets/images/halal.jpg";
import spaceship from "@/assets/images/spaceship.jpg";
import plant from "@/assets/images/plantMoney.jpg";

export default function BlogGrid() {
  const blog = [
    {
      title: "The Role of Investment Banks in Nigeria’s Financial Market",
      img: plant,
    },
    {
      title: "5 Capital Raising Strategies for High-Potential Ventures",
      img: spaceship,
    },
    {
      title: "A Comprehensive Guide to Halal Investments in Nigeria",
      img: halal,
    },
  ];
  return (
    <div className="flex flex-col gap-5 laptop:gap-6 gap-y-2 lg:flex-row lg:justify-center lg:items-start">
      <div className="lg:min-w-[45%] group bg-transparent hover:bg-off-white transition-colors duration-500 ease-in-out">
        <div className="w-full relative h-[300px] sm:h-[350px] laptop:!h-[470px]">
          <Image
            src={olga}
            alt="olga"
            className="absolute w-full h-full object-cover object-center opacity-[85%] grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500 ease-in-out"
          />
        </div>
        <div className="p-4 sm:py-6">
          <p className="flex items-center gap-2 text-text uppercase text-xs tracking-wide">
            podcast{" "}
            <span className="size-[4px] rounded-[100%] bg-[#9E9E9E] inline-block"></span>{" "}
            August 4, 2024
          </p>
          <h2 className="font-chronicle text-lg text-text-dark font-bold mt-1 sm:mt-2 sm:text-xl md:text-2xl">
            Connecting Beyond The Desk With Olga and Etinosa
            <span className="text-cord-red">.</span>
          </h2>
        </div>
      </div>
      <div className="flex-grow space-y-3 sm:space-y-1">
        {blog.map((item, index) => (
          <div
            key={index}
            className="flex justify-start items-center gap-3.5 sm:gap-6 sm:p-4 group bg-transparent hover:bg-off-white transition-colors duration-500 ease-in-out"
          >
            <div className="relative overflow-hidden min-w-[108px] sm:min-w-[148px] h-[100px] sm:h-[120px]">
              <Image
                src={item.img}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover object-center opacity-[85%] grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500 ease-in-out"
              />
            </div>
            <div>
              <h2 className="font-chronicle text-base text-text-dark font-bold mb-[5px] sm:mb-2 sm:text-lg md:text-[22px] md:leading-[30px] line-clamp-2">
                {item.title}
                <span className="text-cord-red">.</span>
              </h2>
              <p className="flex items-center gap-2 text-text uppercase text-xs tracking-wide">
                Blog{" "}
                <span className="size-[4px] rounded-[100%] bg-[#9E9E9E] inline-block"></span>{" "}
                August 4, 2024
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

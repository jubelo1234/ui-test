import Image from "next/image";
import fossilImage from "@/assets/images/fossil.png";

export default function ServiceGrid() {
  const topGrid = [0, 1, 2];
  return (
    <div className="grid grid-cols-12 gap-1 w-full ">
      {services.map((service, index) => (
        <div
          key={index}
          className={`${
            topGrid.includes(index)
              ? index === 0
                ? "col-span-12 lg:col-span-4"
                : " col-span-12 md:col-span-6 lg:col-span-4"
              : " col-span-12 md:col-span-6 lg:col-span-3"
          } flex justify-center overflow-hidden items-center group h-[300px] md:h-[320px] lg:h-[350px] relative`}
        >
          <Image
            src={fossilImage}
            alt="service image"
            className="w-full h-full absolute object-center object-cover z-[4] "
          />
          <div className="size-full transition-all duration-500 ease-out absolute top-0 left-0 bg-off-white group-hover:bg-[#323C40] z-[5] group-hover:opacity-80"></div>
          <h2 className="relative z-[10] text-2xl text-text-dark transition-all duration-500 ease-out group-hover:-translate-x-2 group-hover:text-white capitalize font-chronicle font-semibold">
            {service}
          </h2>
        </div>
      ))}
    </div>
  );
}

const services = [
  "Securities Trading",
  "Advisory Services",
  "Asset Management",
  "Trustees",
  "Registrars",
  "Insurance Brokers",
  "Research",
];

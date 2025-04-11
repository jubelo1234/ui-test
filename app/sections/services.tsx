import funds from "@/assets/svgs/funds.svg";
import insurance from "@/assets/svgs/insurance.svg";
import portfolio from "@/assets/svgs/portfolio.svg";
import privateIcon from "@/assets/svgs/private.svg";
import security from "@/assets/svgs/security.svg";
import wealth from "@/assets/svgs/wealth.svg";
import Image from "next/image";

export default function Services() {
  return (
    <div className="py-7 bg-off-white w-full overflow-x-auto no-scrollbar ">
      <div className="flex justify-start  items-center w-[92vw] md:w-[93vw] max-w-web-max mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-off-white p-4.5 md:p-6 transition-colors duration-150 min-w-[250px] md:min-w-[300px] ease-in-out hover:shadow-[0_0_64px_0_#0000001A] hover:bg-white"
          >
            <div className="size-[50px] flex justify-center items-center rounded-[5px] bg-off-white">
              <Image src={service.icon} alt={service.title} />
            </div>
            <div className="mt-6 space-y-2">
              <h2 className="text-lg text-[#2A0000] font-[500]">
                {service.title}
              </h2>
              <p className="text-sm text-text">{service.desc}</p>
            </div>
          </div>
        ))}
        <div className="w-5 h-2  opacity-0">plac</div>
      </div>
    </div>
  );
}

const services = [
  {
    title: "Advisory Services",
    desc: "Grow and protect your wealth",
    icon: wealth,
  },
  {
    title: "Registrars",
    desc: "Invest in Cordros mutual funds",
    icon: funds,
  },
  {
    title: "Securities",
    desc: "Buy and sell stocks",
    icon: security,
  },
  {
    title: "Trustees",
    desc: "Secure & tailored trust services",
    icon: privateIcon,
  },
  {
    title: "Asset Management",
    desc: "Grow and protect your wealth",
    icon: wealth,
  },
  {
    title: "Insurance brokers",
    desc: "Coverage for life's uncertainties",
    icon: insurance,
  },
  {
    title: "Research",
    desc: "Management of your investments",
    icon: portfolio,
  },
];

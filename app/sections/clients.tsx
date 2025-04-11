import accessLogo from "@/assets/images/access.png";
import ctil from "@/assets/images/ctil.png";
import cwg from "@/assets/images/cwg.png";
import dangote from "@/assets/images/dangote.png";
import eterna from "@/assets/images/eterna.png";
import eunisell from "@/assets/images/eunisell.png";
import fmn from "@/assets/images/fmn.png";
import lagos from "@/assets/images/lagos.png";
import lease from "@/assets/images/lease.png";
import mecure from "@/assets/images/mecure.png";
import oyo from "@/assets/images/oyo.png";
import kano from "@/assets/images/kano.png";
import smart from "@/assets/images/smart.png";
import sti from "@/assets/images/sti.png";
import Image from "next/image";

export default function Clients() {
  return (
    <div className="  w-full overflow-x-auto no-scrollbar ">
      <div className="flex gap-6 sm:gap-10 lg:gap-12 justify-start  items-center w-[92vw] md:w-[93vw] max-w-web-max mx-auto">
        {clientLogos.map((logo, index) => (
          <Image
            src={logo.logo}
            alt="client logo"
            key={index}
            className={`${logo.size} w-fit opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300 ease-in-out`}
          />
        ))}
        <div className="w-5 h-2  opacity-0">pl</div>
      </div>
    </div>
  );
}

const clientLogos = [
  {
    logo: lagos,
    size: "h-[60px]",
  },
  {
    logo: fmn,
    size: "h-[80px]",
  },
  {
    logo: accessLogo,
    size: "h-[40px]",
  },
  {
    logo: dangote,
    size: "h-[80px]",
  },
  {
    logo: sti,
    size: "h-[64px]",
  },
  {
    logo: mecure,
    size: "h-[61px]",
  },
  {
    logo: eterna,
    size: "h-[60px]",
  },
  {
    logo: cwg,
    size: "h-[62px]",
  },
  {
    logo: ctil,
    size: "h-[60px]",
  },
  {
    logo: oyo,
    size: "h-[70px]",
  },
  {
    logo: kano,
    size: "h-[80px]",
  },
  {
    logo: eunisell,
    size: "h-[60px]",
  },
  {
    logo: smart,
    size: "h-[54px]",
  },
  {
    logo: lease,
    size: "h-[64px]",
  },
];

import Link from "next/link";
import twitter from "@/assets/svgs/twitter.svg";
import instagram from "@/assets/svgs/insta.svg";
import linkedin from "@/assets/svgs/linkedin.svg";
import facebook from "@/assets/svgs/facebook.svg";
import youtube from "@/assets/svgs/youtube.svg";
import qrCode from "@/assets/images/qr.jpg";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    { logo: linkedin, link: "https://www.linkedin.com" },
    { logo: facebook, link: "https://www.facebook.com" },
    { logo: twitter, link: "https://www.twitter.com" },
    { logo: instagram, link: "https://www.instagram.com" },
    { logo: youtube, link: "https://www.youtube.com" },
  ];
  return (
    <footer className="bg-[#F8F8F8]">
      <div className="w-[92vw] md:w-[93vw] max-w-web-max mx-auto py-9 tablet:py-[60px] ">
        <div className="flex justify-between items-start gap-x-7 gap-y-8 flex-wrap">
          {links.map((item, index) => (
            <div key={index}>
              <h3 className="text-sm text-[#6B6B6B] tracking-wide uppercase">
                {item.category}
              </h3>
              <div className="mt-6 space-y-3 flex flex-col">
                {item.links.map((link, index2) => (
                  <Link
                    key={index2}
                    href={link.link || "/"}
                    className="text-text-dark text-sm"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
          <div>
            <h3 className="text-sm text-[#6B6B6B] tracking-wide uppercase">
              connect with us
            </h3>
            <div className="mt-6 ">
              <div className="flex justify-start items-center gap-5">
                {socialLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.link || "/"}
                    className="text-text-dark text-sm"
                  >
                    <Image
                      src={link.logo}
                      alt="social link"
                      className="size-6"
                    />
                  </Link>
                ))}
              </div>
              <div className="mt-7">
                <Image src={qrCode} alt="qr code" className="size-[112px]" />
              </div>
            </div>
          </div>
        </div>
        <hr className="bg-[#E7E7E7] h-[1px] w-full border-none outline-none mt-9 sm:mt-10" />
        <div className="flex justify-between items-center mt-7 gap-6 gap-y-3 flex-wrap">
          <p className="text-[13px] text-[#6B6B6B]">
            Copyright © {currentYear} Cordros Capital Limited. All rights
            reserved worldwide. 0700 CORDROS
          </p>
          <p className="text-[13px] text-[#6B6B6B]">
            <span className="text-text-dark">Website Design </span>by{" "}
            <span className="text-text-dark">CKDIGITAL</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

const links = [
  {
    category: "OUR BUSINESSES",
    links: [
      {
        label: "Securities Trading",
        link: null,
      },
      {
        label: "Advisory Services",
        link: null,
      },
      {
        label: "Asset Management",
        link: null,
      },
      {
        label: "Trustees Registrars",
        link: null,
      },
      {
        label: "Insurance Brokerage",
        link: null,
      },
      {
        label: "Research",
        link: null,
      },
    ],
  },
  {
    category: "THE COMPANY",
    links: [
      {
        label: "About Us",
        link: null,
      },
      {
        label: "Our Brand",
        link: null,
      },
      {
        label: "Careers",
        link: null,
      },
      {
        label: "Contact Us",
        link: null,
      },
    ],
  },
  {
    category: "MORE",
    links: [
      {
        label: "News & Insights",
        link: null,
      },
      {
        label: "Terms of Use",
        link: null,
      },
      {
        label: "Privacy Policy",
        link: null,
      },
      {
        label: "Cookie Policy",
        link: null,
      },
    ],
  },
];

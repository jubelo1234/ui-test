"use client";
import logo from "@/assets/images/logo.png";
import { useState } from "react";
import { AnimatePresence, useMotionValueEvent, useScroll } from "motion/react";
import * as motion from "motion/react-client";
import Link from "next/link";
import Image from "next/image";
import { AnimatedHamburgerButton } from "./hamburger";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function Header() {
  const { scrollY } = useScroll();

  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showBg, setShowBg] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > 100) {
      setShowBg(true);
    } else {
      setShowBg(false);
    }
    if (previous) {
      if (latest > previous && latest > 150) {
        setHidden(true);
      } else {
        setHidden(false);
      }
    }
  });

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        staggerChildren: 0.04,
        when: "beforeChildren",
        staggerDirection: 1,
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        when: "afterChildren",
        staggerChildren: 0.05,
        delayChildren: 0.01,
        staggerDirection: 1,
      },
    },
  };

  const linkVars = {
    initial: {
      x: "10vw",
      y: 0,
      opacity: 0,
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
    },
    exit: {
      y: "2vh",
      opacity: 0,
    },
  };

  const bgVars = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 0.85,
      transition: {
        ease: "easeInOut",
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        ease: "easeInOut",
        delay: 0.6,
        duration: 0.5,
      },
    },
  };

  return (
    <motion.header
      variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-0 z-50 w-full"
    >
      {/* For now i want the header to always have a solid bg */}
      <div
        className={`relative z-50 w-full  ${
          showBg || menuOpen ? "bg-text-dark" : "bg-text-dark"
        } py-2.5 tablet:py-4`}
      >
        <div className="mx-auto flex w-[92vw] md:w-[93vw] max-w-web-max items-center justify-between">
          <div className="flex items-center justify-start gap-10">
            <Link href="/">
              <Image
                src={logo}
                alt="cordros logo"
                className=" h-[32px] tablet:h-[40px] w-fit"
              />
            </Link>
          </div>
          <nav className="hidden items-center justify-start gap-4.5 laptop:flex ">
            {navLinks.map((link, index) => {
              if (link.options) {
                return (
                  <DropdownMenu key={index}>
                    <DropdownMenuTrigger asChild>
                      <button className="text-white capitalize text-sm h-9 cursor-pointer font-medium tracking-wide">
                        {link.name}
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="rounded-[0px] border-b-3 border-b-cord-red p-4">
                      {link.options.map((option, index) => (
                        <DropdownMenuItem
                          key={index}
                          className=" hover:!bg-transparent rounded-[0px] cursor-pointer m-0 text-sm text-[#2A0000] font-medium capitalize"
                        >
                          {option}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                );
              } else
                return (
                  <Link
                    key={index}
                    href={link.link}
                    className="text-white capitalize text-sm cursor-pointer font-medium tracking-wide "
                  >
                    {link.name}
                  </Link>
                );
            })}
          </nav>
          <div>
            <div className="hidden items-center justify-start gap-6 laptop:flex *:text-white *:capitalize *:text-sm *:cursor-pointer *:font-medium *:tracking-wide">
              <Link href="/">Login</Link>
              <Link
                href="/"
                className="flex h-[37px] w-[150px] items-center justify-center rounded-[50px] bg-cord-red leading-[14px]"
              >
                Open Account
              </Link>
            </div>
            <div className="inline-block laptop:hidden">
              <AnimatedHamburgerButton
                onClick={toggleMenu}
                menuState={menuOpen}
              />
            </div>
          </div>
        </div>
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              variants={menuVars}
              key="menu"
              initial="initial"
              animate="animate"
              exit="exit"
              className="absolute right-0 top-[98%] z-50 flex h-fit w-full origin-top flex-col items-start justify-start gap-4 bg-text-dark pb-4 pt-0 *:transform *:px-[5vw] *:text-base *:font-medium *:capitalize *:leading-[18.2px] *:transition-all *:duration-200 *:ease-linear laptop:hidden"
            >
              <hr className="h-[1px] w-full border-none bg-[#b0b8bc5e]" />

              {navLinks.map((link, index) => {
                if (link.options) {
                  return (
                    <motion.div key={index} variants={linkVars}>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <button className="text-dark capitalize text-sm text-white cursor-pointer font-medium tracking-wide">
                            {link.name}
                          </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                          align="start"
                          className="rounded-[0px] border-b-3 border-b-cord-red p-4"
                        >
                          {link.options.map((option, index) => (
                            <DropdownMenuItem
                              key={index}
                              className=" hover:!bg-transparent rounded-[0px] m-0 text-sm text-[#2A0000] capitalize"
                            >
                              {option}
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </motion.div>
                  );
                } else
                  return (
                    <motion.div key={index} variants={linkVars}>
                      <Link
                        href={link.link}
                        className=" capitalize text-sm cursor-pointer text-white font-medium tracking-wide "
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  );
              })}
              <motion.div variants={linkVars}>
                <Link
                  onClick={toggleMenu}
                  className=" capitalize text-sm cursor-pointer text-white font-medium tracking-wide "
                  href="/"
                >
                  Login
                </Link>
              </motion.div>

              <hr className="h-[1px] w-full border-none bg-[#b0b8bc5e]" />
              <motion.div
                variants={linkVars}
                className="*:transform *:transition-all *:duration-200 *:ease-linear"
              >
                {" "}
                <Link
                  onClick={toggleMenu}
                  href="/contact"
                  className="flex h-[37px] w-[150px] items-center justify-center rounded-[50px] bg-cord-red leading-[14px] capitalize text-sm cursor-pointer text-white font-medium tracking-wide"
                >
                  open account
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            onClick={toggleMenu}
            variants={bgVars}
            initial="initial"
            animate="animate"
            exit="exit"
            key="bg"
            className="absolute right-0 top-[66.4px] tablet:top-[78.4px] z-[40] block h-[calc(100vh-66.4px)] tablet:h-[calc(100vh-78.4px)]  w-full bg-[#161616] opacity-80 laptop:hidden"
          ></motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

const navLinks = [
  {
    name: "Individuals",
    options: [
      "Equities Trading",
      "Mutual Fund",
      "Cordros Cape",
      "Cordros Chase",
      "Cordros Liquidity Management",
      "Cordros Direct Market Access",
      "Cordros Wealth Management",
      "Cordros Portfolio Management",
      "Private Trust",
      "Insurance Policies",
    ],
  },
  {
    name: "Corporates",
    options: [
      "Restructuring Corporate",
      "Capital Raising",
      "Public Advisory",
      "Mutual Funds",
      "Trading",
      "Corporate & Public Trust",
      "Cordros Liquidity Management",
      "Cordros Direct Market Access",
      "Cordros Portfolio Management",
      "Registrar Services",
      "In-sourcing Services",
      "Insurance Consultancy",
    ],
  },
  { name: "About us", options: ["Our Brand", "Leadership"] },
  {
    name: "Our Businesses",
    options: [
      "Advisory Services",
      "Asset Management",
      "Insurance Brokerage",
      "Registrars",
      "Research",
      "Securities Trading",
      "Trustees",
      "Wealth Management",
    ],
  },
  { name: "insights", link: "/" },
  { name: "Careers", link: "/" },
  { name: "Contact us", link: "/" },
];

export default Header;

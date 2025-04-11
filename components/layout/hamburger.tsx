// import { useState } from "react";
import { motion } from "framer-motion";

export function AnimatedHamburgerButton({
  onClick,
  menuState,
}: {
  onClick: () => void;
  menuState: boolean;
}) {
  // const [isOpen, setIsOpen] = useState(menuState);

  const handleClick = () => {
    // setIsOpen(!isOpen);
    onClick();
  };

  const variants = {
    top: {
      animate: {
        top: menuState ? "50%" : "30%",
        rotate: menuState ? 45 : 0,
      },
    },
    middle: {
      animate: {
        opacity: menuState ? 0 : 1,
      },
      transition: { duration: 0.2 },
    },
    bottom: {
      animate: {
        top: menuState ? "50%" : "70%",
        rotate: menuState ? -45 : 0,
      },
    },
  };

  return (
    <button
      className="relative h-10 w-7 focus:outline-none"
      onClick={handleClick}
      aria-label={menuState ? "Close menu" : "Open menu"}
      aria-expanded={menuState}
    >
      <motion.div
        className="absolute h-0.5 w-7 transform rounded-md bg-white"
        style={{ top: "30%" }}
        animate={variants.top.animate}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className="absolute h-0.5 w-7 transform rounded-md bg-white"
        style={{ top: "50%" }}
        animate={variants.middle.animate}
        transition={variants.middle.transition}
      />
      <motion.div
        className="absolute h-0.5 w-7 transform rounded-md bg-white"
        style={{ top: "70%" }}
        animate={variants.bottom.animate}
        transition={{ duration: 0.3 }}
      />
    </button>
  );
}

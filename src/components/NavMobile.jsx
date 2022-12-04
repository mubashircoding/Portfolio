import React, { useState } from "react";
import { navigation } from "../data";
import { AiOutlineClose } from "react-icons/ai";
import { BiMenuAltRight } from "react-icons/bi";
//import Socials from "./Socials";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const NavMobile = () => {
  const [open, setOpen] = useState(false);
  const circleVariants = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 180,
      transition: {
        type: "spring",
        stiffness: 160,
        damping: 60,
      },
    },
  };
  const ulVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
      },
    },
  };
  return (
    <nav className="relative">
      <div onClick={() => setOpen(true)} className="cursor:pointer text-white">
        <BiMenuAltRight className="w-8 h-8" />
      </div>
      <motion.div
        variants={circleVariants}
        initial="hidden"
        animate={open ? "visible" : "hidden"}
        className="w-4 h-4 rounded-full bg-accent fixed top-0 right-0"
      ></motion.div>
      <motion.ul
        variants={ulVariants}
        initial="hidden"
        animate={open ? "visible" : ""}
        className={`${
          open ? "right-0" : " -right-full"
        } fixed top-0 bottom-0 w-full flex flex-col justify-center items-center transition-all duration-300 overflow-hidden`}
      >
        <div
          onClick={() => setOpen(false)}
          className="cursor-pointer absolute top-8 right-8"
        >
          <AiOutlineClose className=" w-8 h-8" />
        </div>
        {navigation.map((item, index) => {
          return (
            <li key={index} className="mb-8">
              <Link onClick={()=> setOpen(false)}
                to={item.href}
                smooth={true}
                duration={500}
                offset={-70}
                className="text-xl cursor-pointer capitalize"
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </motion.ul>
    </nav>
  );
};

export default NavMobile;

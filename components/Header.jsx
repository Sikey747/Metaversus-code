'use client'

import React, {useState, useEffect} from "react";
import { Menu, Search } from "@/public/icons";
import {navVariants} from './../utils/motion.js';
import { motion } from "framer-motion";

const Header = ({}) => {
  const [position, setPosition] = useState(0)
  const [visible, setVisible] = useState(true) 

  useEffect(()=> {
    const handleScroll = () => {
       const startHide = 0 // Спрятать скрол после столько пикселей
       let moving = window.scrollY
       setVisible( (moving < startHide) || (position > moving));
       setPosition(moving)
    };
    window.addEventListener("scroll", handleScroll);
    return(() => {
       window.removeEventListener("scroll", handleScroll);
    })
})

const cls = visible ? "visible" : "hidden";

  return (
    <motion.header className={`header  ${cls}`}
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    viewport={{once: true} }
    >
      <div className="blur-circle_v1"></div>
      <div className={`header__container`}>
        <button>
          <Search />
        </button>
        <p className="logo">METAVERSUS</p>
        <button>
          <Menu />
        </button>
      </div>
    </motion.header>
  );
};

export default Header;

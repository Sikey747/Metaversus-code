"use client";

import Image from "next/image";
import { footerSocials } from "./../constants/index.js";
import { fadeIn } from './../utils/motion.js';
import { motion } from "framer-motion";

const Footer = ({}) => {
  return (
    <motion.footer className="footer"
    variants={fadeIn("up",'spring',0,1.5)}
    initial="hidden"
    whileInView="show"
    viewport={{once: true}}
    >
      <div className="footer__container" id="footer">
        <div className="logo">METAVERUS</div>
        <p>Copyright © 2021 - 2022 Metaversus. All rights reserved.</p>
        <ul className="footer__items">
          {footerSocials.map((el) => {
            return (
              <li key={el.name} className="footer__item">
                <a href="#">
                  <Image src={el.url} alt={el.name} width={24} height={24} />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </motion.footer>
  );
};

export default Footer;

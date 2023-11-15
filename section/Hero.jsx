"use client";

import { heroSocials } from "./../constants/index.js";
import Image from "next/image";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import {
  textVariant,
  slideIn,
  delayChildren,
} from "../utils/motion.tsx";

const Hero = ({}) => {
  return (
    <motion.section
      className="hero"
    >
      <div className="hero__container">
        <motion.ul className="hero__social">
          {heroSocials.map((el,idx) => {
            return (
              <motion.li key={el.name} className="hero__icon"
              variants={slideIn('right','spring',idx==0?0.5:0.5+idx*0.1,0.5)}
              initial="hidden"
              whileInView="show"
              viewport={{once: true} }
              >
                <a href="#">
                  <Image src={el.url} alt={el.name} width={24} height={24} priority={true} sizes="100vw"   />
                </a>
              </motion.li>
            );
          })}
        </motion.ul>
        <motion.h1
          variants={textVariant(1)}
          initial="hidden"
          whileInView="show"
          viewport={{once: true} }
        >
          METAVERSE
          <br />
          MA<div className="hero__d"></div>NESS
        </motion.h1>
        <motion.div
          className="hero__background ibg "
          variants={slideIn('right','spring',0.3,0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{once: true} }
        >
          <Image src="/Hero/cover.png" alt="bg" width={1305} height={488} priority={true} />
          <Link
            className="hero__decor ibg"
            to="footer"
            spy={true}
            smooth={true}
            duration={1500}
          >
            <Image
              src="/decor/stamp.png"
              alt="decor"
              width={155}
              height={155}
              priority={true}
            />
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;

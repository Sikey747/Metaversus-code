"use client";

import { ArrowDown } from "../public/icons/index";
import { slideIn } from './../utils/motion.js';
import { motion } from "framer-motion";

const About = ({}) => {
  return (
    <section className="about">
      <div className="about__container">
        <motion.p
        variants={slideIn("up",'Tween',0,1.5)}
        initial="hidden"
        whileInView="show"
        viewport={{margin: "20% 0% 20% 0%"}}
        >
          <strong>Metaverse</strong> is a new thing in the future, where you can
          enjoy the virtual world by feeling like it's really real, you can feel
          what you feel in this metaverse world, because this is really the{" "}
          <strong>madness of the metaverse</strong> of today, using only{" "}
          <strong>VR</strong> devices you can easily <strong>explore</strong>
          the metaverse world you want, turn your dreams into reality. Let's
          explore the madness of the metaverse by scrolling down
        </motion.p>
        <motion.div  variants={slideIn("up",'Tween',1,0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{margin: "20% 0% 20% 0%"}}>
        <ArrowDown className="about__icon"  
       ></ArrowDown>
        </motion.div>

      </div>
    </section>
  );
};

export default About;

"use client";

import { insights } from "./../constants/index.js";
import Image from "next/image.js";
import { Arrow } from "@/public/icons";
import { slideIn } from './../utils/motion.js';
import { motion } from "framer-motion";

const Insights = ({}) => {
  return (
    <section className="insights">
      <div className="insights__container">
        <motion.h2
                  variants={slideIn("up",'spring',0,1.5)}
                  initial="hidden"
                  whileInView="show"
        >Insight about metaverse</motion.h2>
        <ul className="insights__items">
          {insights.map((el, idx) => {
            return (
              <motion.li key={idx} className="insights__item"
              variants={slideIn("left",'spring',idx*0.25,1.5)}
              initial="hidden"
              whileInView="show"
              >
                <div className="insights__pictures ibg">
                  <Image
                    alt={el.title}
                    src={el.imgUrl}
                    width={270}
                    height={250}
                  />
                </div>
                <div className="insights__info">
                  <h3>{el.title}</h3>
                  <p>{el.subtitle}</p>
                </div>
                <button className="insights__btn">
                  <Arrow />
                </button>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Insights;

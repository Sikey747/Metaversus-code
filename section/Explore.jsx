"use client";

import { exploreWorlds } from "./../constants/index.js";
import CardExplore from "./../components/CardExplore/CardExplore.jsx";
import { useState } from "react";
import { slideIn } from "./../utils/motion.js";
import { motion } from "framer-motion";

const Explore = ({}) => {
  const [selectCard, setSelectCard] = useState(2);

  const toggleOpenCard = (el) => {
    setSelectCard(el);
  };
  return (
    <section
      className="explore"
    >
      <div className="explore__container">
        <motion.h2
          variants={slideIn("up", "tween", 0, 1)}
          initial="hidden"
          whileInView="show"
        >
          Choose the world you want to explore
        </motion.h2>
        <div className="explore__items">
          {exploreWorlds.map((el, idx) => {
            return (
                <CardExplore
                  imgUrl={el.imgUrl}
                  id={idx}
                  title={el.title}
                  toggleOpenCard={toggleOpenCard}
                  selected={selectCard === idx ? true : false}
                  key={el.id}
                  variants={slideIn("right", "tween", idx * 0.5, 0.2)}
                  initial="hidden"
                  whileInView="show"
                ></CardExplore>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Explore;

"use client";

import {Headset} from "/public/icons/index"
import { slideIn } from '../utils/motion.tsx';
import { motion } from "framer-motion";

const Feedback = ({}) => {
  return (
    <section className="feedback">
      <div className="feedback__container">
        <motion.h2
                     variants={slideIn("left",'spring',0,1.5)}
                     initial="hidden"
                     whileInView="show"
        >Enter the Metaverse</motion.h2>
        <motion.button className="feedback__btn"
            variants={slideIn("right",'spring',0.3,0)}
            initial="hidden"
            whileInView="show"
        >
            ENTER METAVERSE
            <Headset/>
        </motion.button>
      </div>
    </section>
  )
}

export default Feedback
"use client";

import Image from "next/image"
import {startingFeatures} from './../constants/index';
import { slideIn } from './../utils/motion.js';
import { motion } from "framer-motion";

const GetStarted = ({}) => {
  return (
  <section className="getStarted">
    <div className="getStarted__container">
        <motion.div className="getStarted__planets ibg"
          variants={slideIn("left",'spring',0.5,1.5)}
          initial="hidden"
          whileInView="show"
        >
          <Image className="getStarted__planer-Up" src="/GetStarted/get-started-1.png" alt="panet" width={432} height={432} />
          <Image className="getStarted__planer-Down" src="/GetStarted/get-started-2.png" alt="panet" width={569} height={265} />
        </motion.div>
        <motion.div className="getStarted__info"
                  variants={slideIn("right",'spring',0,1.5)}
                  initial="hidden"
                  whileInView="show"
        >
          <h2>
          Get started with just a few clicks
          </h2>
          <ul className="getStarted__items">
            {startingFeatures.map((el,idx)=>{
              return(
                <li key={idx} className="getStarted__item">
                  <div className="getStarted__number">
                      {`${idx+1}`.padStart(2,0)}
                  </div>
                  <p>{el}</p>
                </li>
              )
            })}
          </ul>
        </motion.div>
    </div>
  </section>
  )
}

export default GetStarted
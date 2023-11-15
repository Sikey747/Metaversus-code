"use client";

import Image from "next/image"
import {newFeatures} from './../constants/index';
import { slideIn } from '../utils/motion.tsx';
import { motion } from "framer-motion";

const WhatsNew = ({}) => {
  return (
    <section className="whatsNew">
      <div className="whatsNew__container">
          <motion.div className="whatsNew__info"
                 variants={slideIn("left",'spring',0,1.5)}
                 initial="hidden"
                 whileInView="show"
          >
            <h2>
            What's new about Metaversus?
            </h2>
            <ul className="whatsNew__items">
              {newFeatures.map((el,idx)=>{
                return(
                  <li key={idx} className="whatsNew__item">
                    <div className="whatsNew__icon">
                      <Image src={el.imgUrl} alt={el.title} width={24} height={24} />
                     
                    </div>
                    <h5>{el.title}</h5>
                    <p className="whatsNew__subtitle">{el.subtitle}</p>
                  </li>
                )
              })}
            </ul>
          </motion.div>
          <motion.div className="whatsNew__planets ibg"
                           variants={slideIn("right",'spring',0.5,1.5)}
                           initial="hidden"
                           whileInView="show"
          >
            <Image className="whatsNew__planer-Up" src="/WhatsNew/whats-new-1.png" alt="panet" width={432} height={432} loading="lazy"/>
            <Image className="whatsNew__planer-Down" src="/WhatsNew/whats-new-2.png" alt="panet" width={569} height={265} loading="lazy"/>
          </motion.div>
      </div>
    </section>
    )
}

export default WhatsNew

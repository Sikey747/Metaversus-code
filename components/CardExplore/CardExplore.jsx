"use client"

import Image from "next/image";
import { motion } from "framer-motion";
import { slideIn, delayChildren } from './../../utils/motion.js';

const CardExplore = ({imgUrl,selected,title,id,toggleOpenCard,...props}) => {
    let cn="card-explore ibg ";
    selected?cn = cn.concat("action"):''

  return (
    <motion.div {...props} className={cn} id={id} onClick={()=>toggleOpenCard(id)}>
      <Image src={imgUrl} alt={title} height={353} width={563} />
      {!selected && <h4 className="h4__vertical">{title}</h4>}
      {selected && <h4 className="h4_horizontal" >{title}</h4>}

    </motion.div>
  );
};

export default CardExplore;

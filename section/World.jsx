"use client";

import { Pin } from "@/public/icons";
import Image from "next/image";
import { useWindowSize } from "@uidotdev/usehooks";
import { useState,useEffect  } from "react";
import { slideIn } from './../utils/motion.js';
import { motion } from "framer-motion";


const World = ({}) => {
  const [isTablet, setIsTablet] = useState(false);
  const size = useWindowSize();

  useEffect(() => {
    setIsTablet(size.width > 976);
  }, [size.width]);

  return (
    <section className="world">
      <div className="world__container">
        <motion.h2
                       variants={slideIn("up",'tween',0,1.5)}
                       initial="hidden"
                       whileInView="show"
        >
          Track friends around you and invite them to play together in the same
          world
        </motion.h2>
        <motion.div className="world__map map ibg"
                               variants={slideIn("up",'tween',0.2,1.5)}
                               initial="hidden"
                               whileInView="show"
        >
          <Image
            className="map__maps"
            src="/World/map.png"
            alt="map"
            width={1170}
            height={526}
          />

          <div className="people-point people-point-v1 ibg">
            <Pin>
              <Image
                src="/World/people-02.png"
                alt="people"
                width={61}
                height={61}
              />
              <Image
                className="blur"
                src="/World/people-02.png"
                alt="people"
                width={61}
                height={61}
              />
            </Pin>
          </div>

          <div className="people-point people-point-v2 ibg">
            <Pin>
              <Image
                src="/World/people-03.png"
                alt="people"
                width={61}
                height={61}
              />
              <Image
                className="blur"
                src="/World/people-03.png"
                alt="people"
                width={61}
                height={61}
              />
            </Pin>
          </div>

          <div className="people-point people-point-v3 ibg">
            <Pin>
              <Image
                src="/World/people-01.png"
                alt="people"
                width={61}
                height={61}
              />
              <Image
                className="blur"
                src="/World/people-01.png"
                alt="people"
                width={61}
                height={61}
              />
            </Pin>
          </div>
          {isTablet && (
            <>
              <div className="info-box info-box_v1 ibg">
                <Image
                  className="map__box-img"
                  src="/World/planet-02.png"
                  alt="map"
                  width={196}
                  height={150}
                />
                <Image
                  className="map__box-img blur"
                  src="/World/planet-02.png"
                  alt="map"
                  width={196}
                  height={150}
                />
                <div className="info-box__inner">
                  <div className="people-box">
                    <div className="people-box__images ibg">
                      <Image
                        className="people-box__img"
                        src="/World/people-01.png"
                        alt="map"
                        width={24}
                        height={24}
                      />
                      <Image
                        className="people-box__img"
                        src="/World/people-02.png"
                        alt="map"
                        width={24}
                        height={24}
                      />
                      <Image
                        className="people-box__img"
                        src="/World/people-03.png"
                        alt="map"
                        width={24}
                        height={24}
                      />
                    </div>
                    <p>+ 264 has joined</p>
                  </div>
                  <p className="info-box__title">The Upside Down</p>
                </div>
              </div>
              <div className="info-box info-box_v2 ibg">
                <Image
                  className="map__box-img"
                  src="/World/planet-03.png"
                  alt="map"
                  width={196}
                  height={150}
                />
                <Image
                  className="map__box-img blur"
                  src="/World/planet-03.png"
                  alt="map"
                  width={196}
                  height={150}
                />
                <div className="info-box__inner">
                  <div className="people-box">
                    <div className="people-box__images ibg">
                      <Image
                        className="people-box__img"
                        src="/World/people-01.png"
                        alt="map"
                        width={24}
                        height={24}
                      />
                      <Image
                        className="people-box__img"
                        src="/World/people-02.png"
                        alt="map"
                        width={24}
                        height={24}
                      />
                      <Image
                        className="people-box__img"
                        src="/World/people-03.png"
                        alt="map"
                        width={24}
                        height={24}
                      />
                    </div>
                    <p>+ 453 has joined</p>
                  </div>
                  <p className="info-box__title">Hawkins Labs</p>
                </div>
              </div>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default World;

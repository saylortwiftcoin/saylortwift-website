import Image from "next/image";
import saylorImg from "@/assets/saylor-rage-big.png";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="w-full flex items-center justify-center bg-oren px-5">
      <div className="w-full flex items-center flex-col md:flex-row justify-between gap-10 max-w-7xl mt-16 md:mt-0">
        <div className="flex flex-col items-center gap-12">
          <motion.h1
            initial={{
              opacity: 0,
              y: 50,
            }}
            animate={{
              opacity: 100,
              y: 0,
            }}
            transition={{
              delay: 0.5,
            }}
            className="text-3xl md:text-4xl lg:text-5xl text-creme font-semibold text-center"
          >
            In a world of dips and
            <br /> peaks, just shake it off
            <br /> and hodl - $TWIFT
            <br /> melody never fades!
          </motion.h1>
          <motion.p
            initial={{
              opacity: 0,
              y: 50,
            }}
            animate={{
              opacity: 100,
              y: 0,
            }}
            transition={{
              delay: 0.6,
            }}
            className="text-2xl md:text-4xl text-white text-center"
          >
            - saylor twift -
          </motion.p>
        </div>
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{
            opacity: 100,
            y: 0,
          }}
          transition={{
            delay: 0.7,
          }}
          className="w-[256px] md:w-[300px] lg:w-[500px] aspect-square"
        >
          <Image
            src={saylorImg}
            alt="saylot-twift"
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}

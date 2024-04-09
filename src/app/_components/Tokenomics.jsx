import saylorTokenomicsImg from "@/assets/saylor-tokenomics.png";
import { motion } from "framer-motion";
import { BUY_TWIFT_LINK, CONTRACT_ADDRESS } from "@/config";
import Image from "next/image";

export function Tokenomics() {
  return (
    <section className="w-full flex items-center justify-center px-5 bg-oren py-20">
      <div className="w-full flex flex-col items-center gap-6 max-w-7xl text-creme">
        <motion.h1
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 100,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          className="text-4xl md:text-6xl font-semibold"
        >
          tokenomics
        </motion.h1>
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 100,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            delay: 0.2,
          }}
          className="bg-white/20 p-3 text-white text-xs text-center md:text-2xl"
        >
          CA: {CONTRACT_ADDRESS}
        </motion.div>
        <div className="w-full flex flex-col md:flex-row justify-between max-w-7xl items-center gap-12 mt-8 md:mt-16">
          <motion.div
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 100,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0,
            }}
            className="bg-white w-full max-w-xl px-5 py-10 flex flex-col items-center text-coklet font-semibold"
          >
            <p className="text-3xl md:text-5xl text-center">
              total supply:
              <br /> 1,000,000,000
            </p>
            <p className="text-lg">(1 bilyon)</p>
            <div className="w-full flex flex-col gap-6 text-lg md:text-2xl mt-12 px-3 md:px-10">
              <div className="flex items-center gap-5">
                <div className="bg-coklet w-1.5 aspect-square rounded-full"></div>
                <p>no presale, no tax, no BS</p>
              </div>
              <div className="flex items-center gap-5">
                <div className="bg-coklet w-1.5 aspect-square rounded-full"></div>
                <p>contract renounced</p>
              </div>
              <div className="flex items-center gap-5">
                <div className="bg-coklet w-1.5 aspect-square rounded-full"></div>
                <p>liquidity burned</p>
              </div>
              <div className="flex items-center gap-5">
                <div className="bg-coklet w-1.5 aspect-square rounded-full"></div>
                <p>strong community support</p>
              </div>
            </div>
            <a
              href={BUY_TWIFT_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 mt-8 bg-gradient-to-b from-[#f6fa70] to-[#FFC100] text-coklet text-lg md:text-2xl"
            >
              buy $TWIFT
            </a>
          </motion.div>

          {/* seylor chart pie */}
          <motion.div
            initial={{
              opacity: 0,
              y: 50,
              scale: 0.7,
            }}
            whileInView={{
              opacity: 100,
              y: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 1,
            }}
            className="w-[256px] md:w-[500px] aspect-square relative"
          >
            <Image
              src={saylorTokenomicsImg}
              alt="saylot-tokenomics-twift"
              width={500}
              height={500}
              className="w-full h-full object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

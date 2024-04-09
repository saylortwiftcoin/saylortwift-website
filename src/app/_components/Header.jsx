import saylorRageImg from "@/assets/saylor-rage-big.png";
import { motion } from "framer-motion";
import { BUY_TWIFT_LINK } from "@/config";
import Image from "next/image";

export function Header() {
  return (
    <div className="w-full flex items-center justify-center pt-8 px-5 md:px-14 bg-oren">
      <div className="w-full flex items-center justify-between max-w-7xl">
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{
            opacity: 100,
            y: 0,
          }}
          className="w-12 md:w-20 aspect-square [transform:rotateY(180deg)]"
        >
          <Image
            src={saylorRageImg}
            alt="saylor-twift"
            width={120}
            height={120}
            className="w-full h-full object-contain"
          />
        </motion.div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3 md:gap-6 text-creme text-sm md:text-2xl">
            <motion.button
              initial={{
                opacity: 0,
                y: 50,
              }}
              animate={{
                opacity: 100,
                y: 0,
              }}
              transition={{
                delay: 0.1,
              }}
              onClick={() => {
                document.getElementById("about-section").scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              About
            </motion.button>
            <motion.button
              initial={{
                opacity: 0,
                y: 50,
              }}
              animate={{
                opacity: 100,
                y: 0,
              }}
              transition={{
                delay: 0.2,
              }}
              onClick={() => {
                document.getElementById("howtobuy-section").scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              How to buy
            </motion.button>
            <motion.button
              initial={{
                opacity: 0,
                y: 50,
              }}
              animate={{
                opacity: 100,
                y: 0,
              }}
              transition={{
                delay: 0.3,
              }}
              onClick={() => {
                document.getElementById("memes-section").scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Memes
            </motion.button>
            <motion.button
              initial={{
                opacity: 0,
                y: 50,
              }}
              animate={{
                opacity: 100,
                y: 0,
              }}
              transition={{
                delay: 0.4,
              }}
              onClick={() => {
                document.getElementById("footer-section").scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Socials
            </motion.button>
          </div>
          <motion.a
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
            href={BUY_TWIFT_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex px-4 md:px-8 py-2 bg-gradient-to-b from-[#FAFF81] to-[#FFC100] text-coklet md:text-2xl"
          >
            Buy $TWIFT
          </motion.a>
        </div>
      </div>
    </div>
  );
}

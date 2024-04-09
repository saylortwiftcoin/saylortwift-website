/* eslint-disable react/prop-types */
import twitorLineImg from "@/assets/twitor-line-2.png";
import telgramLineImg from "@/assets/telgram-line-2.png";
import chartLineImg from "@/assets/cahrt-line-2.png";
import saylorRageImg from "@/assets/saylor-rage-big.png";
import { cnm } from "@/utils";
import { forwardRef, useState } from "react";
import {
  CHART_LINK,
  CONTRACT_ADDRESS,
  DEXTOOLS_LINK,
  TELEGRAM_LINK,
  TWITTER_LINK,
} from "@/config";
import { motion } from "framer-motion";
import Image from "next/image";

const Marquee = forwardRef(function Marquee(props, ref) {
  return (
    <div ref={ref} className="marquee">
      <ul
        className={cnm("marquee__content scroll", props.reverse && "reverse")}
      >
        {props.children}
      </ul>
      <ul
        className={cnm("marquee__content scroll", props.reverse && "reverse")}
        aria-hidden="true"
      >
        {props.children}
      </ul>
    </div>
  );
});

const MarqueeMotion = motion(Marquee);

export function Footer() {
  const [isCopied, setCopied] = useState(false);

  async function copyCA() {
    setCopied(true);
    await navigator.clipboard.writeText(CONTRACT_ADDRESS);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  }
  return (
    <>
      <footer
        id="footer-section"
        className="w-full flex flex-col items-center justify-center bg-oren px-5 py-20 relative overflow-hidden"
      >
        {/* Marquee */}
        <div className="w-full absolute h-full top-[15%] left-0 flex items-center justify-center flex-col gap-12 font-semibold text-white/20">
          <MarqueeMotion
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
          >
            <p className="text-7xl md:text-9xl">Saylor Twift</p>
            <p className="text-7xl md:text-9xl">Saylor Twift</p>
          </MarqueeMotion>
          <MarqueeMotion
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
            reverse
          >
            <p className="text-7xl md:text-9xl">Saylor Twift</p>
            <p className="text-7xl md:text-9xl">Saylor Twift</p>
          </MarqueeMotion>
        </div>
        <div className="w-full max-w-7xl flex flex-col md:flex-row gap-8 items-center justify-center">
          <div className="flex items-center gap-6">
            {/* Twitter */}
            <motion.a
              href={TWITTER_LINK}
              target="_blank"
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
              className="w-14 md:w-16 relative flex items-center justify-center aspect-square bg-gradient-to-b from-[#FAFF81] to-[#FFC100] text-coklet text-2xl"
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 46 46"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M34.1068 6.07422H39.9228L27.2176 20.5335L42.1642 40.2075H30.4603L21.2955 28.2742L10.8071 40.2075H4.98542L18.5762 24.7433L4.23828 6.07422H16.238L24.5249 16.9817L34.1068 6.07422ZM32.0664 36.7411H35.2901L14.4859 9.3586H11.027L32.0664 36.7411Z"
                  fill="#724400"
                />
              </svg>
              <div className="absolute -bottom-[70%] -right-[90%] md:-bottom-[100%] md:-right-[150%] w-20 md:w-32">
                <Image
                  src={twitorLineImg}
                  alt="twit-graphic"
                  height={95}
                  width={214}
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.a>
            {/* Telegram */}
            <motion.a
              href={TELEGRAM_LINK}
              target="_blank"
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
                delay: 0.3,
              }}
              className="w-14 md:w-16 relative flex items-center justify-center aspect-square bg-gradient-to-b from-[#FAFF81] to-[#FFC100] text-coklet text-2xl"
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 46 46"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M40.2679 9.58594L4.23828 23.8082L17.5124 25.7045M40.2679 9.58594L35.5272 38.0304L17.5124 25.7045M40.2679 9.58594L17.5124 25.7045M17.5124 25.7045V36.1341L23.6734 29.9199"
                  stroke="#724400"
                  strokeWidth="3.41333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="absolute -top-[70%] -right-[90%] md:-top-[90%] md:-right-[150%] w-20 md:w-32">
                <Image
                  src={telgramLineImg}
                  alt="tele-graphic"
                  height={95}
                  width={214}
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.a>
            {/* Chart */}
          </div>
          <motion.div
            initial={{
              opacity: 0,
              x: 50,
              scale: 0.8,
            }}
            whileInView={{
              opacity: 100,
              x: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              delay: 0.5,
            }}
            className="flex flex-col md:flex-row gap-4 md:gap-0 mt-16 md:mt-0 relative"
          >
            <div className="bg-white py-3 px-5 text-coklet text-center text-xs md:text-2xl flex items-center">
              CA: {CONTRACT_ADDRESS}
            </div>
            {!CONTRACT_ADDRESS === "Coming Soon" && (
              <button
                onClick={copyCA}
                className="bg-gradient-to-b from-[#FAFF81] to-[#FFC100] text-coklet text-sm md:text-3xl px-3 md:px-10 py-3"
              >
                {isCopied ? "Copied" : "Copy"}
              </button>
            )}
          </motion.div>
        </div>

        <div className="mt-24 flex flex-col items-center">
          <h1 className="text-3xl text-[#FCEBB5] font-semibold">Charts</h1>

          <div className="flex flex-row items-center gap-2">
            <motion.a
              href={DEXTOOLS_LINK}
              rel="noreferrer"
              target="_blank"
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
                delay: 0.3,
              }}
              className="relative flex items-center justify-center px-4 py-4 bg-gradient-to-b from-[#FAFF81] to-[#FFC100] text-coklet text-xl"
            >
              Dextools
            </motion.a>

            <motion.a
              href={CHART_LINK}
              rel="noreferrer"
              target="_blank"
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
                delay: 0.3,
              }}
              className="relative flex items-center justify-center px-4 py-4 bg-gradient-to-b from-[#FAFF81] to-[#FFC100] text-coklet text-xl"
            >
              DexScreener
            </motion.a>
          </div>
        </div>

        {/* content */}
        <div className="w-full flex items-center justify-center px-5 mt-28 relative max-w-6xl mb-10 font-semibold">
          <motion.p
            initial={{
              opacity: 0,
              x: -100,
            }}
            whileInView={{
              opacity: 100,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            className="text-creme text-7xl md:text-9xl absolute top-2 md:top-6 left-0"
          >
            TO DAA
          </motion.p>
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.7,
            }}
            whileInView={{
              opacity: 100,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.9,
            }}
            className="w-[300px] md:w-[500px] aspect-square relative"
          >
            <Image
              src={saylorRageImg}
              alt="saylot-rage-twift"
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.p
            initial={{
              opacity: 0,
              y: 100,
              scale: 0.8,
            }}
            whileInView={{
              opacity: 100,
              y: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            className="text-creme text-7xl md:text-9xl absolute -bottom-10 md:-bottom-20 -right-5 md:right-0"
          >
            MOOONN!
          </motion.p>
        </div>
      </footer>
      <div className="bg-white w-full flex flex-col items-center justify-center gap-8 py-8 text-coklet px-5">
        <p className="max-w-3xl text-center">
          $TWIFT has no association with Michael Saylor and Taylor Swift. This
          token is simply a meme coin with no intrinsic value or expectation of
          financial return.
        </p>
        <p>2024 © all rights reserved</p>
      </div>
    </>
  );
}

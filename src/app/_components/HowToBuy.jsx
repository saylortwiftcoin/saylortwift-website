import saylorMoonImg from "@/assets/saylor-moon.png";
import coinsImg from "@/assets/coins.png";
import { useState } from "react";
import { cnm } from "@/utils";
import { motion } from "framer-motion";
import Image from "next/image";

const ImgMotion = motion(Image);

export function HowToBuy() {
  return (
    <section
      id="howtobuy-section"
      className="w-full flex items-center justify-center bg-oren px-5 py-20 overflow-hidden"
    >
      <div className="w-full flex flex-col items-center justify-between gap-16 max-w-[1400px]">
        <motion.h1
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 100,
            y: 0,
          }}
          transition={{
            duration: 0.5,
          }}
          viewport={{
            once: true,
            amount: 0.4,
          }}
          className="text-3xl md:text-5xl text-creme font-semibold"
        >
          how to buy
        </motion.h1>
        <div className="w-full flex flex-col items-center gap-10 md:flex-row justify-between">
          <div className="w-[256px] md:w-[480px] aspect-square relative">
            <ImgMotion
              initial={{
                opacity: 0,
                x: -100,
                rotate: 120,
              }}
              whileInView={{
                opacity: 100,
                x: 0,
                rotate: 0,
              }}
              transition={{
                duration: 0.5,
              }}
              viewport={{
                once: true,
                amount: 0.6,
              }}
              src={coinsImg}
              alt="coins"
              width={500}
              height={500}
              className="w-full h-full object-cover absolute"
            />
            <ImgMotion
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              whileInView={{
                opacity: 100,
                scale: 1,
              }}
              transition={{
                duration: 0.5,
                delay: 0.2,
              }}
              viewport={{
                once: true,
                amount: 0.6,
              }}
              src={saylorMoonImg}
              alt="saylot-twift"
              width={500}
              height={500}
              className="w-full h-full object-cover relative"
            />
          </div>
          <HowToBuyStep />
        </div>
      </div>
    </section>
  );
}

function HowToBuyStep() {
  const [currentStep, setCurrentStep] = useState(0);
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 100,
      }}
      whileInView={{
        opacity: 100,
        x: 0,
      }}
      transition={{
        duration: 0.5,
        delay: 0.2,
      }}
      viewport={{
        once: true,
        amount: 0.6,
      }}
      className="w-full max-w-3xl"
    >
      {/* List */}
      <div className="w-full flex text-xl md:text-3xl">
        {[...Array(4).keys()].map((idx) => (
          <button
            key={idx}
            onClick={() => {
              setCurrentStep(idx);
            }}
            className={cnm(
              "px-3 md:px-6 py-3 text-[#FAFF81]",
              currentStep === idx && "bg-white text-coklet"
            )}
          >
            Step {idx + 1}
          </button>
        ))}
      </div>
      <div className="w-full bg-white p-8 md:p-12 text-coklet">
        <HowToBuyStepContent currentStep={currentStep} />
      </div>
    </motion.div>
  );
}

function HowToBuyStepContent(props) {
  const steps = [
    {
      title: "Prepare Your Ethereum Wallet",
      desc: "Ensure your Ethereum wallet, like Base or MetaMask, is funded with ETH on Base (bridge through the app or transfer ETH from an exchange via Base chain).",
    },
    {
      title: "GET $TWIFT TOKEN CA",
      desc: "Visit the TWIFT website to find the official contract address. It's crucial to use the correct address to avoid scams. You can copy this address directly from the website.",
    },
    {
      title: "Purchase $TWIFT Tokens",
      desc: "In the DEX, paste the copied TWIFT contract address and select the amount of TWIFT tokens you wish to buy. Review and confirm the transaction. Alternatively, you can use the 'Buy' button on the TWIFT website, which might redirect you to a preferred exchange with the token pre-selected for trading.",
    },
    {
      title: "BECOME $TWIFT HODLER",
      desc: "Join the future of finance and embark on a journey of digital innovation. Hold your TWIFT tokens, and be part of a community that's shaping the next wave of Ethereum-based opportunities. It's not just an investment, it's a step into a new era of blockchain potential!",
    },
  ];

  // eslint-disable-next-line react/prop-types
  const { currentStep } = props;

  return (
    <div
      key={currentStep}
      className="flex flex-col gap-4 md:gap-6 w-full min-h-64"
    >
      <motion.h3
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 100,
          y: 0,
        }}
        transition={{
          duration: 0.3,
        }}
        className="font-semibold text-xl md:text-3xl"
      >
        {steps[currentStep].title}
      </motion.h3>
      <motion.p
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 100,
          y: 0,
        }}
        transition={{
          duration: 0.3,
          delay: 0.2,
        }}
        className="text-lg md:text-2xl"
      >
        {steps[currentStep].desc}
      </motion.p>
    </div>
  );
}

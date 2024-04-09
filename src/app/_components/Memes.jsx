import { motion } from "framer-motion";
import { BUY_TWIFT_LINK } from "@/config";
import { memes } from "@/data/memes/memes";
import Image from "next/image";

export function Memes() {
  return (
    <section
      id="memes-section"
      className="w-full flex items-center justify-center px-5 bg-white py-20"
    >
      <div className="w-full flex flex-col items-center gap-8 max-w-7xl text-coklet">
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
          className="text-4xl md:text-6xl font-semibold text-center"
        >
          get the memes yo!
        </motion.h1>
        <motion.p
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
          className="text-lg md:text-2xl"
        >
          copy and share it!!!!!
        </motion.p>
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
            amount: 0.4,
          }}
          className="w-full grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-10 mt-8"
        >
          {memes.map((meme) => (
            <div key={meme.alt} className="w-full bg-black/10 relative">
              {meme.type === "img" ? (
                <Image
                  src={meme.src}
                  alt={meme.alt}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              ) : (
                <video
                  className="w-full h-full object-contain"
                  muted
                  autoPlay
                  playsInline
                >
                  <source src={meme.src} />
                </video>
              )}
            </div>
          ))}
        </motion.div>
        <motion.a
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
          href={BUY_TWIFT_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 md:px-6 py-3.5 mt-8 bg-gradient-to-b from-[#f6fa70] to-[#FFC100] text-coklettext-lg md:text-2xl"
        >
          Buy $TWIFT
        </motion.a>
      </div>
    </section>
  );
}

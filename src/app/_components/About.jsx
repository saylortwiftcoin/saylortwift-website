import Image from "next/image";
import saylorThinkBitcoinImg from "@/assets/saylor-bitcoin.png";
import { motion } from "framer-motion";

export function About() {
  return (
    <section
      id="about-section"
      className="w-full flex items-center justify-center bg-white py-20 px-5 overflow-hidden"
    >
      <div className="w-full flex items-center flex-col md:flex-row justify-between gap-10 max-w-7xl">
        <div className="flex flex-col items-center gap-8 text-coklet text-center max-w-2xl">
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
            about
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
            transition={{
              delay: 0.2,
            }}
            viewport={{
              once: true,
              amount: 0.4,
            }}
            className="text-lg md:text-2xl"
          >
            Dun be a Blankie Space belieber in dat ol&apos; papah monehz. Dis
            ain&apos;t no Bad Blood sitch with Bitcoin, it&apos;s a luv story
            dat&apos;s gonna stick like glue furevah!
          </motion.p>
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
              amount: 0.4,
            }}
            className="text-lg md:text-2xl text-pretty"
          >
            Saylor Twift, da billionaire king o&apos; Bitcoin, is on a cray-cray
            mission to Shake It Off all dem doubters and make Bitcoin YUUUGE!
            He&apos;s our bravey brave cap&apos;n, steerin&apos; us to a You
            Belong With Me kinda future - a future all shiny with digital golds
            and $$$ freedomz. So hop on the squad, be a Fearless investy, and
            hodl on like there&apos;s no tomorrow!
          </motion.p>
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
              amount: 0.4,
            }}
            className="text-lg md:text-2xl"
          >
            Dis ain&apos;t no Teardrops on My Guitar drama, peeps,
            Bitcoin&apos;s gonna zoom us to places our wildest dreamies
            can&apos;t even peek at. Rememba, We Are Never Ever Getting Back
            Together with boring ol&apos; fiat - Bitcoin&apos;s our one and
            only!
          </motion.p>
        </div>
        <motion.div
          initial={{
            opacity: 0,
            x: 100,
            rotate: 180,
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
            amount: 0.8,
          }}
          className="w-[256px] md:w-[520px] aspect-square relative"
        >
          <Image
            src={saylorThinkBitcoinImg}
            alt="saylor-twift"
            width={600}
            height={600}
            className="w-full h-full object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
}

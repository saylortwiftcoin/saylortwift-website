"use client";

import { About } from "./_components/About";
import { Footer } from "./_components/Footer";
import { Header } from "./_components/Header";
import { Hero } from "./_components/Hero";
import { HowToBuy } from "./_components/HowToBuy";
import { Memes } from "./_components/Memes";
import { Tokenomics } from "./_components/Tokenomics";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <HowToBuy />
      <Tokenomics />
      <Memes />
      <Footer />
    </>
  );
}

"use client";

import { Navbar } from "../components/Navbar";
import HeroLivres from "../components/HeroLivres";
import { Footer } from "../components/Footer";

export default function Livres() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <HeroLivres />
      </div>
      <Footer />
    </div>
  );
}

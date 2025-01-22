"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { Livre } from "../types/livre";
import { Navbar } from "../components/Navbar";
import { FocusCards } from "../components/ui/focus-cards";
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

import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Temoigagnes } from "./components/Temoigagnes";

export default function Home() {
  return (
    <div className="background-image">
      <Navbar />
      <Hero />
      <div className="w-full flex-grow h-4 bg-red-600 mt-4"></div>
      <h1 className="text-4xl font-bold text-center text-teal-950 my-16">
        Nos Témoignages
      </h1>{" "}
      <Temoigagnes />
      <Footer />
    </div>
  );
}

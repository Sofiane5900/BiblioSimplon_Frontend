import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";

export default function Home() {
  return (
    <div className="background-image">
      <Navbar />
      <Hero />
    </div>
  );
}

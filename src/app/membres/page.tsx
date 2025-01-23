import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import MembresList from "../components/MembresList";

export default function Membres() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <MembresList />
      </div>
      <Footer />
    </div>
  );
}

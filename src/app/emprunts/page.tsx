import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import EmpruntsList from "../components/EmpruntsList";

export default function Emprunts() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <EmpruntsList />
      </div>
      <Footer />
    </div>
  );
}

"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { Livre } from "../types/livre";
import { FocusCards } from "../components/ui/focus-cards";
import Link from "next/link";
import { AjoutLivresForm } from "../components/AjoutLivresForm";
export default function HeroLivres() {
  const [livres, setLivres] = useState<Livre[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);

  useEffect(() => {
    axios.get("https://localhost:7252/api/Livres").then((response) => {
      setLivres(response.data);
    });
  }, []);

  const cards = livres.map((livre) => ({
    id: livre.id,
    title: livre.titre,
    auteur: livre.auteur,
    isbn: livre.isbn,
    estDisponible: livre.estDisponible,
    src: "https://m.media-amazon.com/images/I/91JaGS-evHL._UF1000,1000_QL80_.jpg", // Same image URL for all books
  }));

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl text-center font-bold text-teal-950 mb-4">
        Nos Livres
      </h1>

      <div className="flex justify-center items-center">
        <FocusCards cards={cards} />
      </div>
      <div className="flex justify-center mt-8">
        <button
          onClick={openModal}
          className="shadow-[0_0_0_3px_#8B0000_inset] px-6 py-2 bg-transparent border  text-teal-950 rounded-lg font-bold transform hover:-translate-y-1 transition duration-400"
        >
          Ajouter un livre
        </button>
        <AjoutLivresForm isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </div>
  );
}

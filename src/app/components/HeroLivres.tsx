"use client";
import { useState } from "react";
import { FocusCards } from "../components/ui/focus-cards";
import { AjoutLivresForm } from "../components/AjoutLivresForm";
import { useGetAllLivres } from "../hooks/useGetAllLivres";
import { Livre } from "../types/livre";
import { Card } from "../types/cards";

export default function HeroLivres() {
  const [isOpen, setIsOpen] = useState(false);
  const { livres } = useGetAllLivres();
  const openModal = () => setIsOpen(true);

  const cards: Card[] = livres.map((livre: Livre) => ({
    id: livre.id,
    title: livre.titre,
    auteur: livre.auteur,
    isbn: livre.isbn,
    estDisponible: livre.estDisponible,
    imageURL: livre.imageURL,
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

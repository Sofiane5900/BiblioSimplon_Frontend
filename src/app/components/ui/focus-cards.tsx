"use client";
import Image from "next/image";
import React, { useState } from "react";
import { cn } from "../../lib/utils";
import { useDeleteLivre } from "@/app/hooks/useDeleteLivre";
import { Card as CardType } from "../../types/cards";
// Card existe déjà, donc on renomme le type

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: any;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => {
    const { supprimerLivre } = useDeleteLivre(); // Utilisation de mon hook pour requete DELETE

    return (
      <div
        onMouseEnter={() => setHovered(index)}
        onMouseLeave={() => setHovered(null)}
        className={cn(
          "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-80 w-full transition-all  border-2 border-yellow-950 duration-300 ease-out",
          hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
        )}
      >
        <Image
          src={card.imageURL}
          alt="C'est une image"
          fill
          className="object-cover absolute inset-0"
        />
        <div
          className={cn(
            "absolute inset-0 bg-black/50 flex flex-col justify-end py-4 px-2 transition-opacity duration-300",
            hovered === index ? "opacity-100" : "opacity-0"
          )}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
          {/* Overlay */}
          <div className="relative text-xs md:text-sm font-medium text-white flex flex-col space-y-1 z-10">
            <span>{card.title}</span>
            <span>{card.auteur}</span>
            <span
              className={card.estDisponible ? "text-green-500" : "text-red-500"}
            >
              {card.estDisponible ? "Disponible" : "Indisponible"}
            </span>
            <div className="flex space-x-2 mt-2">
              <button
                className="px-2 py-1 bg-red-600 text-white rounded-md hover:bg-red-500 transition"
                onClick={() => supprimerLivre(card.id)}
              >
                Supprimer
              </button>
              <button className="px-2 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition">
                Emprunt
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

Card.displayName = "Card";

export function FocusCards({ cards }: { cards: CardType[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto md:px-8 w-full">
      {cards.map((card, index) => (
        <Card
          key={card.id}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}

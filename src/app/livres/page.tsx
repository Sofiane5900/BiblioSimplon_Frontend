"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { Livre } from "../types/livre";

export default function Livres() {
  const [livres, setLivres] = useState<Livre[]>([]);

  useEffect(() => {
    axios.get("https://localhost:7252/api/Livres").then((response) => {
      setLivres(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Livres:</h1>
      <ul>
        {livres.map((livre: Livre) => (
          <li key={livre.id} className="mb-5">
            <div className="flex flex-col">
              <span>Titre : {livre.titre}</span>
              <span>Auteur : {livre.auteur}</span>
              <span>ISBN : {livre.isbn}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

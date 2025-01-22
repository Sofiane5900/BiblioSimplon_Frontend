import axios from "axios";
import { useEffect, useState } from "react";
import { Livre } from "../types/livre";
import { ModalSupression } from "../components/ModalSupression";

export const useGetAllLivres = () => {
  const [livres, setLivres] = useState<Livre[]>([]);

  useEffect(() => {
    // UseEffect s'éxecute après chaque rendu de la page
    axios.get("https://localhost:7252/api/Livres").then((response) => {
      setLivres(response.data);
    });
  }, []); // le tableau de dépendences vide = s'éxecute une seul fois lors du premier rendu

  return { livres };
};

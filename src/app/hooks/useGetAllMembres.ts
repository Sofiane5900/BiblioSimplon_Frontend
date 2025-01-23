import axios from "axios";
import { useEffect, useState } from "react";
import { Membre } from "../types/membre";

export const useGetAllMembres = () => {
  const [membres, setMembres] = useState<Membre[]>([]);

  useEffect(() => {
    // UseEffect s'éxecute après chaque rendu de la page
    axios.get("https://localhost:7252/api/Membre").then((response) => {
      setMembres(response.data);
    });
  }, []); // le tableau de dépendences vide = s'éxecute une seul fois lors du premier rendu

  return { membres };
};

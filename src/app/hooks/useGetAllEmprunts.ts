import axios from "axios";
import { useEffect, useState } from "react";
import { Emprunts } from "../types/emprunts";

export const useGetAllEmprunts = () => {
  const [emprunts, setEmprunts] = useState<Emprunts[]>([]);

  useEffect(() => {
    axios
      .get("https://localhost:7252/api/Emprunt/empruntsActif")
      .then((response) => {
        setEmprunts(response.data);
      });
  }, []);

  return { emprunts };
};

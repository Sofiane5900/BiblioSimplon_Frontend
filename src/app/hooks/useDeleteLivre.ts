import axios from "axios";
import { useState } from "react";
import { ModalSupressionSuccess } from "../components/ModalSupression";

export const useDeleteLivre = () => {
  const [error, setError] = useState<string | null>(null);

  const supprimerLivre = async (id: number) => {
    try {
      const response = await axios.delete(
        `https://localhost:7252/api/Livres/${id}`
      );
      console.log(response.data);
      setError(null);
    } catch (err) {
      console.error(err);
      alert("Erreur lors de la suppression");
    }
  };

  return { supprimerLivre, error };
};

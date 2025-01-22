import axios from "axios";
import { useState } from "react";

export const useDeleteLivre = () => {
  const [error, setError] = useState<string | null>(null);

  const supprimerLivre = async (id: number) => {
    setError(null);
    try {
      const response = await axios.delete(
        `https://localhost:7252/api/Livres/${id}`
      );
      console.log(response.data);
      window.location.reload();
    } catch (err) {
      console.error(err);
      alert("Erreur lors de la suppression");
    }
  };

  return { supprimerLivre, error };
};

import axios from "axios";
import { useState } from "react";

export const useDeleteLivre = () => {
  const supprimerLivre = async (id: number) => {
    try {
      const response = await axios.delete(
        `https://localhost:7252/api/Livres/${id}`
      );
      console.log(response.data);
      alert("Livre supprimé avec succès");
      window.location.reload();
    } catch (err) {
      console.error(err);
      alert("Erreur lors de la suppression");
    }
  };

  return { supprimerLivre };
};

import axios from "axios";

export function useDeleteMembre() {
  const supprimerMembre = async (id: number) => {
    try {
      const response = await axios.delete(
        `https://localhost:7252/api/Membre/${id}`
      );
      console.log(response.data);
      alert("Membre supprimé avec succès");
      window.location.reload();
    } catch (err) {
      alert("Erreur lors de la suppression");
      console.error(err);
    }
  };
  return { supprimerMembre };
}

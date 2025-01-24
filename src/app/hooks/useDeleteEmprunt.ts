import axios from "axios";

export function useDeleteEmprunt() {
  const supprimerEmprunt = async (id: number) => {
    try {
      const response = await axios.delete(
        `https://localhost:7252/api/Emprunt`,
        {
          params: { Id: id }, // la requête DELETE attend un parametre ID
        }
      );
      console.log(response.data);
      alert("Emprunt supprimé avec succès");
      window.location.reload();
    } catch (err) {
      console.error(err);
      alert("Erreur lors de la suppression");
    }
  };

  return { supprimerEmprunt };
}

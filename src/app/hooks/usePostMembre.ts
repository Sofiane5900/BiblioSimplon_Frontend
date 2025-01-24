import axios from "axios";

export function usePostMembre() {
  const AjoutMembre = async (
    nom: string,
    prenom: string,
    email: string,
    imageURL: string
  ) => {
    try {
      const response = await axios.post("https://localhost:7252/api/Membre", {
        nom,
        prenom,
        email,
        imageURL,
      });
      alert("Membre ajouté avec succès");
      console.log(response.data);
      window.location.reload();
    } catch (err) {
      console.error(err);
      alert("Erreur lors de l'ajout");
    }
  };
  return { AjoutMembre };
}

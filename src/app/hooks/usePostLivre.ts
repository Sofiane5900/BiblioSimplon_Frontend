import axios from "axios";

export const usePostLivre = () => {
  const AjoutLivre = async (
    titre: string,
    auteur: string,
    ISBN: string,
    imageURL: string
  ) => {
    try {
      const response = await axios.post("https://localhost:7252/api/Livres", {
        titre,
        auteur,
        ISBN,
        imageURL,
      });
      alert("Livre ajouté avec succès");
      console.log(response.data);
      window.location.reload();
    } catch (err) {
      console.error(err);
      alert("Erreur lors de l'ajout");
    }
  };

  return { AjoutLivre };
};

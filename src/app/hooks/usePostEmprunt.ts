import axios from "axios";

export function usePostEmprunts() {
    const AjoutEmprunt = async (
        membreId: number,
        livreId: number,
    ) => {
        try {
            const response = await axios.post("https://localhost:7252/api/Emprunt", {
                // La requete POST prend en paramétres, l'id d'un membre et d'un livre
                membreId,
                livreId,  
            });
            alert("Emprunt ajouté avec succès");
            console.log(response.data);
            window.location.reload();
        } catch (err) {
            console.error(err);
            alert("Erreur lors de l'ajout");
        }
    }

    return { AjoutEmprunt };
}
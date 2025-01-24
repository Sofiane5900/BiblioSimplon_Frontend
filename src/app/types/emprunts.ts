export interface Emprunts {
  id: number;
  membreId: number;
  livreId: number;
  dateEmprunt: Date;
  dateRetour: Date;
  enCours: boolean;
}

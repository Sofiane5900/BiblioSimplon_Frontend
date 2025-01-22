import { AnimatedTestimonials } from "./ui/animated-testimonials";

export function Temoigagnes() {
  const testimonials = [
    {
      quote:
        "L'application a révolutionné notre façon de gérer les emprunts. Tout est beaucoup plus fluide, et les retours sont simplifiés. C'est un véritable gain de temps pour nous et pour nos usagers.",
      name: "Michel Dupont",
      designation: "Agent de médiathèque",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Depuis que nous utilisons cette application, le suivi des emprunts et des réservations est un jeu d'enfant. Les usagers sont ravis de la rapidité du service.",
      name: "Sarah Chen",
      designation: "Bibliothécaire jeunesse",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "L'interface intuitive de l'application a simplifié la gestion des collections et des emprunts. Même les tâches les plus complexes sont devenues accessibles.",
      name: "Pierre Martin",
      designation: "Responsable des collections",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Le système est tellement bien pensé qu'il facilite la médiation numérique. Nous pouvons accompagner les usagers avec plus de fluidité dans leurs recherches et emprunts.",
      name: "Nicolas Lefebvre",
      designation: "Chargé de médiation numérique",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "La gestion des prêts et des rappels est désormais automatisée, ce qui nous permet de consacrer plus de temps à organiser des événements pour nos usagers.",
      name: "Quentin Durand",
      designation: "Responsable animation culturelle",
      src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Depuis l'arrivée de cette application, je constate que l'ambiance à la bibliothèque est beaucoup plus calme et organisée. Les usagers semblent ravis, et le personnel est plus détendu. Un environnement parfait pour un félin tel que moi, toujours à la recherche de sérénité.",
      src: "https://i.pinimg.com/736x/d1/7c/c7/d17cc7bf0e13fcdf975dd682d5df792f.jpg",
      name: "Beluga",
      designation: "Observateur félin officiel de la bibliothèque",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}

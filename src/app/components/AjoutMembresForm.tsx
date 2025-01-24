"use client";
import { useState } from "react";
import { BiBook, BiUser, BiBarcode, BiImage } from "react-icons/bi";
import { usePostMembre } from "../hooks/usePostMembre";

export function AjoutMembresForm({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { AjoutMembre } = usePostMembre();
  const closeModal = () => setIsOpen(false);

  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    imageURL: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await AjoutMembre(
      formData.nom,
      formData.prenom,
      formData.email,
      formData.imageURL
    );
    closeModal(); // Fermeture de la modale après ajout
  };

  return (
    <div>
      {/* Si isOpen est true */}
      {isOpen && (
        <>
          {/* Effet overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={closeModal}
          />

          <div className="fixed inset-0 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl p-8 w-full max-w-2xl transition-transform">
              <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold  mx-auto text-teal-950">
                  Ajout d&apos;un membre
                </h1>
                <button
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                      <BiBook className="text-gray-400 text-xl" />
                    </div>
                    <input
                      type="text"
                      name="nom"
                      className="w-full pl-12 pr-8 py-4 text-lg border-b-2 border-gray-300 focus:border-teal-800 transition-colors bg-transparent outline-none"
                      placeholder="Nom"
                      value={formData.nom}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                      <BiUser className="text-gray-400 text-xl" />
                    </div>
                    <input
                      type="text"
                      name="prenom"
                      className="w-full pl-12 pr-8 py-4 text-lg border-b-2 border-gray-300 focus:border-teal-800 transition-colors bg-transparent outline-none"
                      placeholder="Prénom"
                      value={formData.prenom}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                      <BiBarcode className="text-gray-400 text-xl" />
                    </div>
                    <input
                      type="text"
                      name="email"
                      className="w-full pl-12 pr-8 py-4 text-lg border-b-2 border-gray-300 focus:border-teal-800 transition-colors bg-transparent outline-none"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                      <BiImage className="text-gray-400 text-xl" />
                    </div>
                    <input
                      type="text"
                      name="imageURL"
                      className="w-full pl-12 pr-8 py-4 text-lg border-b-2 border-gray-300 focus:border-teal-800 transition-colors bg-transparent outline-none"
                      placeholder="URL de l'image"
                      value={formData.imageURL}
                      onChange={handleChange}
                    />
                  </div>

                  <button
                    className="w-full bg-red-600 text-white py-4 rounded-xl text-lg font-medium transition-all duration-300 hover:bg-red-800 hover:shadow-lg transform hover:-translate-y-0.5 mt-8"
                    type="submit"
                  >
                    Ajouter le membre
                  </button>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default AjoutMembresForm;

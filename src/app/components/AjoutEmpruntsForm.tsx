"use client";
import { useState } from "react";
import { BiBook, BiUser} from "react-icons/bi";
import { usePostEmprunts } from "../hooks/usePostEmprunt";

export function AjoutEmpruntsForm({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { AjoutEmprunt } = usePostEmprunts();
  const closeModal = () => setIsOpen(false);

  const [formData, setFormData] = useState({
    membreId: '',
    livreId: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await AjoutEmprunt(
    // je map mes données en number, car elles sont de type string lors de la saisie
      Number(formData.membreId), 
      Number(formData.livreId),
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
                  Ajout d&apos;un emprunt
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
                      <BiUser className="text-gray-400 text-xl" />
                    </div>
                    <input
                      type="text"
                      name="membreId"
                      className="w-full pl-12 pr-8 py-4 text-lg border-b-2 border-gray-300 focus:border-teal-800 transition-colors bg-transparent outline-none"
                      placeholder="ID Membre"
                      value={formData.membreId}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                      <BiBook className="text-gray-400 text-xl" />
                    </div>
                    <input
                      type="text"
                      name="livreId"
                      className="w-full pl-12 pr-8 py-4 text-lg border-b-2 border-gray-300 focus:border-teal-800 transition-colors bg-transparent outline-none"
                      placeholder="ID Livre"
                      value={formData.livreId}
                      onChange={handleChange}
                    />
                  </div>

                  <button
                    className="w-full bg-teal-500 text-white py-4 rounded-xl text-lg font-medium transition-all duration-300 hover:bg-red-800 hover:shadow-lg transform hover:-translate-y-0.5 mt-8"
                    onClick={async () => await AjoutEmprunt(Number(formData.membreId), Number(formData.livreId))}
                    type="submit"
                 >
                    Ajouter l&apos;emprunt
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

export default AjoutEmpruntsForm;

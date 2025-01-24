"use client";
import { useState } from "react";
import { useDeleteMembre } from "../hooks/useDeleteMembre";
import { useGetAllMembres } from "../hooks/useGetAllMembres";
import AjoutMembresForm from "./AjoutMembresForm";
import Image from "next/image";

export default function MembresList() {
  const { membres } = useGetAllMembres();
  const { supprimerMembre } = useDeleteMembre();
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);

  return (
    <div className="className">
      <div className="mx-auto max-w-screen-lg px-4 py-8 sm:px-8">
        <div className="flex items-center justify-between pb-6">
          <div>
            <h2 className="font-semibold text-gray-700">Membres</h2>
            <span className="text-xs text-gray-500">
              Liste de tous les membres
            </span>
          </div>
        </div>
        <div className="overflow-y-hidden rounded-lg border">
          <div className="overflow-x-auto">
            <table className="w-full bg-red-500 text-white">
              <thead>
                <tr>
                  <th className="px-5 py-3 text-center">ID</th>
                  <th className="px-5 py-3 text-center">Avatar</th>
                  <th className="px-5 py-3 text-center">Nom</th>
                  <th className="px-5 py-3 text-center">Prenom</th>
                  <th className="px-5 py-3 text-center">Email</th>
                  <th className="px-5 py-3 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {membres.map((membre, index) => (
                  <tr key={index}>
                    <td className="border-b border-gray-200 bg-white text-teal-950 px-5 py-5 text-sm text-center">
                      <p className="whitespace-no-wrap">{membre.id}</p>
                    </td>
                    <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm text-center">
                      <div className="h-10 w-10 mx-auto">
                        <Image
                          className="h-full w-full rounded-full"
                          src={membre.imageURL}
                          alt="Avatar"
                          width={40}
                          height={40}
                        />
                      </div>
                    </td>
                    <td className="border-b border-gray-200 bg-white  text-teal-950 px-5 py-5 text-sm text-center">
                      <p className="whitespace-no-wrap">{membre.nom}</p>
                    </td>
                    <td className="border-b border-gray-200 bg-white text-teal-950 px-5 py-5 text-sm text-center">
                      <p className="whitespace-no-wrap">{membre.prenom}</p>
                    </td>
                    <td className="border-b border-gray-200 bg-white text-teal-950 px-5 py-5 text-sm text-center">
                      <p className="whitespace-no-wrap">{membre.email}</p>
                    </td>
                    <td className="border-b border-gray-200 bg-white  text-teal-950 px-5 py-5 text-sm text-center">
                      <button
                        className="text-red-500 hover:text-red-700"
                        onClick={() => supprimerMembre(membre.id)}
                      >
                        X
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-2">
        <button
          onClick={openModal}
          className="shadow-[0_0_0_3px_#8B0000_inset] px-6 py-2 bg-transparent border  text-teal-950 rounded-lg font-bold transform hover:-translate-y-1 transition duration-400"
        >
          Ajouter un membre
        </button>
        <AjoutMembresForm isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </div>
  );
}

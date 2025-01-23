"use client";
import { useGetAllMembres } from "../hooks/useGetAllMembres";
import Image from "next/image";

export default function MembresList() {
  const { membres } = useGetAllMembres();

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
                </tr>
              </thead>
              <tbody className="text-gray-500">
                {membres.map((membre, index) => (
                  <tr key={index}>
                    <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm text-center">
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
                    <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm text-center">
                      <p className="whitespace-no-wrap">{membre.nom}</p>
                    </td>
                    <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm text-center">
                      <p className="whitespace-no-wrap">{membre.prenom}</p>
                    </td>
                    <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm text-center">
                      <p className="whitespace-no-wrap">{membre.email}</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";
import { useGetAllEmprunts } from "../hooks/useGetAllEmprunts";
import { useDeleteEmprunt } from "../hooks/useDeleteEmprunt";

export default function EmpruntsList() {
  const { emprunts } = useGetAllEmprunts();
  const { supprimerEmprunt } = useDeleteEmprunt();
  // const [isOpen, setIsOpen] = useState(false);
  // const openModal = () => setIsOpen(true);

  return (
    <div className="className">
      <div className="mx-auto max-w-screen-lg px-4 py-8 sm:px-8">
        <div className="flex items-center justify-between pb-6">
          <div>
            <h2 className="font-semibold text-gray-700">Emprunts</h2>
            <span className="text-xs text-gray-500">
              Liste de tous les emprunts
            </span>
          </div>
        </div>
        <div className="overflow-y-hidden rounded-lg border">
          <div className="overflow-x-auto">
            <table className="w-full bg-teal-500 text-white">
              <thead>
                <tr>
                  <th className="px-5 py-3 text-center">ID</th>
                  <th className="px-5 py-3 text-center">MembreID</th>
                  <th className="px-5 py-3 text-center">LivreID</th>
                  <th className="px-5 py-3 text-center">Date Emprunt</th>
                  <th className="px-5 py-3 text-center">Date Retour</th>
                  <th className="px-5 py-3 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {emprunts.map((emprunt, index) => (
                  <tr key={index}>
                    <td className="border-b border-gray-200 bg-white text-teal-950 px-5 py-5 text-sm text-center">
                      <p className="whitespace-no-wrap">{emprunt.id}</p>
                    </td>
                    <td className="border-b border-gray-200 bg-white text-teal-950 px-5 py-5 text-sm text-center">
                      <p className="whitespace-no-wrap">{emprunt.membreId}</p>
                    </td>
                    <td className="border-b border-gray-200 bg-white  text-teal-950 px-5 py-5 text-sm text-center">
                      <p className="whitespace-no-wrap">{emprunt.livreId}</p>
                    </td>
                    <td className="border-b border-gray-200 bg-white text-teal-950 px-5 py-5 text-sm text-center">
                      <p className="whitespace-no-wrap">
                        {new Date(emprunt.dateEmprunt).toLocaleDateString()}
                      </p>
                    </td>
                    <td className="border-b border-gray-200 bg-white text-teal-950 px-5 py-5 text-sm text-center">
                      {new Date(emprunt.dateRetour).toLocaleDateString()}
                    </td>
                    <td className="border-b border-gray-200 bg-white  text-teal-950 px-5 py-5 text-sm text-center">
                      <button
                        className="text-red-500 hover:text-red-700"
                        onClick={() => supprimerEmprunt(emprunt.id)}
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
    </div>
  );
}

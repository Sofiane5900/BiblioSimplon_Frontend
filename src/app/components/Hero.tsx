"use client";
import Image from "next/image";
import { ColourfulText } from "./ui/colourful-text";
import Link from "next/link";
import HeroImage from "../../../public/Unsplash.webp";

export function Hero() {
  return (
    <>
      <div className="flex flex-col poppins xl:flex-row items-center justify-between w-full max-w-screen-xl 2xl:max-w-screen-2xl m-auto px-8 py-20">
        <div className="text-center xl:text-left space-y-6 max-w-lg">
          <h1 className="text-4xl font-bold poppins text-teal-950 ">
            Gérez la bibliothèque avec l&apos;application{" "}
            <ColourfulText text="BiblioSimplon" />
          </h1>
          <p className="text-gray-600 text-lg">
            Ajoutez, modifiez ou supprimez des livres en toute simplicité.
            Optimisez la gestion de la collection pour offrir une expérience
            exceptionnelle aux utilisateurs.
          </p>
          <div className="flex flex-col gap-4 xl:flex-row">
            <Link href="/livres">
              <button className="px-6 py-3 bg-teal-950 text-white rounded-md shadow-md hover:bg-teal-700 transition">
                Consulter les livres
              </button>
            </Link>
            <Link href="/emprunts">
              <button className="px-8 py-3 bg-red-600 text-white rounded-md shadow-md hover:bg-red-500 transition">
                Faire un emprunt
              </button>
            </Link>
          </div>
        </div>

        <div className="flex-shrink-0 py-10">
          <Image src={HeroImage} alt="Hero" width={500} height={500} />
        </div>
      </div>
    </>
  );
}

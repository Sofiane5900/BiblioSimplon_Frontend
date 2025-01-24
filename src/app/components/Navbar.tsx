"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Book,
  Search,
  UserCircle,
  Settings,
  Menu,
  X,
  Handshake,
} from "lucide-react";

const NavItem = ({
  href,
  icon: Icon,
  children,
}: {
  href: string;
  icon: React.ElementType;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    className="flex items-center space-x-2 text-gray-900 hover:text-red-600"
  >
    <Icon size={20} />
    <span>{children}</span>
  </Link>
);

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="background-image">
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0 flex items-center">
                <Book className="h-8 w-8 text-red-400" />
                <h1 className="ml-2 text-xl font-bold text-gray-900">
                  Biblio<span className="text-red-800">Simplon</span>
                </h1>
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8 ">
              <NavItem href="/livres" icon={Book}>
                Livres
              </NavItem>
              <NavItem href="/membres" icon={UserCircle}>
                Membres
              </NavItem>
              <NavItem href="/emprunts" icon={Handshake}>
                Emprunts
              </NavItem>
            </div>
            <div className="flex items-center sm:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              >
                {isOpen ? (
                  <X className="block h-6 w-6" />
                ) : (
                  <Menu className="block h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <NavItem href="/my-books" icon={Book}>
                Livres
              </NavItem>
              <NavItem href="/profile" icon={UserCircle}>
                Membres
              </NavItem>
              <NavItem href="/settings" icon={Handshake}>
                Emprunts
              </NavItem>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}

"use client";
import { useState } from "react";
import { ShoppingCart, User, Menu, X } from "lucide-react";
import Image from "next/image";
import logo from "../logo-bw.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#7AD154] text-black p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold">
          <Image src={logo} alt="Mon logo" width={60} height={60} />
          
          </h1>

        {/* Menu Desktop (toujours visible) */}
        <nav className="hidden md:flex space-x-6">
          <a href="/" className="hover:underline">Accueil</a>
          <a href="/boutique" className="hover:underline">Boutique</a>
          <a href="/about" className="hover:underline">À propos de nous</a>
          <a href="/profil" className="hover:underline flex items-center">
            <User className="w-6 h-6" />
          </a>
          <a href="/panier" className="hover:underline flex items-center">
            <ShoppingCart className="ml-2 w-5 h-5" />
          </a>
        </nav>

        {/* Bouton Menu Burger Mobile */}
        <button 
          className="md:hidden block" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Menu Mobile (affichage conditionnel) */}
      {isOpen && (
        <nav className="md:hidden flex flex-col items-center bg-yellow-700 py-4 space-y-2">
          <a href="/" className="hover:underline">Accueil</a>
          <a href="/boutique" className="hover:underline">Boutique</a>
          <a href="/about" className="hover:underline">À propos de nous</a>
          <a href="/profil" className="hover:underline flex items-center">
            <User className="w-6 h-6" />
          </a>
          <a href="/panier" className="hover:underline flex items-center">
            <ShoppingCart className="ml-2 w-5 h-5" />
          </a>
        </nav>
      )}
    </header>
  );
}

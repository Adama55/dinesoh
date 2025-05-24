"use client";
import { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // <- État pour le chargement

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Erreur de récupération :", error))
      .finally(() => setIsLoading(false)); // <- Fin du chargement
  }, []);

  return (
    <main className="min-h-screen p-8 sm:p-20 bg-gray-50 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-4xl font-bold mb-10 text-center text-green-800">
        Nos produits
      </h1>

      {isLoading ? (
        <div className="flex justify-center items-center min-h-[200px]">
          <div className="w-12 h-12 border-4 border-green-600 border-t-transparent rounded-full animate-spin" />
        </div>
      ) : products.length === 0 ? (
        <p className="text-center text-gray-500">Aucun produit disponible pour le moment.</p>
      ) : (
        <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map(({ id, name, description, price, imgUrl }) => (
            <li
              key={id}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col hover:shadow-xl transition-shadow"
            >
              {imgUrl && (
                <img
                  src={imgUrl}
                  alt={name}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
              )}
              <h2 className="text-xl font-semibold mb-2 text-green-900">{name}</h2>
              <p className="text-gray-700 flex-grow">{description}</p>
              <strong className="mt-4 text-green-700 text-lg">{price} €</strong>
              <button className="mt-6 bg-green-600 text-white py-2 rounded hover:bg-green-700 transition">
                Voir le produit
              </button>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}

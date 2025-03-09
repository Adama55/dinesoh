"use client";
import { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("/api/table-test")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Erreur de récupération :", error));
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

        <div className="flex gap-4 items-center flex-col sm:flex-row">
         Products pages
        </div>
        <div>
      <h2>Nos produits</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <strong>{product.price} €</strong>
          </li>
        ))}
      </ul>
    </div>
     
    </div>
  );
}


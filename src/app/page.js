import Image from "next/image";
import logo from "../logo.png"; // Image placée dans "public/"
import heroImage from "../abaya.png";
import hijabImage from "../hijab.png";

export default function Home() {
  return (
    <main className="bg-white text-gray-900">
      {/* Hero section */}
      <section className="relative min-h-[90vh] flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 pt-24 pb-12 gap-16">
        <div className="flex-1 space-y-6">
          <h1 className="text-5xl sm:text-6xl font-bold leading-tight text-gray-900">
            La nouvelle ère du shopping avec <span className="text-green-600">Dinesoh</span>
          </h1>
          <p className="text-lg text-gray-600">
            Explorez des milliers de produits tendance. Achetez en toute simplicité et sécurité avec une expérience inoubliable.
          </p>
          <div className="flex gap-4">
            <a href="/shop" className="px-6 py-3 bg-green-600 text-white rounded-full text-lg font-semibold hover:bg-green-700 transition">
              Commencer vos achats
            </a>
            <a href="/about" className="px-6 py-3 border border-green-600 text-green-600 rounded-full text-lg font-semibold hover:bg-green-50 transition">
              En savoir plus
            </a>
          </div>
        </div>

        <div className="flex-1 relative w-full h-[400px] md:h-[500px]">
          <Image
            src={heroImage}
            alt="Image d'accueil"
            fill
            className="object-cover rounded-xl shadow-xl"
            priority
          />
        </div>
      </section>

      { /* section explorer nos produits*/}
      <section className="w-full max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Nos produits phares
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Découvrez une sélection de nos meilleurs articles
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden shadow hover:shadow-lg transition"
            >
              <div className="bg-gray-100 dark:bg-gray-800 h-56 w-full relative">
                <Image
                  src={hijabImage}
                  alt={`Produit ${item}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 flex flex-col items-start">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  Nom du produit {item}
                </h3>
                <p className="text-green-600 dark:text-green-400 font-bold mt-1">
                  49,99 €
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/boutique"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-xl shadow"
          >
            Explorer la boutique
          </a>
        </div>
      </section>

      

      {/* Features section */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Pourquoi choisir <span className="text-green-600">Dinesoh</span> ?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
              <div className="text-green-600 text-3xl mb-4">🚚</div>
              <h3 className="text-xl font-semibold mb-2">Livraison rapide</h3>
              <p className="text-gray-600">Nous livrons vos commandes rapidement, peu importe où vous êtes.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
              <div className="text-green-600 text-3xl mb-4">💳</div>
              <h3 className="text-xl font-semibold mb-2">Paiement sécurisé</h3>
              <p className="text-gray-600">Des transactions cryptées pour une sécurité maximale.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
              <div className="text-green-600 text-3xl mb-4">🎁</div>
              <h3 className="text-xl font-semibold mb-2">Offres spéciales</h3>
              <p className="text-gray-600">Profitez de remises régulières et de programmes de fidélité.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

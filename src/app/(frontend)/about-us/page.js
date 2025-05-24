// src/app/about/page.jsx
export default function About() {
    return (
      <main className="min-h-screen px-6 py-16 sm:px-20 bg-white text-gray-800 font-[family-name:var(--font-geist-sans)]">
        <section className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold text-green-800 mb-4">À propos de nous</h1>
          <p className="text-lg text-gray-600">
            Découvrez notre histoire, notre mission et les valeurs qui nous animent.
          </p>
        </section>
  
        <section className="max-w-4xl mx-auto space-y-12">
          <div>
            <h2 className="text-2xl font-semibold text-green-700 mb-2">Notre histoire</h2>
            <p className="text-gray-700 leading-relaxed">
              Fondée en 2025, notre boutique en ligne est née de la volonté de proposer une expérience d’achat simple,
              transparente et de qualité. Depuis nos débuts, nous nous engageons à offrir des produits soigneusement sélectionnés
              pour répondre aux besoins de nos clients.
            </p>
          </div>
  
          <div>
            <h2 className="text-2xl font-semibold text-green-700 mb-2">Notre mission</h2>
            <p className="text-gray-700 leading-relaxed">
              Notre objectif est clair : rendre l’achat en ligne agréable et fiable. Nous mettons tout en œuvre pour garantir
              un service client réactif, des produits de qualité et une plateforme intuitive accessible à tous.
            </p>
          </div>
  
          <div>
            <h2 className="text-2xl font-semibold text-green-700 mb-2">Nos valeurs</h2>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed">
              <li><strong>Transparence</strong> – dans nos prix, nos produits et notre communication.</li>
              <li><strong>Engagement</strong> – pour la satisfaction client et l’amélioration continue.</li>
              <li><strong>Durabilité</strong> – en sélectionnant des produits responsables et durables.</li>
            </ul>
          </div>
  
          <div className="text-center pt-10">
            <p className="text-md text-gray-600">
              Merci de faire partie de notre aventure. Ensemble, construisons une expérience d’achat qui a du sens.
            </p>
          </div>
        </section>
      </main>
    );
  }
  
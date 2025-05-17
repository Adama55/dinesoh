export default function Footer() {
  return (
    <footer className="bg-black text-white py-6 mt-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center text-sm">
        <p className="mb-2 sm:mb-0">© 2025 - Tous droits réservés</p>
        <div className="flex space-x-4">
          <a href="/mentions-legales" className="hover:text-green-500 transition-colors">Mentions légales</a>
          <a href="/confidentialite" className="hover:text-green-500 transition-colors">Confidentialité</a>
          <a href="/contact" className="hover:text-green-500 transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}

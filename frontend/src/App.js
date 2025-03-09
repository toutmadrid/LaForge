import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Header simplifié */}
      <header className="bg-gray-900 p-4 text-white">
        <h1 className="text-2xl font-bold">MarketPlace Industrielle</h1>
        <nav className="mt-2 flex space-x-4">
          <button className="px-4 py-2 bg-blue-500 rounded-lg">Connexion</button>
          <button className="px-4 py-2 bg-green-500 rounded-lg">Inscription</button>
        </nav>
      </header>

      <main className="p-4">
        {/* Recherche rapide */}
        <section className="my-8">
          <input
            type="text"
            placeholder="Chercher des capacités industrielles..."
            className="w-full px-4 py-2 border rounded-lg shadow"
          />
          <div className="mt-4 flex space-x-2">
            <select className="px-4 py-2 border rounded">
              <option>Localisation</option>
            </select>
            <select className="px-4 py-2 border rounded-lg">
              <option>Certification</option>
            </select>
            <button className="px-4 py-2 bg-green-500 rounded-lg text-white">
              Rechercher
            </button>
          </div>
        </section>

        {/* Simulated Search Results */}
        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-4">Résultats de recherche</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="border p-4 rounded-lg shadow-lg">
                <h3 className="font-bold">Fournisseur {item}</h3>
                <p>Capacités : Usinage, Impression 3D</p>
                <p>Localisation : Île-de-France</p>
                <button className="mt-2 px-3 py-1 bg-green-500 text-white rounded-lg">
                  Demander un devis
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Dashboard utilisateur */}
        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-4">Tableau de bord</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold">Mes commandes</h3>
              <ul>
                <li>Commande #1 - En cours</li>
                <li>Commande #123 - Livrée</li>
              </ul>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold">Mes devis</h3>
              <ul>
                <li>Devis #245 - En attente</li>
                <li>Devis #242 - Accepté</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}



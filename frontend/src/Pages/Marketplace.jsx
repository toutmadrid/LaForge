import React from 'react';
import { Button } from '@/components/ui/button';

export default function Marketplace() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-gray-800 text-white py-6">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">Marketplace Industrielle</h1>
          <nav className="space-x-4">
            <Button variant="outline">Connexion</Button>
            <Button>Inscription</Button>
          </nav>
        </div>
      </header>

      <main className="p-8">
        <section className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Trouvez les capacités industrielles dont vous avez besoin</h2>
          <div className="flex gap-2 max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Rechercher une capacité industrielle..."
              className="flex-grow border rounded-lg p-3 shadow-sm"
            />
            <Button>Rechercher</Button>
          </div>
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">Services populaires</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["Usinage Métal", "Impression 3D", "Assemblage"].map((service, idx) => (
              <div key={idx} className="bg-white shadow-lg rounded-lg p-6">
                <h3 className="text-lg font-bold mb-2">{service}</h3>
                <p className="text-gray-600">Description courte du service proposé.</p>
                <Button className="mt-4">Demander un devis</Button>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-4 text-center">
        <div className="container mx-auto">
          <a href="#" className="mr-4">Mentions légales</a>
          <a href="#">CGU</a>
          <p className="mt-2">© 2025 Marketplace Industrielle. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}

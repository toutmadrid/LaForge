import React from 'react';
import { Button } from '@/components/ui/button';

export default function ProductDetail() {
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

      <main className="container mx-auto py-12 flex-grow">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Usinage Métal - Fournisseur ABC Industrie</h2>

          <section className="mb-8">
            <h3 className="text-xl font-semibold">Description du Service</h3>
            <p className="mt-2 text-gray-700">
              Usinage précis de pièces métalliques, expertise dans l'aluminium et l'acier inoxydable.
            </p>
          </section>

          <section className="mb-8 grid grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold">Localisation :</h4>
              <p>Lyon, France</p>
            </div>
            <div>
              <h4 className="font-semibold">Capacité :</h4>
              <p>500 pièces / semaine</p>
            </div>
            <div>
              <h4 className="font-semibold">Certifications :</h4>
              <p>ISO 9001, ISO 14001</p>
            </div>
            <div>
              <h4 className="font-semibold">Prix moyen :</h4>
              <p>À partir de 12,50 € / pièce</p>
            </div>
          </section>

          <section className="text-center">
            <Button size="lg">Demander un Devis Immédiat</Button>
          </section>
        </div>
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

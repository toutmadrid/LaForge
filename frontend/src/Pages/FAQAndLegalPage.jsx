import React from 'react';
import { Button } from '@/components/ui/button';

export default function FAQAndLegalPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-gray-800 text-white py-6">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">FAQ & Mentions Légales</h1>
          <nav className="space-x-4">
            <Button variant="outline">Accueil</Button>
          </nav>
        </div>
      </header>

      <main className="container mx-auto py-12 flex-grow">
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Foire Aux Questions (FAQ)</h2>
          <div className="bg-white shadow rounded p-6">
            <p>Retrouvez ici les réponses aux questions les plus fréquentes sur l'utilisation de la plateforme.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Mentions Légales</h2>
          <div className="bg-white shadow rounded p-6">
            <p>Informations juridiques obligatoires concernant la plateforme Marketplace Industrielle.</p>
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

import React from 'react';
import { Button } from '@/components/ui/button';

export default function AboutContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-gray-800 text-white py-6">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">À Propos & Contact</h1>
          <nav className="space-x-4">
            <Button variant="outline">Accueil</Button>
          </nav>
        </div>
      </header>

      <main className="container mx-auto py-12 flex-grow">
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Qui sommes-nous ?</h2>
          <div className="bg-white shadow rounded p-6">
            <p>
              Marketplace Industrielle est une plateforme dédiée à la mise en relation
              d'entreprises industrielles.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
          <div className="bg-white shadow rounded p-6">
            <form>
              <input
                type="text"
                placeholder="Votre nom"
                className="w-full border p-2 mb-4 rounded"
              />
              <input
                type="email"
                placeholder="Votre email"
                className="w-full border p-2 mb-4 rounded"
              />
              <textarea
                placeholder="Votre message"
                className="w-full border p-2 mb-4 rounded"
              ></textarea>
              <Button>Envoyer</Button>
            </form>
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

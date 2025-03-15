import React from 'react';
import { Button } from '@/components/ui/button';

export default function DisputeManagement() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-gray-800 text-white py-6">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">Gestion des Litiges</h1>
          <nav className="space-x-4">
            <Button variant="outline">Déconnexion</Button>
          </nav>
        </div>
      </header>

      <main className="container mx-auto py-12">
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Ouvrir un nouveau litige</h2>
          <div className="bg-white shadow rounded p-6">
            <textarea
              className="w-full border rounded p-4"
              placeholder="Expliquez clairement la raison du litige..."
            />
            <Button className="mt-4">Soumettre</Button>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Litiges en cours</h2>
          <div className="bg-white shadow rounded p-6">
            <p>Aucun litige actif actuellement.</p>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-4 text-center mt-auto">
        <div className="container mx-auto">
          <a href="#" className="mr-4">Mentions légales</a>
          <a href="#">CGU</a>
          <p className="mt-2">© 2025 Marketplace Industrielle. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}
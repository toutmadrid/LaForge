import React from 'react';
import { Button } from '@/components/ui/button';

export default function UserDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-gray-800 text-white py-6">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">Espace Utilisateur</h1>
          <nav className="space-x-4">
            <Button variant="outline">Déconnexion</Button>
          </nav>
        </div>
      </header>

      <main className="container mx-auto py-12">
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Mes Commandes</h2>
          <div className="bg-white shadow rounded p-6">
            <p>Aucune commande en cours</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Mes Devis</h2>
          <div className="bg-white shadow rounded p-6">
            <p>Vous n'avez aucun devis actif.</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold">Mes Litiges</h2>
          <div className="bg-white shadow rounded p-6">
            <p>Aucun litige déclaré</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold">Mon Compte</h2>
          <div className="bg-white shadow rounded p-6">
            <p>Informations personnelles, moyen de paiement, adresse, etc.</p>
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
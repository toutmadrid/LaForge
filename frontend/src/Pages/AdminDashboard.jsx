import React from 'react';
import { Button } from '@/components/ui/button';

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-gray-800 text-white py-6">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">Administration / Back Office</h1>
          <nav className="space-x-4">
            <Button variant="outline">Déconnexion</Button>
          </nav>
        </div>
      </header>

      <main className="container mx-auto py-12 flex-grow">
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Gestion des Utilisateurs</h2>
          <div className="bg-white shadow rounded p-6">
            <p>Aucun utilisateur enregistré pour le moment.</p>
            <Button className="mt-4">Voir les utilisateurs</Button>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Supervision des Transactions</h2>
          <div className="bg-white shadow rounded p-6">
            <p>Aucune transaction récente.</p>
            <Button className="mt-4">Voir les transactions</Button>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Gestion des Litiges et Arbitrages</h2>
          <div className="bg-white shadow rounded p-6">
            <p>Aucun litige actif.</p>
            <Button className="mt-4">Voir les litiges</Button>
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

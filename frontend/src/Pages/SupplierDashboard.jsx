import React from 'react';
import { Button } from '@/components/ui/button';

export default function SupplierDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-gray-800 text-white py-6">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">Espace Fournisseur</h1>
          <nav className="space-x-4">
            <Button variant="outline">Déconnexion</Button>
          </nav>
        </div>
      </header>

      <main className="container mx-auto py-12">
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Gestion des Offres</h2>
          <div className="bg-white shadow rounded p-6">
            <Button>Créer une nouvelle offre</Button>
            <p className="mt-4">Vous n'avez actuellement aucune offre publiée.</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Devis reçus</h2>
          <div className="bg-white shadow rounded p-6">
            <p>Aucun devis reçu pour le moment.</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold">Commandes à traiter</h2>
          <div className="bg-white shadow rounded p-6">
            <p>Aucune commande en attente.</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold">Litiges</h2>
          <div className="bg-white shadow rounded p-6">
            <p>Aucun litige en cours.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold">Mon entreprise</h2>
          <div className="bg-white shadow rounded p-6">
            <p>Informations légales et documents associés</p>
          </div>
        </section>
      </main> {/* ← Balise fermante ajoutée ici */}

      <footer className="bg-gray-800 text-white py-4 text-center mt-8">
        <div className="container mx-auto">
          <a href="#" className="mr-4">Mentions légales</a>
          <a href="#">CGU</a>
          <p className="mt-2">© 2025 Marketplace Industrielle. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}

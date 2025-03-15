import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-gray-800 text-white py-6">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">Marketplace Industrielle</h1>
          <nav className="space-x-4">
            <a href="/connexion">Connexion</a>
            <a href="/inscription">Inscription</a>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto py-12 text-center">
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Trouvez les capacités industrielles dont vous avez besoin</h2>
          <div className="max-w-xl mx-auto flex gap-2">
            <input
              type="text"
              placeholder="Rechercher une capacité (usinage, impression 3D...)"
              className="w-full p-3 rounded border shadow-sm"
            />
            <Button>Rechercher</Button>
          </div>
        </section>

        <section className="mb-12">
          <h3 className="text-xl font-semibold mb-6">Services populaires</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {["Usinage Métal", "Impression 3D", "Assemblage"].map(service => (
              <div className="bg-white shadow rounded-lg p-6" key={service}>
                <h4 className="font-semibold mb-2">{service}</h4>
                <Button variant="outline">Découvrir</Button>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto flex justify-center space-x-6">
          <a href="/mentions-legales">Mentions légales</a>
          <a href="/cgu">CGU</a>
          <a href="/faq">FAQ</a>
          <a href="/blog">Blog</a>
        </div>
      </footer>
    </div>
  );
}

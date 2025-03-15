import React from 'react';
import { Button } from '@/components/ui/button';

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-gray-800 text-white py-6">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">Blog Industriel</h1>
          <nav className="space-x-4">
            <Button variant="outline">Accueil</Button>
          </nav>
        </div>
      </header>

      <main className="container mx-auto py-12 flex-grow">
        <section>
          <h2 className="text-2xl font-bold mb-6">Articles récents</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {["Article 1", "Article 2", "Article 3"].map((article, idx) => (
              <div key={idx} className="bg-white shadow rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">{article}</h3>
                <p className="text-gray-600">Résumé court de l'article de blog industriel.</p>
                <Button className="mt-4">Lire la suite</Button>
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
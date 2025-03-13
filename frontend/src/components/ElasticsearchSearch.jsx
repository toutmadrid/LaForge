import React, { useState } from 'react';
import api from '../services/api';

function ElasticsearchSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      const res = await api.get(`offers/search/?q=${query}`);
      setResults(res.data.hits.hits);
    } catch (error) {
      console.error('Erreur de recherche :', error);
    }
  };

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-xl font-bold">Recherche avancée</h2>
      <div className="flex space-x-2">
        <input
          type="text"
          placeholder="Rechercher des offres..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <button onClick={handleSearch} className="bg-green-500 text-white px-4 py-2 rounded">
          Chercher
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {results.map(({ _source }, index) => (
          <div key={index} className="border p-4 rounded shadow">
            <h3 className="font-bold">{_source.title}</h3>
            <p>{_source.description}</p>
            <p><strong>Localisation :</strong> {_source.location}</p>
            <p><strong>Capacité :</strong> {_source.capacity}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ElasticsearchSearch;

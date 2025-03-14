import React, { useEffect, useState } from 'react';
import api from '../services/api';
import CreateQuotation from './CreateQuotation';

function Offers() {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    api.get('offers/')
      .then((res) => setOffers(res.data))
      .catch(err => console.error(err));
  }, []);

  {offers.map((offer) => (
    <div key={offer.id} className="border p-4 rounded shadow">
      <h3 className="font-bold">{offer.title}</h3>
      <p>{offer.description}</p>
      <CreateQuotation offerId={offer.id} />
    </div>
  ))}

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Liste des Offres</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {offers.map((offer) => (
          <div key={offer.id} className="border p-4 rounded shadow">
            <h3 className="font-bold">{offer.title}</h3>
            <p>{offer.description}</p>
            <p><strong>Localisation :</strong> {offer.location}</p>
            <p className="text-sm">{offer.certifications}</p>
            <button className="mt-2 bg-green-500 px-3 py-1 rounded text-white">
              Demander devis
            </button>
          </div>
        ))}
      </div>
    </div>
    
  );
}


export default Offers;

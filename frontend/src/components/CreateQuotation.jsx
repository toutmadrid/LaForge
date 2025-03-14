import React, { useState } from 'react';
import api from '../services/api';

function CreateQuotation({ offerId }) {
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      const res = await api.post('quotations/create/', { offer_id: offerId, quantity }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      alert(`Devis créé : ${res.data.total_price} €`);
    } catch (error) {
      alert('Erreur lors de la création du devis');
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded shadow">
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        min={1}
        className="border p-2 rounded w-full"
      />
      <button type="submit" className="mt-2 bg-blue-500 text-white p-2 rounded">
        Demander devis
      </button>
    </form>
  );
}

export default CreateQuotation;

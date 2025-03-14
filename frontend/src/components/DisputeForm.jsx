import React, { useState } from 'react';
import api from '../services/api';

function DisputeForm({ orderId }) {
  const [reason, setReason] = useState('');

  const submitDispute = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      await api.post('disputes/create/', { order_id: orderId, reason }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      alert('Litige soumis avec succès');
    } catch (error) {
      alert('Erreur création litige');
      console.error(error);
    }
  };

  return (
    <form onSubmit={submitDispute} className="border p-4 rounded shadow">
      <textarea
        value={reason}
        onChange={(e) => setReason(e.target.value)}
        className="w-full border rounded p-2"
        placeholder="Expliquez la raison du litige..."
        required
      />
      <button className="mt-2 bg-red-500 text-white px-4 py-2 rounded">
        Déclarer Litige
      </button>
    </form>
  );
}

export default DisputeForm;

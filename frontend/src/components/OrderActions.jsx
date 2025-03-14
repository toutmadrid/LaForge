import React from 'react';
import api from '../services/api';

function OrderActions({ quotationId, orderId }) {
  
  const token = localStorage.getItem('token');

  const createOrder = async () => {
    try {
      const res = await api.post(`orders/create/${quotationId}/`, {}, {
        headers: { Authorization: `Bearer ${token}` }
      });
      alert('Commande créée avec succès !');
      console.log(res.data);
    } catch (error) {
      alert('Erreur lors de la création commande');
      console.error(error);
    }
  };

  const payOrder = async () => {
    try {
      const res = await api.post(`orders/pay/${orderId}/`, {}, {
        headers: { Authorization: `Bearer ${token}` }
      });
      alert(res.data.message);
    } catch (error) {
      alert('Erreur paiement commande');
      console.error(error);
    }
  };

  return (
    <div className="space-x-2">
      <button onClick={createOrder} className="bg-blue-500 text-white px-4 py-2 rounded">
        Valider commande
      </button>
      <button onClick={payOrder} className="bg-green-500 text-white px-4 py-2 rounded">
        Payer commande
      </button>
    </div>
  );
}

export default OrderActions;

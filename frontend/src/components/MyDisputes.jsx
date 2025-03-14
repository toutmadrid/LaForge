import React, { useEffect, useState } from 'react';
import api from '../services/api';

function MyDisputes() {
  const [disputes, setDisputes] = useState([]);

  useEffect(() => {
    const fetchDisputes = async () => {
      const token = localStorage.getItem('token');
      try {
        const res = await api.get('disputes/my/', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setDisputes(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDisputes();
  }, []);

  return (
    <div className="p-4 space-y-2">
      <h2 className="text-xl font-bold">Mes litiges</h2>
      {disputes.map((dispute) => (
        <div key={dispute.id} className="border p-4 rounded shadow">
          <p><strong>Commande :</strong> {dispute.order.id}</p>
          <p><strong>Raison :</strong> {dispute.reason}</p>
          <p><strong>Statut :</strong> {dispute.status}</p>
        </div>
      ))}
    </div>
  );
}

export default MyDisputes;

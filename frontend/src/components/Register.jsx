import React, { useState } from 'react';
import api from '../services/api';

function Register() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    is_buyer: false,
    is_supplier: false,
    company_name: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('users/register/', formData);
      alert('Inscription réussie ! Connectez-vous maintenant.');
      console.log(response.data);
    } catch (error) {
      alert('Erreur lors de l’inscription.');
      console.error(error.response.data);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded-lg shadow-lg">
      <input type="text" name="username" placeholder="Username" className="border p-2 w-full mb-2" onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" className="border p-2 w-full mb-2" onChange={handleChange} required />
      <input type="password" name="password" placeholder="Password" className="border p-2 w-full mb-2" onChange={handleChange} required />
      <input type="text" name="company_name" placeholder="Company Name" className="border p-2 w-full mb-2" onChange={handleChange} />

      <label>
        <input type="checkbox" name="is_buyer" onChange={handleChange} /> Acheteur
      </label>
      <label className="ml-4">
        <input type="checkbox" name="is_supplier" onChange={handleChange} /> Fournisseur
      </label>

      <button type="submit" className="mt-4 bg-blue-500 text-white p-2 rounded">
        Inscription
      </button>
    </form>
  );
}

export default Register;

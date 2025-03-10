import React, { useState } from 'react';
import api from '../services/api';

function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('users/login/', formData);
      localStorage.setItem('token', response.data.access);
      alert('Connexion réussie !');
      console.log(response.data);
    } catch (error) {
      alert('Erreur lors de la connexion.');
      console.error(error.response.data);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded-lg shadow-lg">
      <input type="text" name="username" placeholder="Username" className="border p-2 w-full mb-2" onChange={handleChange} required />
      <input type="password" name="password" placeholder="Password" className="border p-2 w-full mb-2" onChange={handleChange} required />
      <button type="submit" className="mt-4 bg-green-500 text-white p-2 rounded">
        Connexion
      </button>
    </form>
  );
}

export default Login;

import React from 'react';
import Register from './components/Register';
import Login from './components/Login';
import Offers from './components/Offers';
import ElasticsearchSearch from './components/ElasticsearchSearch';
import DisputeForm from './components/DisputeForm';
import MyDisputes from './components/MyDisputes';

function App() {
  return (
    <div className="container mx-auto p-4 space-y-8">
      <h1 className="text-3xl font-bold">Authentification MarketPlace</h1>
      <Register />
      <Login />
      <Offers />
      <ElasticsearchSearch />
      <h1 className="text-2xl font-bold">Gestion Litiges</h1>
      <DisputeForm orderId={1} /> {/* Remplace avec l'orderId dynamique */}
      <MyDisputes />
    </div>
  );
}

export default App;


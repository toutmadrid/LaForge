import React from 'react';
import Register from './components/Register';
import Login from './components/Login';
import Offers from './components/Offers';
import ElasticsearchSearch from './components/ElasticsearchSearch';

function App() {
  return (
    <div className="container mx-auto p-4 space-y-8">
      <h1 className="text-3xl font-bold">Authentification MarketPlace</h1>
      <Register />
      <Login />
      <Offers />
      <ElasticsearchSearch />
    </div>
  );
}

export default App;

// screens/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/busca-cep">Pesquisar um CEP</Link></li>
          <li><Link to="/fotos-cachorro">Fotos de Cachorro</Link></li>
        </ul>
      </nav>
    </header>
  );
}

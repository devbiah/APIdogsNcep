// App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import PaginaCep from './screens/PaginaCep';
import Cachorro from './components/Cachorro/Cachorro'; // Verifique o caminho correto para o componente Cachorro
import './index.css'; // Verifique o caminho correto para o arquivo de estilos global

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/busca-cep" element={<PaginaCep />} />
        <Route path="/fotos-cachorro" element={<Cachorro />} />
      </Routes>
    </Router>
  );
}

export default App;

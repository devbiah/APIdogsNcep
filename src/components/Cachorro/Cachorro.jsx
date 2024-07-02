// components/Cachorro/Cachorro.jsx

import React, { useState } from 'react';

function Cachorro() {
  const [imageUrl, setImageUrl] = useState('');

  const buscarCachorro = () => {
    fetch('https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1')
      .then(response => response.json())
      .then(data => {
        const url = data[0].url;
        setImageUrl(url);
      })
      .catch(error => {
        console.error('Erro ao buscar imagem:', error);
        alert('Erro ao buscar imagem de cachorro. Por favor, tente novamente mais tarde.');
      });
  };

  return (
    <div className="cachorro-container">
      <button onClick={buscarCachorro}>Buscar Cachorro</button>
      {imageUrl && <img src={imageUrl} alt="Imagem de um cachorro" />}
    </div>
  );
}

export default Cachorro;

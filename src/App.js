import React, { useState } from 'react';

import './App.css';

import Card from './components/Card/Card';
import Chart from './components/Chart/Chart';
import Container from './components/Container/Container';

function App() {

  const [dados, setDados] = useState([]);
  const [meses, setMeses] = useState([]);

  const calcular = (event) => {
    
    const form = document.querySelector('form');
    let inicial = Number(form.inicial.value);
    const mensal = Number(form.mensal.value);
    const meses = Number(form.meses.value);
    const taxa = Number(form.taxa.value);

    const dadosLocais = [];
    const mesesArray = [];
    for( let i = 0; i < meses; i++ ){
      inicial = (inicial + mensal) * taxa;
      dadosLocais.push(inicial);
      mesesArray.push(i+1);
    }

    setDados(dadosLocais);
    setMeses(mesesArray);

    const total = document.getElementById('total');
    const volume = document.getElementById('volume');
    total.innerHTML = Math.round(inicial).toLocaleString();
    volume.innerHTML = (mensal * meses).toLocaleString();
  }

  return (
    <Container>
        
    </Container>
  );
}

export default App;

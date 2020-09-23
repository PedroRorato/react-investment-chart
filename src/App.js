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
        <Card>
          <form onSubmit={calcular}>
            <div className="form-group">
                <label>Inicial</label>
                <input type="text" name="inicial" defaultValue="0" placeholder="inicial" />
            </div>
            <div className="form-group">
              <label>Mensal</label>
              <input type="text" name="mensal" defaultValue="100" placeholder="mensal" />
            </div>
            <div className="form-group">
              <label>Meses</label>
              <input type="text" name="meses" defaultValue="3" placeholder="meses" />
            </div>
            <div className="form-group">
              <label>Taxa</label>
              <input type="text" name="taxa" defaultValue="1.005" placeholder="taxa" />
            </div>
            <button>Add</button>
          </form>
          <div>
            <h2>Total: <span id="total"></span></h2>
            <h2>Volume Investido: <span id="volume"></span></h2>
          </div>
          <Chart data={dados} time={meses} />
        </Card>
    </Container>
  );
}

export default App;

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import './assets/styles/global.css';

import Header from './components/Header';
import Container from './components/Container';
import TableRow from './components/TableRow';
import Chart from './components/Chart';

let data = {
  labels: [],
  datasets: []
}

const fullFillTable = (element, index) => {
  return (
    <TableRow
      key={index}
      cor={element.cor}
      inicial={element.inicial}
      deposito={element.deposito}
      rendimento={element.rendimento}
      meses={element.meses}
      total={element.total} 
    />
  );
}

function App() {
  const { register, formState: { errors }, handleSubmit, setValue } = useForm();
  const [list, setList] = useState([]);
  const [chartData, setChartData] = useState(data);

  const handleChartData = async (cor, array, meses) => {
    let auxData = chartData;
    let newDataset = {
      label: `G ${auxData.datasets.length + 1}`,
      data: array,
      borderWidth: 2,
      borderColor: cor,
      backgroundColor: 'transparent'
    }
    //Ajuste Labels
    if(auxData.labels.length < meses+1) {
      console.log('menor');
      let newLabels = [];
      for(let i = 0; i <= meses; i++) { newLabels.push(i) }
      auxData.labels =  newLabels;
    }
    auxData.datasets.push(newDataset);
    setChartData(auxData)
  }

  
  const onSubmit = async ({cor, inicial, deposito, rendimento, meses}, e) => {
    //Reseta Form
    e.target.reset();
    //Inicia dataArray
    let dataArray = [parseInt(inicial)];
    var total = parseFloat(inicial);
    inicial = parseFloat(inicial).toFixed(2);
    deposito = parseFloat(deposito).toFixed(2);
    for(let i = 0; i < meses; i++) {
      total = total + parseFloat(deposito) + (total * parseFloat(rendimento/100));
      dataArray.push(Math.round(total));
    }
    handleChartData(cor, dataArray, meses);
    total = total.toFixed(2);
    setList([{cor, inicial, deposito, rendimento, meses, total}, ...list]);
  }

  return (
    <>
      <Header/>

      <Container>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label>Cor</label>
            <input 
              type="color" 
              name="cor"
              defaultValue="#ff0000"
              {...register('cor', {required: true})}
            />
          </div>

          <div className="form-group">
            <label>Valor Inicial</label>
            <input 
              type="text" 
              name="inicial"
              defaultValue="1000"
              {...register('inicial', {required: true})}
            />
          </div>

          <div className="form-group">
            <label>Depósito Mensal</label>
            <input 
              type="text" 
              name="deposito"
              defaultValue="100"
              {...register('deposito', {required: true})}
            />
          </div>

          <div className="form-group">
            <label>Rendimento Mensal(%)</label>
            <input 
              type="text" 
              name="rendimento"
              defaultValue="10"
              {...register('rendimento', {required: true})}
            />
          </div>

          <div className="form-group">
            <label>Meses</label>
            <input 
              type="text" 
              name="meses"
              defaultValue="5"
              {...register('meses', {required: true})}
            />
          </div>

          <div className="form-group">
            <button type="submit">Adicionar</button>
          </div>
        </form>
      </Container>

      <Chart data={chartData}/>

      <Container>
        <table>
          <thead>
            <tr>
              <td>Cor</td>
              <td>Inicial</td>
              <td>Depósitos</td>
              <td>Rendimento</td>
              <td>Meses</td>
              <td>Total</td>
            </tr>
          </thead>

          <tbody>
            {
              list.map((element, index) => fullFillTable(element, index))
            }
          </tbody>
        </table>
      </Container>
    </>
  );
}

export default App;

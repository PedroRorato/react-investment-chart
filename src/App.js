import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import './assets/styles/global.css';

import Header from './components/Header';
import Container from './components/Container';
import TableRow from './components/TableRow';

function App() {
  const { register, formState: { errors }, handleSubmit, setValue } = useForm();
  const [list, setList] = useState([]);

  const fullFillTable = (element, index) => {
    return (
      <TableRow
        key={index}
        investimento={element.investimento}
        rendimento={element.rendimento}
        meses={element.meses}
        total={element.total} 
      />
    );
  }

  const onSubmit = ({investimento, rendimento, meses}) => {
    var total = 0;
    investimento = parseFloat(investimento).toFixed(2);
    for(let i = 0; i < meses; i++) {
      total = total + parseFloat(investimento) + (total * parseFloat(rendimento/100));
    }
    total = total.toFixed(2);
    setList([{investimento, rendimento, meses, total}, ...list]);
  }

  return (
    <>
      <Header/>

      <Container>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label>Investimento Mensal</label>
            <input 
              type="text" 
              name="investimento"
              {...register('investimento', {required: true})}
            />
          </div>

          <div className="form-group">
            <label>Rendimento Mensal(%)</label>
            <input 
              type="text" 
              name="rendimento"
              {...register('rendimento', {required: true})}
            />
          </div>

          <div className="form-group">
            <label>Meses</label>
            <input 
              type="text" 
              name="meses"
              {...register('meses', {required: true})}
            />
          </div>

          <div className="form-group">
            <button type="submit">Adicionar</button>
          </div>
        </form>

        <table>
          <thead>
            <tr>
              <td>Investimento</td>
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

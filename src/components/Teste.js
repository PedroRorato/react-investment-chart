import React from 'react';

export default function Teste() {

    const calcular = (event) => {
        event.preventDefault();
        
        const form = document.querySelector('form');
        let inicial = Number(form.inicial.value);
        const mensal = Number(form.mensal.value);
        const meses = Number(form.meses.value);
        const taxa = Number(form.taxa.value);

        for(let i = 0; i < meses; i++){
            inicial = (inicial + mensal)*taxa;
            console.log(inicial)
        }

        const span = document.querySelector('span');
        span.innerHTML = inicial;
    }

    return (
        <>
            <form onSubmit={calcular}>
                <label>Inicial</label>
                <input type="text" name="inicial" placeholder="inicial" /> |
                <label>Mensal</label>
                <input type="text" name="mensal" placeholder="mensal" /> |
                <label>Meses</label>
                <input type="text" name="meses" placeholder="anos" /> |
                <label>Taxa</label>
                <input type="text" name="taxa" placeholder="taxa" /> 
                <button>Calcular</button>
            </form>
            <div>
                <h1>Total: <span id="total"></span></h1>
            </div>
        </>
    )
}

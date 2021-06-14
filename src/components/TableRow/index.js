import React from 'react';

import './style.css';

function TableRow(props) {

    return (
        <tr>
            <td style={{backgroundColor: props.cor}}></td>
            <td>R$ {props.inicial}</td>
            <td>R$ {props.deposito}</td>
            <td>{props.rendimento}%</td>
            <td>{props.meses}</td>
            <td>R$ {props.total}</td>
        </tr>
    );
}
  
export default TableRow;
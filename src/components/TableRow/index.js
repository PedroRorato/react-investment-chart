import React from 'react';

import './style.css';

function TableRow(props) {

    return (
        <tr>
            <td>R$ {props.investimento}</td>
            <td>{props.rendimento}%</td>
            <td>{props.meses}</td>
            <td>R$ {props.total}</td>
        </tr>
    );
}
  
export default TableRow;
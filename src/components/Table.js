import React, { Component } from 'react';

class Table extends Component {
  // Descrição, Tag, Método de pagamento,Valor, Moeda, Câmbio utilizado, Valor convertido, Moeda de conversão e Editar/Excluir
  render() {
    return (
      <div>
        Table
        <table>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
          <tr>
            {/* <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td> */}
          </tr>
        </table>
      </div>
    );
  }
}

export default Table;

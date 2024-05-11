// TransactionsTable.js
import React from 'react';

function TransactionsTable({ transactions }) {
  return (
    <table >
      <thead>
        <tr className='tableHeaders'>
          <th className='date'>Date</th>
          <th className='category'>Category</th>
          <th className='description'>Description</th>
          <th className='amount'>Amount</th>
          
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction, index) => (
          <tr key={index} className='tableData'>
            <td>{transaction.date}</td>
            <td>{transaction.category}</td>
            <td>{transaction.description}</td>
            <td>{transaction.amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TransactionsTable;

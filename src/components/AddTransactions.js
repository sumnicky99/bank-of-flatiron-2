
import React from 'react';

function AddTransactions({ onAddTransaction }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newTransaction = {
      category: formData.get('category'),
      amount: parseFloat(formData.get('amount')),
      description: formData.get('description'),
      date: formData.get('date')
    };
    onAddTransaction(newTransaction);
  };

  return (
    <form onSubmit={handleSubmit} >
        Date
      <input type="date" name="date" placeholder="Date" className='input' required />
      <input type="text" name="category" placeholder="Category" className='input' required />
      <input type="text" name="description" placeholder="Description" className='input' required />
      <input type="number" name="amount" placeholder="Amount" className='input' required />
      
      <br />
      <button type="submit" className='btn'>Add Transaction</button>
    </form>
  );
}

export default AddTransactions;

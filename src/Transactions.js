import React, { useEffect, useState } from 'react';
import jsonData from './Data';

function TransForm() {
    const [transactions, setTransactions] = useState([]);
    const [newTransaction, setNewTransaction] = useState({
        date: '',
        description: '',
        category: '',
        amount: 0,
    });

    useEffect(() => {
        setTransactions(jsonData.transactions);
        console.log('Fetched data:', jsonData);
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewTransaction({
            ...newTransaction,
            [name]: value
        });
    };

    const handleAddTransaction = () => {
        // Implement your logic to add a new transaction
        // For example, you can update the transactions state with the new transaction
        const updatedTransactions = [...transactions, newTransaction];
        setTransactions(updatedTransactions);
        // You may also want to reset the newTransaction state for the next entry
        setNewTransaction({
            date: '',
            description: '',
            category: '',
            amount: 0,
        });
    };

    return (
        <>
            <h2 className='transactiontable '>Transaction Table</h2>
            <table>
                <tr>
                    <thead>
                            <tr>
                                <th>ID</th>
                                <th>Date</th>
                                <th>Description</th>
                                <th>Category</th>
                                <th>Amount</th>
                            </tr>
                        </thead>    
                </tr>
                    <tbody>
                        {/* Check if transactions is an array and is empty */}
                        {Array.isArray(transactions) && transactions.length === 0 ? (
                            <tr>
                                <td colSpan="5">Loading...</td>
                            </tr>
                        ) : (
                            transactions.map((transaction, index) => (
                                <tr key={index}>
                                    <td>{transaction.id}</td>
                                    <td>{transaction.date}</td>
                                    <td>{transaction.description}</td>
                                    <td>{transaction.category}</td>
                                    <td>{transaction.amount}</td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
            <div className="Addons">
                <h3>Add Transaction</h3>
                <label htmlFor="transdate">Date</label>
                <input type="date" id="transdate" name="date" placeholder="yy/mm/dd" value={newTransaction.date} onChange={handleInputChange} />
                <label htmlFor="description">Description</label>
                <input type="text" id="description" name="description" value={newTransaction.description} placeholder="description" onChange={handleInputChange} />
                <label htmlFor="category">Category</label>
                <input type="text" id="category" name="category" value={newTransaction.category} placeholder="category" onChange={handleInputChange} />
                <label htmlFor="amount">Amount</label>
                <input type="number" id="amount" name="amount" value={newTransaction.amount} placeholder="amount" onChange={handleInputChange} />
                <button onClick={handleAddTransaction}>Add Transaction</button>
            </div>
        </>
    );
}

export default TransForm;
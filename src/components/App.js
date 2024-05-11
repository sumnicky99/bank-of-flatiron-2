import React, { useState } from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";
import AddTransactions from "./AddTransactions";
import TransactionsTable from "./TransactionsTable";
import "../App.css"; // Import CSS file directly

function App() {
  const [transactions, setTransactions] = useState([
    {
      category: "Income",
      amount: 2000,
      description: "paychecks from Bob's Burgers",
      date: "2024-04-28",
    },
    {
      category: "Movies",
      amount: 20,
      description: "entertainment",
      date: "2024-04-27",
    },
    {
      category: "Chipotle",
      amount: 16,
      description: "food",
      date: "2024-04-26",
    },
  ]);

  const handleAddTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  const handleSearch = (term) => {
    const searchTerm = term.toLowerCase();

    const filteredTransactions = transactions.filter(
      (transaction) =>
        transaction.category.toLowerCase().includes(searchTerm) ||
        transaction.description.toLowerCase().includes(searchTerm) ||
        transaction.date.toLowerCase().includes(searchTerm)
    );

    setTransactions(filteredTransactions);
  };

  return (
    <div className="App">
      <Header />
      <SearchBar handleSearch={handleSearch} />
      <AddTransactions onAddTransaction={handleAddTransaction} />
      <TransactionsTable transactions={transactions} />
    </div>
  );
}

export default App;

import React from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Shoes",
      amount: 120.55,
      date: new Date(2020, 2, 5),
    },
    {
      id: "e2",
      title: "Groceries",
      amount: 67.55,
      date: new Date(2021, 1, 17),
    },
    {
      id: "e3",
      title: "Books",
      amount: 40.6,
      date: new Date(2021, 2, 20),
    },
    {
      id: "e4",
      title: "Coffee",
      amount: 30.25,
      date: new Date(2021, 3, 23),
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log("In App.js");
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;

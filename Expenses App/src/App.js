import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Shoes",
      amount: 120.55,
      date: new Date(2021, 2, 15),
    },
    {
      id: "e2",
      title: "Groceries",
      amount: 67.55,
      date: new Date(2021, 2, 17),
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
      date: new Date(2021, 2, 23),
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;

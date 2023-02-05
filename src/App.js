import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expences = [
    {
      id: "e1",
      title: "Tooth Brush",
      amount: 23,
      date: new Date(2020, 3, 23),
    },
    {
      id: "e2",
      title: "Comic",
      amount: 299,
      date: new Date(2022, 2, 3),
    },
    {
      id: "e3",
      title: "Bread",
      amount: 3,
      date: new Date(2021, 8, 29),
    },
    {
      id: "e4",
      title: "Beans",
      amount: 10,
      date: new Date(2021, 1, 12),
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expences[0].title}
        amount={expences[0].amount}
        date={expences[0].date}
      />
      <ExpenseItem
        title={expences[1].title}
        amount={expences[1].amount}
        date={expences[1].date}
      />
      <ExpenseItem
        title={expences[2].title}
        amount={expences[2].amount}
        date={expences[2].date}
      />
      <ExpenseItem
        title={expences[3].title}
        amount={expences[3].amount}
        date={expences[3].date}
      />
    </div>
  );
}

export default App;

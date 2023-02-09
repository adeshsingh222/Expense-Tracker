
import Expenses from "./components/Expenses/Expenses";
import NewExpenses from "./components/NewExpenses/NewExpenses";
function App() {
  const expenses = [
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
    <div >
      <NewExpenses/>
      <Expenses items={expenses}/>
     
    </div>
  );
}

export default App;

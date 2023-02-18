import React from 'react';
import "./ExpensesList.css";
import ExpenseItem from './ExpenseItem';

const ExpensesList=(props)=>{
if(props.items.length===0){
  return(
    <div className="expenses-list__fallback">
        <h2>No Expenses Found</h2>
    </div>
  )
}

return(
    <ul className="expenses-list">
      { props.items.map((expense) => (
      <ExpenseItem
         key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))}
    </ul>
)};

export default ExpensesList;

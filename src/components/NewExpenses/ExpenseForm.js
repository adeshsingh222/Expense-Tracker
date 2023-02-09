import React, {useState} from "react";
import "./ExpenseForm.css"

const ExpenseForm = () => {
    const [enteredTitle,setEnteredTitle]= useState('');
    const [enteredAmount,setEnteredAmount]= useState('');
    const [enteredDate,setEnteredDate]= useState('');

    const titleChangeHandler=(event)=>{
        setEnteredTitle(event.target.value);
        // console.log(event.target.value)
    }
        const amountChangeHandler=(event)=>{
            setEnteredAmount(event.target.value);
    }
    const dateChangeHandler=(event)=>{
        setEnteredDate(event.target.value);
}
    const submitHandler=(event)=>{
        event.preventDefault();

        const ExpenseData ={
            title:enteredTitle,
            amount:enteredAmount,
            date:new Date(enteredDate)
        }
        console.log(ExpenseData)
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    return <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
        <div className="new-expense__control">
            <label>Title</label>
            <input type="text" value={enteredTitle} onChange={titleChangeHandler}></input>
        </div>
        <div className="new-expense__control">
            <label>amount</label>
            <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler}></input>
        </div>
        <div className="new-expense__control">
            <label>date</label>
            <input type="date" min="2021-01-01" value={enteredDate} onChange={dateChangeHandler}></input>
        </div>
          <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
          </div>
        </div>
    </form>
}

export default ExpenseForm;
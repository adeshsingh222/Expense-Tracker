import React from "react";
import "./NewExpenses.css"
import ExpenseForm from "./ExpenseForm";

 const NewExpenses= (props) => {
    const saveExpenseDataHandler=(enteredExpenseData)=>{
        const expenseData={
            ...enteredExpenseData,
            id: Math.random().toString()
        };
       props.onAddNewExpense(expenseData);
    }
    return <div className="new-expense">
        <ExpenseForm onSaveExpenseHandler={saveExpenseDataHandler}/>
    </div>
}

export default NewExpenses;
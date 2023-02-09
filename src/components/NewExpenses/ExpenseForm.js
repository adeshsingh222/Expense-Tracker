import React from "react";
import "./ExpenseForm.css"

const ExpenseForm = () => {
    return <form>
        <div className="new-expense__controls">
        <div className="new-expense__control">
            <label>Title</label>
            <input type="text"></input>
        </div>
        <div className="new-expense__control">
            <label>amount</label>
            <input type="number" min="0.01" step="0.01"></input>
        </div>
        <div className="new-expense__control">
            <label>date</label>
            <input type="date" min="2021-01-01"></input>
        </div>
          <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
          </div>
        </div>
    </form>
}

export default ExpenseForm;
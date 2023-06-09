import React, {useState} from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpenses.css';

const NewExpense = (props) => {
const [isEditing,setIsEditing]= useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };
     const StartEditing= ()=>{
      setIsEditing(true);
     }
   
     const stopEditingHandler=()=>{
      setIsEditing(false);
     }

  return (
    <div className='new-expense'>
        { !isEditing &&<button onClick={StartEditing}>Add new Expenses</button>}
     { isEditing&&<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancle={stopEditingHandler}/>}
    </div>
  );
};

export default NewExpense;

import React, { useState } from "react";
import FormExpense from "./FormExpense.js";
import "./AddExpense.css";
const AddExpense = (props) => {
  const [Editing, setEditing] = useState(false);
  const SaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const StartEditing = () => {
    setEditing(true);
  };
  const StopEditing=(props)=>{
      setEditing(false)
  }
  return (
    <div className="new-expense">
      {!Editing && <button onClick={StartEditing}>Add Expense</button>}
      {Editing && (
        <FormExpense onSaveExpenseData={SaveExpenseDataHandler} onCancel={StopEditing}></FormExpense>
      )}
    </div>
  );
};

export default AddExpense;

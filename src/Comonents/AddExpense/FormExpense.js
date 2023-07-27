import React,{useState} from "react";
import "./FormExpense.css";

const FormExpense = (props) => {
    const [enteredTitle,setEnteredTitle]=useState('')
    const [enteredAmount,setEnteredAmount]=useState('')
    const [enteredDate,setEnteredDate]=useState('')
    const TitleChangeHandler=(event)=>
    {
        setEnteredTitle(event.target.value)
    };
    const AmountChangeHandeler=(event)=>
    {
        setEnteredAmount(event.target.value)

    }
    const DateChangeHandler=(event)=>
    {
        setEnteredDate(event.target.value)

    }
    const SubmitHandler=(event)=>
    {
      event.preventDefault();
      const expenseData={
        title:enteredTitle,
        amount:+enteredAmount,
        date: new Date(enteredDate)

      };
      console.log(expenseData)
      props.onSaveExpenseData(expenseData);
      setEnteredTitle('');
      setEnteredAmount('');
      setEnteredDate('');

    }
  return (
    <form onSubmit={SubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={TitleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" value={enteredAmount} onChange={AmountChangeHandeler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" value={enteredDate} onChange={DateChangeHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
          <button type='submit'>Add Expense</button>
          <button type="button" onClick={props.onCancel}>Cancel</button>
      </div>
    </form>
  );
};

export default FormExpense;
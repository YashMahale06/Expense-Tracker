import React ,{useState} from "react";
import Expenses from "./Comonents/Expenses/Expenses";
import AddExpense from "./Comonents/AddExpense/AddExpense.js";
// import ExpenseFilter from "./Comonents/Expenses/ExpenseFilter";
const Demo_Items = [
  {
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { 
    title: 'New TV', 
    amount: 799.49, 
    date: new Date(2021, 2, 12) },
  {
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
function App() {
  const[expenses,setExpenses]=useState(Demo_Items)

  const addExpenseHandler=(expenses)=>
  {
    setExpenses((prevExpenses)=>{
      return [expenses,...prevExpenses];
    });
  }
  return (
    <div>
      <AddExpense onAddExpense={addExpenseHandler }/>
      {/* <h2>Let's get started!</h2> */}
      <Expenses items={expenses} />
    </div>
  );
}

export default App;

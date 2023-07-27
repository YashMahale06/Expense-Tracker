import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpenseChart";
const Expenses = (props) => {
  const [filteredYear, setfilteredYear] = useState("2020");
  const filterChangeHandler = (year) => {
    setfilteredYear(year);
  };
  const FilteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  console.log(props);
  return (
    <div>
      <li>
        <Card className="expenses">
          <ExpenseFilter
            select={filteredYear}
            onChangeFilter={filterChangeHandler}
          />
          <ExpenseChart expenses={FilteredExpenses}/>
          <ExpensesList items={FilteredExpenses} />
        </Card>
      </li>
    </div>
  );
};
export default Expenses;

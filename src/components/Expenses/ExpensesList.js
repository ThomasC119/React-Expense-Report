import React from "react";

import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No Expenses Found.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

//*ALTERNATE METHOD** MEETING 2 CONDITIONS**
// {filteredExpenses.length === 0 ? (
//   <p>No Expenses Found.</p>
// ) : (
//   filteredExpenses.map((expense) => (
//     <ExpenseItem
//     key={expense.id}
//     title={expense.title}
//     amount={expense.amount}
//     date={expense.date}
//   />
//   ))
// )
// )}

export default ExpensesList;

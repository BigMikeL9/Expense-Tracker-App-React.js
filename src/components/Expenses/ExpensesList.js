import React from "react";
import ExpenseItem from "./ExpenseItem";

import "./ExpensesList.css"

const ExpensesList = (props) => {


    // If we have no registered expenses for a specific year ---> display a message 
  if (props.passedFilteredExpenses.length === 0) {

    return ( <h2 className="expenses-list__fallback">No Expenses Found</h2>)
    
  }

  // This explanation is when we had the above function with ".map" inside the retrun function (as JSX code). Not any more tho since we moved the logic outside of the return function.
  /* Rendering the "expenses" Array (in "App.js") Dynamically 
            1. Creat curly braces "{...}* because we will execute a dynamic javascript expression in JSX code, which is why we need the curly braces.
            2. Reference the "expenses" array (in "App.js") through "props" and its attribute name in the "<expenses />" custom element. (ie: "props.items")
            3. Use the "map()" javascript function to create a new array (through its paramter), based on another array ("expenses" array in this case,
               which we acces through "props.items")
          SO FOR EACH OBJECT IN THE "expense" ARRAY, "map()" creates a new "ExpenseItem" with the properties from the corresponding "expense" array object.  */


    return (
        <ul className="expenses-list">
            {props.passedFilteredExpenses.map((expense) => (
            <ExpenseItem
                key={expense.id}   // **** always add a KEY when mapping out a list of items, inorder to avoid errors in the console. React needs to uniquely identify every element it adds inorder to be efficient and not go over the whole list of items everytime we add a new item. If we dont add a KEY, react will update ALL the items in the array and replaces their content such that they match the old content of the array, after adding the new item. WHICH IS INEFFIECIENT performance wise AND CAN CAUSE BUGS.
                title={expense.title}
                date={expense.date}
                amount={expense.amount}
            />
            ))}
        </ul>
    )
};


export default ExpensesList;
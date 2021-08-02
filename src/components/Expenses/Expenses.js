import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

// ****** JavaScipt *******
// The "map()" method creates a new array with the results of calling a function for every array element.
// The "filter()" method creates a new array with all elements that pass the test implemented by the provided function.
// *************************************************************************************************************

// ****** Conditional Expressions in React *******
// Long statements like ("if" condition and "for" loop) are not allowed inside JSX code, between curly braces "{...}".
// INSTEAD we can use a TERNARY EXPRESSION.
// ie: {filteredExpenses === 0 ? <p>Write a message</p> : // otherwise fo something else}
// another expression we can use --> {filteredExpenses === 0 && <p>Write a message</p>}  //means if filteredExpenses is equal to 0 --> then add the <p></p> element
/* same as {if (filteredExpenses === 0) {
              <p>Write a message</p>
           }
           else
           {
            // do something else
           }};    */

// DIDNT USE A TERNARY EXPRESSION HERE THO, INSTEAD I MOVED THE LOGIC OUT OF THE RETURN FUNCTION, SO THAT IT WOULD NOT BE JSX CODE AND
// AND I CAN USE A REGULAR JAVASCRIPT CONDITION.
// *************************************************************************************************************

const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState("2021");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log(selectedYear);
  };

  // this function filters the "items" array (which we get from the "App.js" file) by the year that we choose from the drop down.
  // "filteredYear" is a STRING, where as our "date" is a date OBJEC --> which is why we have to "getFullYear()" first, and then convert it "toString()".
  const filteredExpenses = props.items.filter(filterByYear => filterByYear.date.getFullYear().toString() === filteredYear);
  console.log(filteredExpenses);


  return (
    /* Must have one ROOT JSX element, that wraps around the main JSX code */

    <Card className="expenses">

      <ExpensesFilter onChangeFilter={filterChangeHandler} selected={filteredYear} /> {/* "selected={filteredYear}" is to control the initial value 
                                                                                           year that is set in the "useState("2021")", in the web browser. */ }
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesList passedFilteredExpenses={filteredExpenses}/> {/* Need to pass the "filteredExpenses" to "expensesList.js" */}

    </Card>
  );
};

export default Expenses;

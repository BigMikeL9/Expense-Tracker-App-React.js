// **************** What is the "App.js" file used for? ****************
// The "App.js" is a SPECIAL kind of component. It is our ROOT component which means
// its the main component being rendered in our starting file (the "index.js" file).
// All other components that we create will be nested inside this file.
// ***********************************************************************************************************************************


// **************** Importing other files here ****************
// We import files at the top.
// import {name of the function} from {its location in our project}
import React, { useState } from 'react';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
// After importing, now we can use the custom component ("ExpenseItem") like a
// regular HTML element, just like we use any HTML element (ie: <h2></h2>).
// ***********************************************************************************************************************************


// **************** Difference between HTML built-in Elements, and React custom Elements/Components  ****************
/* VERY IMPORTANT: The key difference between built-in HTML elements and our custom elements/components, is that 
our custom elements MUST start with an UPPERCASE character or else react wouldn't be able 
to detect that it is a custom component */
/* SO THING TO REMEMBER: Is that built-in HTML elements starts with a LOWERCASE.
                          And our custom components/elements starts with an UPPERCASE. 
                                      inorder for them to be detected by React */
/* Must use the exact name that we used in the import */
// ***********************************************************************************************************************************


// ************************** HOW TO HAVE REUSABLE FUNCTIONS that we can call and change multiple times? ********************************
                                  // FIRST PART
// *** A concept called "Props" (stands for properties) in React, enables us to make the components reusable by using parameters.
/* We make a function (in a component) resuable by adding a paramter to it ("props") --> which lets us call the same function, but 
   with different parameter input values and thus the function produces different output values and become reusable. */
/* The paramter values, which will be placed inside the component function to output different results, ARE STORED HERE in "App.js" file, 
   ussually as an ARRAY that have multiple javascript OBJECTS to store different values. */
// Component elements (ie: "<ExpenseItem>") can have attributes just like in HTML elements (ie: "<ExpenseItem title={expenses[0].title}> ).
/* these attributes are "Key-Value" pairs --> "key" is the attribute name (ie: "title") and values will be their values that we set
       (ie: "{expenses[0].title}" ) */
/* These attributes names can be ANYTHING WE WANT.
     The component attributes values come from an ARRAY that contains multiple 
     Javascript OBJECTS that we created here in "App.js".*/
// **********
  /* SUMMARY: 1. Create a new component.
              2. Create a function with a parameter (props) in that component, with a return function that has JSX code in it.
              3. Import that component here and then add it to the "App" function, as custom React elements.
              3. Then create a javascript object, inside the "App" function, that will have an Array of properties.
              4. Then use these properties as attributes in the custom React elements.
              5. Lastly go back to the component we created and reference those attributes in the jsx code, using the "props" parameter.*/
// ***********************************************************************************************************************************


const DUMMY_INITIAL_EXPENSES = [
  {
    id: "e1",
    title: "Car Insurance",
    date: new Date(2021, 12, 28),
    amount: 300.18,
  },

  {
    id: "e2",
    title: "Toilet Paper",
    date: new Date(2021, 11, 20),
    amount: 265.35,
  },

  {
    id: "e3",
    title: "New TV",
    date: new Date(2021, 8, 20),
    amount: 465.25,
  },

  {
    id: "e4",
    title: "New Bed",
    date: new Date(2021, 1, 20),
    amount: 600.87,
  },
];



// ARROW FUNCTION (alternative syntax for wrinting a function)
const App = () => {

  // THIS IS HOW WE ADD A NEW EXPENSE ITEM USING STATE.
  const [addedExpense, setAddedExpense] = useState(DUMMY_INITIAL_EXPENSES);

  const addExpenseHandler = (expense) => {
    console.log("Getting Form Expense Data from App.js");
    // This way of updating the state is not REEAAAALLY correct. It would still work tho.
    /* setAddedExpense([expense, ...addedExpense]);   ** since the data passed from the "onAddExpense" attribute is an Array, we have to use an array here.
                                                         We also use the spread operator to pull all the previous object's arrays that we already added from 
                                                         to the "addedExpense" */
    
    // The CLEAN way of updating our state when its based on older snapshots of that same state
    // If we're updating the state, depending on the previour state, WE SHOULD USE THIS SPECIAL FUNCTION FORM:
        // So that we pass a FUNCTION as an argument/parameter, and then that FUNCTION will automatically receive the latest state snapshot/properties
    setAddedExpense((prevExpenses) => {
      return ([expense, ...prevExpenses]);
    })

  };


  // An array that takes in multiple javascript objects
  /*  The data in the different objects (properties) in the array, will be passed onto the React custom component/element (ie: "<ExpenseItem>"),
       as attributes, which will then be passed onto the JSX code in the "ExpenseItem.js" file */
  


  return (
    <div>

      <NewExpense onAddExpense={addExpenseHandler} />
      {/* React custom elements. */}
      {/* We are feeding the "expenses" properties to the "Expenses" component/file --> which then feeds these properties into the
         "ExpenseItem" component/file that has the JSX code (HTML code in JavaScript  */}
       {/* This attribute/prop is a key-value pair --> key is "items" and "expenses" is value.   Key (name of the attribute) 
            should match the one in "Expenses* file */}
      <Expenses items={addedExpense} />

    </div>
  );
}

export default App;

import React, { useState } from "react";
import "./ExpenseForm.css";

// Event listeners (listens to an event) in React:
// "onInput" ---> listens/triggers on every KEYSTROKE, can only be used for
// "onChange" ---> also listens/triggers on every KEYSTROKE, but the advantage of it is that it can be used for every type of input
//                 (for example: also for drop menus)
// "onSubmit" ---> if a button with type submit (ie: <button type:"submit"> Click Me </button>), is pressed inside of a form in a web browser, then the
//                 overall <form> HTML element will emmit an event to which we can listen to by adding the "onSubmit" event listener as an attribute to
//                 the form element.




/*********************************************** PASSING DATA from CHILD-TO-PARENT COMPONENTS ***********************************************/
  /* After storing the data and combining it into a JavaScript object ---> Now we want to pass it to the "App.js" component which has the list of existing expenses */
  /* Inorder to do so, we first have to pass it to the "NewExpense.js" component and THEN to the "App.js" because "App.js" is accessing the expense form (this component)
     through the "NewExpense.js" component. SO WE CANNOT SKIP COMPONENTS IN BETWEEN.  **** "PROPS" CAN ONLY BE PASSED FROM PARENT TO CHILD. **** */ 
  /* So to pass data up from Child to Parent components, we do is this: 
                                    1. Pass a function from a Parent component to a Child component 
                                    2. Then call that function inside the child component 
                                    3. When we call that function in the child component, we can then pass the DATA into that function as a parameter.*/

  /* Steps: 1. Create a function and an attribute in the Parent of this component ("NewExpense.js") ----> 
                        a. Create a function in "NewExpense.js" component with a paramter (any name for parameter). And inside this function, create a JavaScript 
                           object that pulls the data from the "expenseDate" javascript object here in this component, using the spread operator. 
                             (ie: const saveEnteredDataHandler = (enteredExpenseData) {
                                        const expenseData = {
                                            ...enteredExpenseData,
                                            id: Math.Random().toString;
                                        }
                                  })
                        b. Add a new attribiute/prop to the "expenseForm" element in "NewExpense.js" component. Can name the attribute anything we want, but 
                           using "on" in the name makes it clear that the value of this attribute/prop should be a function that will be triggered, when the form is
                           submitted. The value of this attribute/prop is a function that will then be called inside the "ExpenseForm.js" compoent (this component).
                            (ie: <expenseForm onSaveExpenseData={saveEnteredDataHandler} />  
                                **** THIS ATTRIBUTE PASSES ITS VALUE, TO THE EXPENSE FORM ****
                
                2. Use this function in the CHILD component (this compoenet): 
                                a. Add the "props" keyword as an attribute to this component's function. 
                                b. Call the function we created in its Parent component ("saveEnteredDataHandler") in the Child component (this one), inside
                                   the "formHandler" function, through "props". And pass in the "expenseData" javascript object as a parameter inside it.
                                        (ie: props.onSaveExpenseData(expenseData);)  *** USE THE NAME OF THE ATTRIBUTE *** 
                                                ** here the parameter passes the "expenseData" javascript object properties (in this component) 
                                                   into the "saveEnteredDataHandler" function, in the "newExpenseData" component, through its parameter. **
                                 
                3. Then, in the "App.js" component do the same thing:
                                a. add a function with a paramter. (The paramter will let get the expenses data from the "NewExpense.js" component, when 
                                    we use it there using "props")
                                        (ie: const addExpenseHandler = (expense) => {
                                                    console.log(expense);
                                              };)
                                b. add an attribute to the "NewExpense" element in "App.js" (give it any name), with a the function we created, as a value
                                        (ie: <NewExpense onAddExpense={addExpenseHandler} />)   
                
                4. Lastly, in "NewExpense.js" component: 
                                a. Add the "props" keyword as an attribute to the component's function 
                                b. Call the function we created in its Parent component ("App.js"), inside
                                   the "saveEnteredDataHandler" function, through "props". And pass in the "expenseData" javascript object as a parameter inside it.
                                    (ie: props.onAddExpense(expenseData))               */
 // *************************************************************************************************************************************************************x





// "props" lets us access attribute values (which have functions), from parent components or other components.
const ExpenseForm = (props) => {
  /* After we get the key value of the KEY PRESSED --> we want to store it somewhere inorder to use that value.
     Inother words, we want to gather all the values, for ALL the inputs, and combine them as an object, when the form is submitted.
     SO Inorder to store these values, and make sure they survive if the this component/function is re-executed --> WE USE THE "useState" HOOK. */

  // YOU CAN HAVE MULTIPLE STATES PER COMPONENT/FUNCTION. (each one is seperate from the other)

  const [titleEntered, setTitleEntered] = useState(""); /* We use the "useState" HOOK here, inorder to STORE the key press values that we enter in the title input,
                                                              INTO OUR STATE or into a VARIABLE ("titleEntered"). 
                                                              So that the stored key press values in the state SURVIVES if we re-execute the component.*/
  // The "useState" parameter is an EMPTY STRING, because the initial value of the title input is EMPTY.

  const [amountEntered, setAmountEntered] = useState("");
  const [dateEntered, setDateEntered] = useState("");

  // [DONT USE]
  /* Another way of writing multiple STATES: 
       Instead of having multiple states in one component, we can have ONLY ONE state that contains a javascript OBJECT with all of the initial values
       of the things we want to store. 
       ie: const [userInput, setUserInput] = useState({
              enteredTitle: " ",
              enteredAmount: " ",
              enteredDate: " ",
           });  
           
           */

  const titleChangeHandler = (event) => { // The parameter within the Callback function (event) refers to what triggered the event
    
    setTitleEntered(event.target.value); /* Stores the KEY press/button that caused the event, into the "titleEntered" variable --> using the 
                                                "setTitleEntered" function */
    //console.log(titleEntered); // this is just to make sure that the values are INDEED getting stored in the "titleEntered" variable.

    // [Another way (DONT USE)]
    // ************************************************** MEMORISE ************************************************
    // **************** Whenever our State update depends on a PREVIOUS State, use this function form. ***************
    /* setUserInput( (prevState) => { // "prevState" refers to the LATEST state snapshot of the "useState" funtion's object, keeping all state updates in mind. 
            return (
                ...prevState,    // We can use the spread operator to pull all the key-value pairs from the javascript OBJECT, in the prevState function (which its values come from the useState function's object), and adds it to the new object ("setUserInput")
                enteredTitle: event.target.value,  // and then override the value we want to change
            );
        }); */
  };

  const amountChangeHandler = (event) => {

    setAmountEntered(event.target.value);

    // [Another way (DONT USE)]
    /* setUserInput( (prevState) => {
            return (
                ...prevState,    
                enteredAmount: event.target.value,
           }); */
  };

  const dateChangeHandler = (event) => {
    setDateEntered(event.target.value);

    // [Another way (DONT USE)]
    /* setUserInput( (prevState) => {
            return (
                ...prevState,    
                enteredDate: event.target.value,
           }); */
  };

  /* This function collects and combines the data we stored into the "status" functions (ie: "titleEntered"), into a javascript object. 
     So that we can later do something with it. */
  const formHandler = (event) => {
    // "event" refers to what triggered the event (ie: when we click the submit button)
    /* Whenever we click the SUBMIT button (inside the form element), the web browser refreshes the web page by default, which is NOT WHAT WE WANT. 
           We want to handle the form submission through javascript, inorder to manually collect and combine the data into an object and do something with it.
           So we use the "preventDefault()" which is a default javascript method. So it prevents refreshing the page when the submit button is clicked, because 
           it doesn't actually submit the data or do anything. */
    event.preventDefault();

    // This object combines all the entered data.
    const expenseData = {
      title: titleEntered, // "titleEntered" refers to the variable in the destructing array, in which we store the data entered in the title input element.
      amount: +amountEntered,
      date: new Date(dateEntered), // parses the date string ("dateEntered") and converts it into a date object.
    };
   

    props.onSaveExpenseData(expenseData); /* passes "expenseData" javascript object properties to the "onSaveExpenseData()" function's parameter, 
                                            located in this component's parent ("NewExpense.js"). HAVE TO USE THE NAME (KEY) OF THE ATTRIBUTE IN THE PARENT */
    setTitleEntered(""); /* overrides what user entered, after the form was submitted --> and therefor clear the input to an empty string.
                            [have to add the "value" attribute with the "titleEntered" variable, to the corresponding input element] */
    setAmountEntered("");
    setDateEntered("");
  };

  

  return (
    <form onSubmit={formHandler}>
      
      {/* we want to execute a function when this form is being submitted, through the "onSubmit" event listener. */}
      <div className="expense-form">
        <div className="expense-form__control">
          <label>Title</label>
          <input
            type="text"
            /* This is TWO-WAY BINDING **** (allows us to gather user input (through "onChange" event) but then also change it (through "value" attribute)
               (for example: upon form submission)) */
            value={titleEntered} // a prop that passes a new value into the input, so that we can reset or change the input programmtaically 
                                 // (This will let us reset the input value that the user typed in, when we click the SUBMIT button). 
                                 // [we need to also set the string of the "setTitleEntered" to an empty string ("") in the formHandler function ***.]
            onChange={titleChangeHandler} // listens to changes in the input to update the state
          />
        </div>

        <div className="expense-form__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={amountEntered}
            onChange={amountChangeHandler}
          />
        </div>

        <div className="expense-form__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={dateEntered}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="expense-form__actions">
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;

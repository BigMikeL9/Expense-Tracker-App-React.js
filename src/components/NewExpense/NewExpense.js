import React, { useState } from "react"; // dont need this tho    
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";


// This component will return an HTML form for USER inputs, where they can add their expenses.
const NewExpense = (props) => { // "props" lets us access attribute values (which have functions), from parent components or other compoenents.
    const saveExpenseDataHandler = (enteredExpenseData) => { // We get the expense data properties through this parameter. Check "ExpenseForm.js" for explanation.
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        }
        props.onAddExpense(expenseData); /* passes "expenseData" javascript object properties to the "onAddExpense()" function's parameter, 
                                            located in this component's parent ("App.js"). HAVE TO USE THE NAME (KEY) OF THE ATTRIBUTE IN THE PARENT */
        setIsEditing(false);
    };


    // This opens up the user input form tab, when the add new expense button is clicked.
    const [isEditing, setIsEditing] = useState(false)

    const isEditingHandler = () => {
        setIsEditing(true);
    };

    const onCancelHandler = () => {
        setIsEditing(false);
    };
  

    return (
        <div className="new-expense">
            {!isEditing && <button onClick={isEditingHandler}>Add New Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={onCancelHandler}/>}
        </div>
    )
};

export default NewExpense;
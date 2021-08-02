import React from "react"; // In previous versions of React we HAD to add this React import, which transforms JSX code (under the hood) 
                             // to HTML code that is readable by the browser. JSX (HTML in Javascript) is NOT READABLE by the browser.
                            // In newer versions of react tho, we dont need this import, but the code is STILL being transformed to HTML 
                            // code, under the hood. [This was added to every single file in REACT back in the day.]
// "React" is a DEFAULT IMPORT. ", {...}" is a NAMED IMPORT, which lets us import specific pieces from the react library.
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

// **************** Importing other CSS files here ****************
// When adding css code --> create a file in the components folder with the same name as the component file
// ie: "ExpenseItem.css"
// Then we need to import the css file here [AT THE TOP]
import "./ExpenseItem.css";

// **************** How to name Component files in react ****************
// When naming component files in react, every word in capitalized. Ex: "ExpenseItem.js"
// *** It is considered good practice to create new files for different components, so that we have one file per component.
// ***********************************************************************************************************************************

// **************** What is a Component? ****************
// A COMPONENT IN REACT, IS JUST A JAVASCRIPT FUNCTION that returns JSX code.
// The conventional way of naming a function in a component in react, is to name it the same thing as the file name.
// ***********************************************************************************************************************************

// ****************************** ONE ROOT element in the return function ******************************
// In React there is an important RULE regarding the JSX code (HTML code in Javascript), that we return inside a component:
// *** Which is that it MUST ONLY have ONE ROOT ELEMENT per RETURN STATEMENT (or JSX code snippet).
// For example: We can't have two divs next to each other, ie: <div>....</div><div>...</div> [NOT ALLOWED BY REACT]
// **** The way around it is to wrap all of the elements inside ONE ROOT/MAIN div -->>
// ***********************************************************************************************************************************

// ****************************** How to use Javascript in JSX code ******************************
// To output dynamic data (data that can be changed by the user) we use a special syntax by React, INSIDE of the JSX code snippets.
// The special syntax is curly braces"{}" where javascript expressions can be insert into.
// ***********************************************************************************************************************************

// ************************************* HOW TO SHARE DATA BETWEEN REACT COMPONENTS *************************************************
// **************** We make functions in components reusable, by giving it a parameter ("props") ****************
// SECOND PART
// In React, Only ONE PARAMTER is needed to hold ALL of the received attributes as properties, hence its name "Props"
// All received properties come from the "App.js" file, where we create a custom React element that takes in attribites with the properties
// This ONE PARAMATER is ussaully named "props" (can be named anything tho). It is a Javascript OBJECT, which is why it can hold all of
// the attribute properties for our custom element that are stated in the "App.js" file.
/* FINALLY, after we create the properties and insert them into the custom React elements in the "App.js", we THEN add the "props" parameter
   to the function here --> then reference to attributes we created in the "App.js" by using their "key" names, otherwise it wont't work
    (ie: props.{name of the attribute we stated in the "App.js"} )*/

// IN SHORT --> WE GET ALL THE DATA WE NEED FROM OUTSIDE OF THIS COMPONENT ("App.js"), AND USE IT HERE BY ACCESSING THIS
//            DATA/PROPERTIES THROUGH A PARAMeTER ("props").
// SO the properties are defined in "App.js" and then passed here, inorder to have different usages, through attributes.

// ***********************************************************************************************************************************


// ****************************** Adding Events in REACT ******************************
// Ex:   <button onClick={ () => {console.log("Button Clickedd!!!")} }> Click me </button> 
    // In react you add an EVENT to the button element (as an attribute), that does something when the button is clicked.
    // All react EVENTS start with "on....". ie: "onclick"
    // ***Anonymous Arrow function*** ----> () => {....}
    // ********** EVENTS IN React takes in Javascript functions ONLY. (ie: onclick = { () => {.......} } )
    // When witing a javascipt function in an event function --> DO NOT INCLUDE THE BRACKETS TO THE JAVASCRIPT FUNCTION 
      // ie: "<button onclick= { clickHandler }></button>"  ----> clickHandler doesnt have brackets

// We can use a wide variety of events, like "setTimeout()" for example. Check the HTML events Doc for all the list of events we can use.
// ***********************************************************************************************************************************


// ****************************** State in REACT ******************************
// React only renders the component functions ONCE and thats it, which as a result does not let us update something on the web browser
// thats already been rendered, like a text wouldnt change if we click a button.
// This is where STATE comes in, which allows us to define values as state, where changes in these values WILL reflect on component
// functions thats being called again, and make them change on screen/browser.
// "useState" is a REACT HOOK. ALL REACT HOOKS start with a "use..." word.
// All react HOOKS MUST be called INSIDE of react component functions. Not in nested functions tho.
// "useState" ALWAYS returns an ARRAY with exactly TWO elements.
// The "useState" HOOK, RE-EXECUTES or CALLS the WHOLE component AGAIN when the state changes, NOT just the variable that we want to change.

/* Steps: 1. Add ", { useState}" in the "import React from "react";", inorder to use this feature in this component.
          2. Then call the "useState()" (HOOK) INSIDE the component function. And add an argument/parameter to it.
              That parameter should be a default or INITIAL value of the thing that we want to change on the screen when the event happens. 
              ie: "useState(props.title)"
          3. To assign a new value to "props.title", we then use the ES6 feature called ARRAY DESTRUCTING to assign that new value.
             The Array destructing takes in 2 elements (WE CAN CHOOSE their NAMES to be ANYTHING we want, order is what matters)
              The FIRST element is the name for the DEFAULT value that we want to change**
              The SECOND element is the name of a function that we can later call whenever we want to change the default value 
              of "props.title**
              Like this --> "const [title, setTitle] = useState(props.title);""  
                            so ------> "title" is equal to "props.title" and
                                        "setTitle" is a function that can later be called to 
                                                    set a new value to "props.title" to.
            5. To assign the new value --> we call the SECOND element function and then pass the NEW value as an 
               argument/parameter inside it. 
               ie: "setTitle( "NEW TITLEEEEE" );" 
            6. Lastly, we add the FIRST ELEMENT in the JSX code (in between curly braces), where we want to ouput that new value
               (ie: <h2> {title} </h2>)*/
          
// ***********************************************************************************************************************************


 // ******** Javascript syntax ********
  // A "const" is a variable that may never change.
  // "Date()" is a built-in constructor that comes witH JavaScript.
  // "toISOString()" returns a Date object as a String, using the ISO standard.
  // "toLocaleString()" method returns a string with a language sensitive representation of this date.
  // "getFullYear()" method returns the year of the specified date according to local time.


// ARROW FUNCTION 
const ExpenseItem = (props) => {
  // const [title, setTitle] = useState(props.title);       // ES6 Array Destructing. Use naming conventions similar to this. [check top for explanation on "State"]

  // const clickHandler = () => {         // Use the word"Handler" to make it clear that this will be called upon an Event
  //   setTitle("Update Title");          // "setTitle" is the name of second element that comes from the destructing array (which is a function).
  // };

  return (
    <li>
 
      {/* "Card" is a special kind of component that can act as a ROOT/Wrapper custom element (check its file) */}
      <Card className="expense-item"> {/* This is the ROOT/MAIN element which wraps all the JSX code inside */}
        
        <div className="expense-item__description">

          {/* The date properties are coming from the "App.js" "expenses" javascript object, and getting fed to the "expenseDate" */}
          <ExpenseDate date={props.date} /> {/* If we have no content between the opening an closing tags of a react element, we can 
                                                write it as a self closing element. */}

          <h2>{props.title}</h2> {/* "title" is the name of the first element that comes from the destructing array. The name 
                                of the element we want to change (ie: props.title) */}
        </div>

        <div className="expense-item__price">${props.amount}</div>
        {/* <button onClick={ clickHandler }> Click me </button>         /* For the "onclick" event value --> WE ONLY POINT AT THE "clickHandler" 
                                                                          function, which means we DON'T ADD ANY PARENTHESES TO IT AT THE END.
                                                                          SAME THING AS IN NATIVE JAVASCRIPT (look at javascript notes) */}

      </Card>
      
    </li>
  );
}


// to use the component, we need to export it or export the function in this file. (**write the name of the function, WITHOUT BRACES)
export default ExpenseItem;

// after exporting this file, we can then import it in the "App.js" file where all the other components will be imported or nested to.

// Summary: WE ALWAYS DO THESE STEPS WHEN CREATING A NEW COMPONENT IN REACT ==>
//           1. Create a component file and add a function which return HTML code (just like this one)
//           2. We then "export" it (in the same file)
//           3. Then "import" it in the file that we want to use it in ("ussually "App.js").
//           4. There we can Use it like an HTML element [but starting with an uppercase character] in the file
//              it is imported in (ussually the "App.js" file).

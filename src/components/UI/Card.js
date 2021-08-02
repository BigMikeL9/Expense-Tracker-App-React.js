import "./Card.css"

// Special type of component that acts as a ROOT custom element in other components/files.

// This component is going to be used as a *** Wrapper or ROOT/MAIN *** custom element in other files/components, that wraps
// all the JSX code inside.


// Inorder for this component to be able to act as a ROOT custom element (in other components), it has to have the "props.children" react 
// feature, which enables it to become a ROOT custom element in other components/files.
// "props.children" is a speacial prop that is built into react. Every component recieves the "props.children" prop automatically, even if we're
// not setting it explicitly.
// ******* THE VALUE OF THE "children" prop ---> is always the content between the opening and closing Wrapper or Root/MAIN tags of the custom component element 
// (that we add in other components/files). [ie: <Card>......("children" value)......</Card>]


// ARROW FUNCTION 
const Card = (props) => {
    const classes = "card " + props.className;  /* Inorder to be able to use classes in a ROOT custom react element --> we need to write
                                                    this code which adds the other classes in those elements (to a long list of class names), next 
                                                    to the class that we have here, and thus using them aswell */
                                                        

    return (
        <div className={classes}> 
            {props.children}    {/* DONT FORGET BRACES when adding Javascript expressions in JSX.
                                     We're outputing value of the "props.children" prop here*/}
        </div>
    );
}

export default Card;
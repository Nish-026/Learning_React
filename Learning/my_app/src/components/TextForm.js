import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked: " +  text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('converted to Uppercase','success')
  };

  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter text here");
  return (
    <>
      <div className="container" style={{color:props.mode=="light"?'black':'white'}}>
        <div className="mb-3">
          <h1>{props.heading}</h1>
          <textarea
            className="form-control"
            style={
              {backgroundColor:props.mode=="dark"?'grey':'white',
              color:props.mode=="light"?'black':'white'
              }}
            id="exampleFormControlTextarea1"
            value={text}
            onChange={handleOnChange}
            rows="8"
          ></textarea>
          <button className="btn btn-primary" onClick={handleUpClick}>
            Convert to Uppercase
          </button>
        </div>
      </div>
      <div>
        <h5>Words:{text.split(" ").length} Characters: {text.length}</h5>
      </div>
    </>
  );
}

// This code defines a functional component called TextForm
// using the React library. The component takes in a props object as a parameter.

// Within the component, there is a useState hook that declares a state
// variable called text and a corresponding function called setText. The initial
// value of text is set to 'Enter text here2'.

// The component renders a <div> element that contains a heading (<h1>) and a
//     <textarea> element. The value prop of the <textarea> is set to the text state variable,
//          and the onChange event is handled by the handleOnChange function.

// The handleOnChange function is triggered when the user types in the <textarea>.
//     It receives the event object and updates the text state variable by extracting
//     the value from event.target.value and passing it to the setText function.

// Below the <textarea>, there is a <button> labeled "Convert to Uppercase." It has an
//     onClick event handler handleUpClick.

// The handleUpClick function is triggered when the "Convert to Uppercase" button is clicked.
// It converts the current value of the text state variable to uppercase using the toUpperCase
// method and assigns the result to the newText variable. Then, it updates the text state variable
// by calling the setText function with newText.

// Overall, this code sets up a text input area where the user can enter text. Whenever the
// user types in the textarea, the text is updated in the component's state. Clicking the
// "Convert to Uppercase" button converts the text to uppercase and updates the state variable,
// causing a re-render of the component with the updated text.

// ReactDOM.render(<h1>Hello,everyone!</h1>, document.getElementById("root"))

//ReactDOM is a global variable which has a render method that helps in adding the elements
// so first i pass the value that i want on the display, second is where i want it


///// This is the imperative way in vanilla javascript 

const h1 = document.createElement("h1")
h1.textContent = "Hello world"
h1.className = "header"
console.log(h1)

// In React we employ declarative way,
// React Team created a syntax called JSX which is HTML with a flavor of javascript
// In react we use className instead of class


// <h1 class="header">

const element = <h1 className="header">This is JSX</h1>
console.log(element)

/*
{
    type: "h1", 
    key: null, 
    ref: null, 
    props: {
        className: "header", children: "This is JSX"}, 
    _owner: null, 
    _store: {}
}
 */

// JSX
ReactDOM.render(element, document.getElementById("root"))





import React from 'react'
import PropTypes from 'prop-types'
export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
  </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired  // title should be string only, isRequired says that the title should be passed
}


Navbar.defaultProps={
  title:"set title" // so if a prop is not passed in that case it would make the title of the navbar as "Set Title"
}
/// How to handle typechecking with proptypes
// As your app grows, you can catch a lot of bugs with typechecking. 
// For some applications, you can use JavaScript extensions like Flow or 
// TypeScript to typecheck your whole application. But even if you don’t use those, 
// React has some built-in typechecking abilities. To run typechecking on the props for a
//  component, you can assign the special propTypes property:

// import PropTypes from 'prop-types'

// function HelloWorldComponent({ name }) {
//   return (
//     <div>Hello, {name}</div>
//   )
// }

// HelloWorldComponent.propTypes = {
//   name: PropTypes.string
// }

// export default HelloWorldComponent

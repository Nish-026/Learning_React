import React from "react";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';
export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.toggleMode}
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
              Switch Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired, // title should be string only, isRequired says that the title should be passed
};

Navbar.defaultProps = {
  title: "set title", // so if a prop is not passed in that case it would make the title of the navbar as "Set Title"
};
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

// We have not used a tag for redirecting to about from the navbar, we have used Link for that and we can {Link}
// from the react-router-dom
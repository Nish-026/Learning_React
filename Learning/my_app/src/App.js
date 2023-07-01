import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light"); // To get the value of mode
  const [alert, setAlert] = useState(null); // to set the value of alert
  const showAlert = (msg, type) => {
    setAlert({
      type: type,
      msg: msg,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark Mode enabled", "success");
      document.title = "TextUtils- DarkMode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode enabled", "success");
      document.title = "TextUtils- Home";
    }
  };

  return (
    <>
      <Router>
      <Navbar title="My Navbar" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container">
        <Routes>
          <Route path="/about" element={<About />}/>
          <Route path="/" element={            <TextForm
              heading="Enter your text"
              mode={mode}
              showAlert={showAlert}
            />}/>
        </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;

//here title="My navbar" is a prop

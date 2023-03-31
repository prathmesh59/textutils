import React, { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/textForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import TextForm from './components/textForm';

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert(" Dark mode is enables", "succes");
      document.title = "Textutils - Darkmode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert(" Light  mode is enables ", "succes");
      document.title = "Textutils - Lightmode";
    }
  };
  return (
    <>
    <Router>

        <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          			<Route exact path="/" element={<TextForm showAlert={showAlert} sheading="Enter the text to analyze" mode={mode}/>} />
                <Route exact path="about" element={<About/>}/>
        		</Routes>
        <div className="container" my-3>
        
      </div>
      </Router>
    </>
  );
}
export default App;


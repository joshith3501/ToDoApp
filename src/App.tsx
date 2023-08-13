import { useState, useEffect } from "react";
import "./App.css";
import InputField from "./components/InputField";
import ToDoList from "./components/ToDoList";
import { MdDarkMode, MdOutlineDarkMode} from "react-icons/md";
function App() {

  let modeObject = {
    query: "app-container",
    logo: "MdOutlineDarkMode"
  }
  let [mode, setMode] = useState(modeObject);
  let [theme, setTheme] = useState(false);


  useEffect(() => {
    let prev: any = localStorage.getItem("theme");
    prev = JSON.parse(prev);
    if (prev.logo === "MdDarkMode") {
      setTheme(true);
    } 
  }, []);

  useEffect(() => {
    if (theme) {
      modeObject = {...modeObject, query: "app-container dark-mode", logo: "MdDarkMode" }
      setMode(modeObject);
      localStorage.setItem("theme", JSON.stringify(modeObject));
    } else {
      modeObject = {...modeObject, query: "app-container", logo: "MdOutlineDarkMode"}
      setMode(modeObject);
      localStorage.setItem("theme", JSON.stringify(modeObject));
    }
  }, [theme]);

  const handleThemeClick = () => {
    setTheme(!theme);
    console.log("clicked");
    if (theme) {
      modeObject = {...modeObject, query: "app-container dark-mode", logo: "MdDarkMode" }
      setMode(modeObject);
      localStorage.setItem("theme", JSON.stringify(modeObject));
    } else {
      
      modeObject = {...modeObject, query: "app-container", logo: "MdOutlineDarkMode"}
      setMode(modeObject);
      localStorage.setItem("theme", JSON.stringify(modeObject));
    }
  };

  return (
    <div className={mode.query}>
      <div className="header">
        <h1 className="main-heading">Let's pile up those Tasks!</h1>
        <button className="theme-toggler" onClick={handleThemeClick}>
          <div className="switch"></div>
        </button>
      </div>
      <InputField />
      <ToDoList />
    </div>
  );
}

export default App;

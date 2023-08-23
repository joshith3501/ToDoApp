import { useState, useEffect } from "react";
import "./App.css";
import InputField from "./components/InputField";
import ToDoList from "./components/ToDoList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import  { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import TodoProp from './components/TodoProp';


function App() {
  let [mode, setMode] = useState("app-container");
  let [theme, setTheme] = useState(false);
  let [todo, setTodo] = useState<string>("");
  let [todos, setTodos] = useState<TodoProp[]>([]);

  useEffect(() => {
    if (theme) {
      setMode("app-container dark-mode");
      // setColor("beige")
    } else {
      setMode("app-container");
      // setColor("black");
    }
  }, [theme]);

  useEffect (() => {
    console.log(todos);
  }, [todos]);

  const handleThemeClick = () => {
    setTheme(!theme);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo === "") {
      console.log("no value entered");
    } else {
      setTodos([...todos, { task: todo, time: Date.now(), isDone: false, isEdit: false }]);
      setTodo("");
    }
  };

  return (
    <div className={mode}>
      <div className="header">
        <h1 className="main-heading">Let's pile up those Tasks!</h1>
        <div className="theme-toggle-container">
          <FontAwesomeIcon icon={faMoon} className="dark-mode-icon"/>
          <i className="fa-solid fa-user"></i> 
          <button className="theme-toggler" onClick={handleThemeClick}>
            <div className="switch"></div>
          </button>
          <FontAwesomeIcon icon={faSun} className="light-mode-icon" />
        </div>
      </div>
      <InputField setTodo={setTodo} onSubmit={handleSubmit} />
      <ToDoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;

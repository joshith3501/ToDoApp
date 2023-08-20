import { useState, useEffect } from "react";
import "./App.css";
import InputField from "./components/InputField";
import ToDoList from "./components/ToDoList";
import { MdOutlineDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";

interface TodoProp {
  task: string;
  time: number;
  isDone: boolean;
}

function App() {
  let [mode, setMode] = useState("app-container");
  let [theme, setTheme] = useState(false);
  let [todo, setTodo] = useState<string>("");
  let [todos, setTodos] = useState<TodoProp[]>([]);
  // let arr: (TodoProp | string)[];

  useEffect(() => {
    if (theme) {
      setMode("app-container dark-mode");
    } else {
      setMode("app-container");
    }
  }, [theme]);

  const handleThemeClick = () => {
    setTheme(!theme);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(todo === "") {
      console.log("no value entered");
    }else {
      setTodos([...todos, { task:todo, time: Date.now(), isDone: false }]);
      setTodo("");
    }
  };

  return (
    <div className={mode}>
      <div className="header">
        <h1 className="main-heading">Let's pile up those Tasks!</h1>
        <div className="theme-toggle-container">
          <MdOutlineDarkMode />
          <button className="theme-toggler" onClick={handleThemeClick}>
            <div className="switch"></div>
          </button>
          <CiLight />
        </div>
      </div>
      <InputField setTodo={setTodo} onSubmit={handleSubmit} />
      <ToDoList todos={todos} />
    </div>
  );
}

export default App;

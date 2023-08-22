import { useState } from "react";
import TodoProp from "./TodoProp";
import { MdOutlineDone, MdEditDocument, MdOutlineDelete } from "react-icons/md";
interface Props {
  todos: TodoProp[];
  setTodos: React.Dispatch<React.SetStateAction<TodoProp[]>>;
}

const ToDoList = ({ todos, setTodos }: Props) => {
  const [isEdit, setIsEdit] = useState(false);
  const [value, setValue] = useState("");

  const handleComplete = (e: number) => {
    let modifierTodo = todos.map((todo) => {
      if (todo.time === e) {
        if (todo.isDone) {
          return { ...todo, isDone: false };
        }
        return { ...todo, isDone: true };
      }
      return todo;
    });
    setTodos(modifierTodo);
  };

  const handleEdit = (e: number) => {
    setIsEdit(true);
  };

  const handleDelete = (e: number) => {
    let modifierTodo = todos.filter((todo) => todo.time !== e);
    setTodos(modifierTodo);
  };

  const handleFormSubmit = (e: number) => {

    let modifierTodo = todos.map((todo) => {
      if (todo.time === e) {
          todo = { ...todo, task: `${value}` };
      }
      return todo;
    });
    setTodos(modifierTodo);
  };

  return (
    <section className="list-container">
      {todos.map((todo, index) => (
        <article className="list-element-container" key={todo.time}>
          <div className="element-description">
            {isEdit ? (
              <form
                className="edit-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  handleFormSubmit(todo.time);
                  setIsEdit(false);
                }}
              >
                <input
                  defaultValue={todo.task}
                  className="edit-form-input"
                  onChange={(e) => {
                    setValue(e.target.value);
                  }}
                ></input>
                <button className="edit-form-submit" type="submit">done</button>
              </form>
            ) : (
              <span>{todo.task}</span>
            )}
          </div>
          <aside className="element-state-container">
            <button
              className="element-state-modifier task-completed"
              onClick={() => {
                handleComplete(todo.time);
              }}
            >
              <MdOutlineDone />
            </button>
            <button
              className="element-state-modifier task-edit"
              onClick={() => {
                handleEdit(todo.time);
              }}
            >
              <MdEditDocument />
            </button>
            <button
              className="element-state-modifier task-delete"
              onClick={() => {
                handleDelete(todo.time);
              }}
            >
              <MdOutlineDelete />
            </button>
          </aside>
        </article>
      ))}
    </section>
  );
};

export default ToDoList;

import TodoProp from "./TodoProp";
import { MdOutlineDone, MdEditDocument, MdOutlineDelete } from "react-icons/md";
interface Props {
  todos: TodoProp[];
  setTodos: React.Dispatch<React.SetStateAction<TodoProp[]>>;
}

const ToDoList = ({ todos, setTodos }: Props) => {
  const handleComplete = (
    e: number
  ) => {
    console.log(e);
    let modifierTodo = todos.map((todo) => {
      if(todo.time === e) {
        if(todo.isDone) {
          return { ...todo, isDone: false };
        }
        return { ...todo, isDone: true};
      }
      return todo;
    }
  );
  setTodos(modifierTodo);
  }

  const handleEdit = (e: boolean) => {
    console.log(e);
    console.log("edit clicked");
  };

  const handleDelete = (e: number) => {
    let modifierTodo = todos.filter((todo) => todo.time !== e);
    setTodos(modifierTodo);
  };

  return (
    <section className="list-container">
      {todos.map((todo, index) => (
        <article className="list-element-container" key={todo.time}>
          <span className="element-description">{todo.task}</span>
          <aside className="element-state-container">
            <button
              className="element-state-modifier task-completed"
              onClick={(e) => {
                handleComplete(todo.time);
              }}
            >
              <MdOutlineDone />
            </button>
            <button
              className="element-state-modifier task-edit"
              onClick={(e) => {
                handleEdit(todo.isDone);
              }}
            >
              <MdEditDocument />
            </button>
            <button
              className="element-state-modifier task-delete"
              onClick={(e) => {
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

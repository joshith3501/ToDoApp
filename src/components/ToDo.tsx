import TodoProp from "./TodoProp";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

interface Props {
  todo: TodoProp;
  todos: TodoProp[];
  setTodos: React.Dispatch<React.SetStateAction<TodoProp[]>>;
}

const ToDo = ({ todo, todos, setTodos }: Props) => {

  const [value, setValue] = useState(todo.task);

  // useEffect(() => {
  //   let modifierTodo = todos.map((t) => {
  //     return t.time === todo.time ?  {...t, isEdit: todo.isEdit} : t;
  //   })
  //   setTodos(modifierTodo);
  // }, [todo.isEdit])


  const handleEditSubmit = (e: number) => {
    let modifierTodo =todos.map((todo) => {
      return todo.time === e ? {...todo, task: value, isEdit: !todo.isEdit} : todo;
    })
    setTodos(modifierTodo);
    setValue(todo.task);
  }




  const handleComplete = (e: number) => {
    let modifierTodo = todos.map((todo) => {
      return todo.time === e ? {...todo, isDone: !todo.isDone} : todo;
    });
    setTodos(modifierTodo);
  };

  const handleEdit = (e: number) => {
    let modifierTodo = todos.map((todo) => {
      if(todo.time === e) {
        todo.isEdit = !todo.isEdit;
      }
      return todo;
    })
    setTodos(modifierTodo);
    // todo.isEdit = !todo.isEdit;
  };

  const handleDelete = (e: number) => {
    let modifierTodo = todos.filter((todo) => todo.time !== e);
    setTodos(modifierTodo);
  };

  return (
    <article className="list-element-container" key={todo.time}>
      <div className="element-description">
        {todo.isEdit ? (
          <form
            className="edit-form"
            onSubmit={(e) => {
              e.preventDefault();
              handleEditSubmit(todo.time);
              // todo.isEdit = false;
            }}
          >
            <textarea
              defaultValue={todo.task}
              className="edit-form-input"
              onChange={(e) => {
                setValue(e.target.value);
              }}
            ></textarea>
            <button className="edit-form-submit" type="submit">
              done
            </button>
          </form>
        ) : (
          <span>{todo.task}</span>
        )}
      </div>

      {/* SECTION FOR TRIGGERING EDIT, COMPLETE OR DELETE */}

      <aside className="element-state-container">
        <button
          className="element-state-modifier task-completed"
          onClick={() => {
            handleComplete(todo.time);
          }}
        >
          <FontAwesomeIcon icon={faCheck} />
        </button>
        <button
          className="element-state-modifier task-edit"
          onClick={() => {
            handleEdit(todo.time);
          }}
        >
          <FontAwesomeIcon icon={faPenToSquare} />
        </button>
        <button
          className="element-state-modifier task-delete"
          onClick={() => {
            handleDelete(todo.time);
          }}
        >
          <FontAwesomeIcon icon={faTrash}/>
        </button>
      </aside>
    </article>
  );
};

export default ToDo;

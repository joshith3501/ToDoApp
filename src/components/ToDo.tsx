import TodoProp from "./TodoProp";

interface Props {
  todo: TodoProp;
  todos: TodoProp[];
  setTodos: React.Dispatch<React.SetStateAction<TodoProp[]>>;
}

const ToDo = ({ todo, todos, setTodos }: Props) => {
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
              // handleFormSubmit(todo.time);
              // setIsEdit(false);
            }}
          >
            <input
              defaultValue={todo.task}
              className="edit-form-input"
              onChange={(e) => {
                // setValue(e.target.value);
              }}
            ></input>
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
          complete
        </button>
        <button
          className="element-state-modifier task-edit"
          onClick={() => {
            // handleEdit(todo.time);
          }}
        >
          edit
        </button>
        <button
          className="element-state-modifier task-delete"
          onClick={() => {
            handleDelete(todo.time);
          }}
        >
          delete
        </button>
      </aside>
    </article>
  );
};

export default ToDo;

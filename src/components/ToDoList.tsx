import TodoProp from "./TodoProp";
import ToDo from "./ToDo";
interface Props {
  todos: TodoProp[];
  setTodos: React.Dispatch<React.SetStateAction<TodoProp[]>>;
}

const ToDoList = ({ todos, setTodos }: Props) => {


  return (
    <section className="list-container">
      {todos.map((todo) => (
        <ToDo todo={todo} todos={todos} setTodos={setTodos} key={todo.time}/>
      ))}
    </section>
  );
};

export default ToDoList;

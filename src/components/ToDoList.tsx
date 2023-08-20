import TodoProp from "./TodoProp";

interface Props {
  todos: TodoProp[];
}

const ToDoList = ({ todos }: Props) => {
  return(
    <section className="list-container">
      {todos.map((todo) => (
        <article className="list-element-container" key={todo.time}>{todo.task}</article>
      ))}
    </section>
  );
};

export default ToDoList;

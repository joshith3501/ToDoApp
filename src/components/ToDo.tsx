import TodoProp from './TodoProp';

interface Props {
  todo: TodoProp;
}

const ToDo = ({ todo }: Props) => {
  return (
    <div className="todo-element">
      {todo.task};
    </div>
  )
}

export default ToDo
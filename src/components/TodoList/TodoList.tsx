import { TodoInfo } from '../TodoInfo/TodoInfo';

type Todo = {
  id: number;
  title: string;
  completed: boolean;
  user: {
    id: number;
    name: string;
    username: string;
    email: string;
  };
};

type Props = {
  todos: Todo[];
};

export const TodoList: React.FC<Props> = ({ todos }) => {
  return (
    <section className="TodoList">
      {todos.map(todo => (
        <TodoInfo key={todo.id} todo={todo} />
      ))}
    </section>
  );
};

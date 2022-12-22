import { useEffect, useState } from "react";
import TodoNav from "./components/TodoNav";
import TodoTable from "./components/TodoTable";

const App = () => {

  const [todoList, setTodoList] = useState([]);

  const getTodoList = (keys) => {

    const sessionTodoList = JSON.parse(sessionStorage.getItem('todoList'));

    if (keys >= 0) {

      if (sessionStorage.getItem('todoList')) {
        setTodoList(sessionTodoList.filter(todo => todo.status === keys));
      }

    }else {

      if (sessionStorage.getItem('todoList')) {
        setTodoList(JSON.parse(sessionStorage.getItem('todoList')));
      }

    }

  }

  useEffect(() => {
    getTodoList();
  }, []);

  return (
    <div className="py-4 px-4">
      {/* <h4>React Todo App</h4> */}
      <div>
        <TodoNav data={todoList} getTodoList={getTodoList} />
      </div>

      <div className="mt-4">
        <TodoTable data={todoList} getTodoList={getTodoList} />
      </div>
    </div>
  );
}

export default App;

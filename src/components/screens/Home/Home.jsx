import React, { useState } from "react";
import TodoItem from "./item/Todoitem";
import CreateTodoField from "./Create-todo-field/CreateTodoField";

const data = [
  {
    _id: "wer4324",
    title: "Finish the essay collaboration",
    isCompleted: false,
  },
  {
    _id: "wer4335345",
    title: "Read next chapter of the book",
    isCompleted: false,
  },
  {
    _id: "we345efdgt41",
    title: "Send the finished assignment",
    isCompleted: false,
  },
];

const Home = () => {
  const [todos, setTodos] = useState(data);

  const changeTodo = (id) => {
    const copy = [...todos];
    const current = copy.find((todoItem) => todoItem._id === id);
    current.isCompleted = !current.isCompleted;
    setTodos(copy);
  };

  const removeTodo = (id) => {
    // возвращаем все туду todo.filter(если id todo равна id, которое хотим удалить, тогда нам НЕ нужно возращать эту туду)
    const newTodos = todos.filter((todo) => todo._id !== id);
    setTodos(newTodos);
    // setTodos([...todos].filter((t) => t._id !== id));
  };

  const addTodo = (title) => {
    setTodos((prev) => [
      {
        _id: new Date() + todos.length,
        title,
        isCompleted: false,
      },
      ...prev,
    ]);
  };

  return (
    <div className="text-white w-4/5 mx-auto">
      <h1 className="text-2xl font-bold text-center mb-10">
        Todo for JUNIOR++
      </h1>
      {todos.map((todo) => (
        <TodoItem
          key={todo._id}
          todo={todo}
          changeTodo={changeTodo}
          removeTodo={removeTodo}
        />
      ))}
      <CreateTodoField addTodo={addTodo} />
    </div>
  );
};

export default Home;

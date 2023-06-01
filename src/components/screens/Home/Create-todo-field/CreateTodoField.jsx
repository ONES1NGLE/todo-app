import React, { useState } from 'react';

const CreateTodoField = ({ addTodo }) => {
  const [title, setTitle] = useState('');

  const onAddTodo = (title) => {
    addTodo(title);
    setTitle('');
  };

  return (
    <div className="flex item-center justify-between mb-4 rounded-2xl border-zinc-800 border-2 px-5 py-3 w-full mt-20">
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        onKeyDown={(e) => e.key === 'Enter' && onAddTodo(title)}
        className="bg-transparent w-full border-none outline-none"
        placeholder="Add a task"
      />
    </div>
  );
};

export default CreateTodoField;

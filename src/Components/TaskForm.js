import React, { useState } from "react";
const TaskForm = ({ addTask }) => {
  const [input, setInput] = useState("");
  const handlechange = (e) => {
    
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({
      id: Math.random(),
      task: input,
      isdone:false
    });
    setInput('')
  };
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <input type="text" className="input-add" placeholder="Add task" value={input} onChange={handlechange} />
      <button className="addBtn">Add Task</button>
    </form>
  );
};

export default TaskForm;

import React, { useState } from "react";
import Task from "./Task";
import TaskForm from "./TaskForm";

const TaskList = () => {
  const [tasks, setTask] = useState([]);

  const addTask = (task) => {
     if(task.task.trim()!==""){
      setTask([...tasks, task]);
    }else{
      alert("the task does not be empty !!!")
    }
    
   // console.log(tasks)
  };

  const removeTask = (id) => {
    setTask(tasks.filter((task) => task.id !== id));
  };

  const editTask = (index, value) => {
    let newarrr=tasks.map((task)=>task.id===index ? {...task,task:value}:task)
    setTask(newarrr);
  };
  const completTask=(id)=>{
   setTask(tasks.map((task)=>task.id===id ? {...task,isdone:!task.isdone}:task))
  }
  return (
    <div className="task-lists">
      {tasks.length !== 0 ? (
        tasks.map((element, index) => {
          return (
            <Task
              task={element}
              key={index}
              index={index}
              removeTask={removeTask}
              editTask={editTask}
              completeTask={completTask}
            />
          );
        })
      ) : (
        <h3>Add new Tasks</h3>
      )}
      <TaskForm addTask={addTask} />
    </div>
  );
};

export default TaskList;

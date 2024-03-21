"use client";
import React, { useState } from "react";

const TodoList = () => {
  const [taskArray, setTaskArray] = useState([
    { text : 'Learn HTML', completed : false },
    { text : 'Learn CSS', completed : false },
    { text : 'Learn Bootstrap', completed : false },
    { text : 'Learn Javascript', completed : false },  
  ]);
    
  const addNewTask = (e) => {
    // console.log(e.code);

    if (e.code === "Enter") {
      console.log(e.target.value);

      const obj = { text : e.target.value, completed : false}

      setTaskArray([ obj, ...taskArray ])

      e.target.value = " ";
    }
  };

  const deleteTask = (index) => {
    console.log(index);

    const temp = taskArray;
    temp.splice (index, 1);
    setTaskArray([...temp]);
  }

  const completeTask = (index) => {
    const temp = taskArray;
    temp [index].completed = true;
    setTaskArray([...temp]);
    console.log(temp);
  }

  return (
    <div>
      <div className="container py-4">
        <h1 className="display-3 fw-bold text-center">Todo List</h1>
        <div className="card shadow">
          <div className="card-header">
            <input
              onKeyDown={addNewTask}
              className="form-control border-3 border-primary"
              type="text"
            />
          </div>
          <div className="card-body">
            {
              taskArray.map( ( task, index ) => {
                return <div key={index} className="d-flex justify-content-between align-items-center p-3">
                  <p>{task.text}</p>
                  { task.completed ?
                  <span className="badge bg-success">Finished</span>
                  : <span className="badge bg-warning">Pending</span>}
                  <button onClick = { () => { deleteTask(index) } } className="btn btn-danger">Delete</button>
                  <button onClick ={ () => { completeTask(index) } } className="btn btn-success">Complete</button>
                </div>
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
}
export default TodoList;
















//Awesome Tailwind
//Acertinity UI
//Mantime.dev
//Ui mantime
//UI verse
//Relume AI
//gallelio AI
//mdb
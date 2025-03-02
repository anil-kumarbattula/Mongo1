import { useState } from "react";
import {v4 as uuidv4} from 'uuid';

export default function TodoList() {
    let [tasks, setTasks] = useState([{task: "Sample Task", id: uuidv4()}]); //intilaze with a sample task
    let [newTask, setNewTask] = useState("");

    let addNewTask = ()=>{
        setTasks((prevTasks)=>{ //callback function to update the tasks in array
            return [...prevTasks, { task:newTask, id:uuidv4()}] //add new task to the list by destructuring the prevTasks
        }) ;
        setNewTask(""); //clear the input field
    }

    let updateTodoValue = (event)=>{
        setNewTask(event.target.value); //it gives the target value of the input field and stores in newTask
    }   
    
    let deletTask = (id)=> {
        setTasks((prevTask) => tasks.filter((prevTask)=> prevTask.id !== id)); //to delete the task from the list filter is used
    };

    return (
        <>
            <input value = {newTask} placeholder="Add a Task" onChange = {updateTodoValue} />
            <button onClick={addNewTask}>Add Task</button>
            <br />
            <br />
            <hr />
            <h2>Todo List</h2>
            <ul>
                {tasks.map((todo)=>( 
                    <li key={todo.id}>
                        <span>{todo.task}</span>
                        &nbsp;&nbsp;&nbsp;
                        <button onClick={()=> deletTask(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </>
    );
}
import { element } from "prop-types";
import React,{useState} from "react";


function ToDoList(){


    const [tasks,setTask] = useState(["Eat breakfast",'Take a Shower']);
    const [newtask,setNewTask] = useState("");

    function handleInputChange(event){
        setNewTask(event.target.value)
    }

    function addTask(event){

        if (newtask.trim() !== ""){
            setTask(c => [...c,newtask]);
            setNewTask("");
        }
    }

    function DeleteTask(index){
        const updatedtask = tasks.filter((_,i) => i !== index);
        setTask(updatedtask);
    }

    function Movetaskup(event){
        if(index > 0){
            const updatedtask = [...tasks];
            [updatedtask[index],updatedtask[index-1]] = [updatedtask[index-1],updatedtask[index]];
            setTask(updatedtask);
        }
    }

    function Movetaskdown(event){
        if(index < tasks.length - 1){
            const updatedtask = [...tasks];
            [updatedtask[index],updatedtask[index+1]] = [updatedtask[index+1],updatedtask[index]];
            setTask(updatedtask);
        }
    }

    return (<>
    <div className="to-do-list">
        <h1>To-Do-List</h1>

        <div>
            <input type="text" placeholder="Enter a task" value={newtask} onChange={handleInputChange}/>
            <button className="add-button" onClick={addTask}>Add</button>
        </div>

        <ol>
            {tasks.map((task,index) => 
            <li key={index}>
                <span className="text">{task}</span>
                <div className="button-container">
                    <button className="delete-button" onClick={() => DeleteTask(index)}>Delete</button>
                    <button className="move-button" onClick={Movetaskup}>Move Up</button>
                    <button className="move-button" onClick={Movetaskdown}>Move Down</button>
                </div>
            </li>)}
        </ol>
    </div>
    
    
    </>)
}

export default ToDoList
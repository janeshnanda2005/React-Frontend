import React,{useState} from "react";


function ToDoList(){


    const [tasks,setTask] = useState(["Eat breakfast",'Take a Shower']);
    const [newtask,setNewTask] = useState("");

    function handleInputChange(event){
        setNewTask(event.target.value)
    }

    function addTask(event){

    }

    function DeleteTask(event){

    }

    function Movetaskup(event){

    }

    function Movetaskdown(event){

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
                <button className="delete-button" onClick={() => DeleteTask(index)}>Delete</button>
                <button className="up-button" onClick={Movetaskup}>Move Up</button>
                <button className="down-button" onClick={Movetaskdown}>Move Down</button>
            </li>)}
        </ol>
    </div>
    
    
    </>)
}

export default ToDoList
import { element } from 'prop-types';
import react , {useState} from 'react';

function ArrayUpdation(){

    const[foods,Setfoods] = useState(["Apple","Orange","Banana"]);
    
    
    function handleaddfood(){

        const newfood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = ""

        Setfoods([...foods,newfood]);
    }

    function handleremovefood(index){
        Setfoods((foods.filter((_,i) => i !== index)));
    }

    return(
    <>
        <div>
            <h2>List of Food</h2>
            <ul>
                {foods.map((food,index) => <li key={index}>{food}</li>)}
            </ul>
            <input type="text" id="foodInput" placeholder="Enter food name"/>
            <button onClick={handleaddfood}>add food</button>
        </div>
    
    </>)

}

export default ArrayUpdation;
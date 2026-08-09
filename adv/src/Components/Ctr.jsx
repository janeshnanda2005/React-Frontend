import React ,{useState,useEffect} from 'react';

function Mycom(){

    const[count,setCount] = useState(0);
    const[color,setColor] = useState("green")


    function addcount(){ 
        setCount(count => count+1);
    }

    function Subcount(){
        setCount(count => count-1);
    }
 
    function changecolor(){
        setColor(count => count ==="green" ? "red":"green");
    }

    useEffect(() => {
        document.title = `Count ${count} ${color}`;
    },[count,color]);

    return (<>
    
        <p style={{color:color}}>Count: {count}</p>
        <button onClick={addcount}>ADD</button>
        <button onClick={Subcount}>Subract</button><br/>
        <button onClick={changecolor}>Change color</button>
    </>)
}



export default Mycom;
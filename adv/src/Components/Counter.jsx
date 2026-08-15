// react hook - special function that allows functional components to use react features without w
// writting class components (UseState,useEffect,UseContext)

// use state is a react hook that allows the creation of a stateful version and a setter fucntion to updates its onw n values in known as react hook
// where they can be used for updation in the virtual DOM

import React,{useState} from 'react';


// function Counter(){
//     // initial state will be guess

//     const [age,setAge] = useState(0);
//     let [name,setName] = useState("Guest");
//     const [isEmployed,setIsemployed] = useState(false);

//     const updateName = () => {
//         setName("spongebob");
//     }
    
//     const incrementage = () => {
//         setAge(age + 1);
//     }

//     const employeeStatus = () =>{
//         setIsemployed(!isEmployed)
//     }

//     return (<div>
//             <p>Name:{name}</p>
//             <button onClick={updateName}>Set NAme</button>

//             <p>Age:{age}</p>
//             <button onClick={incrementage}>Age increment</button>

//             <p>Employed :{isEmployed ? "yes":"No"}</p>
//             <button onClick={employeeStatus}>Employed</button>
//     </div>)
// }

function Counter(){

    const [count,setCount] = useState(0);

    const increment = ()=>{
        setCount(count+1);
    }

    const decrement = () =>{
        setCount(count-1);
    }

    const reset = ()=>{
        setCount(0);
    }

    return (<div class="counter-container">
            <p className='count-display'>{count}</p>
            <button className = 'counter-button' onClick={increment}>Increment Button</button>
            <button className = 'counter-button' onClick={decrement}>Decrement</button>
            <button className = 'counter-button' onClick={reset}>Reset Button</button>
    </div>)
}



export default Counter;
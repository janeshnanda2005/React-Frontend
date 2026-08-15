import Header from './Components/Header.jsx'
import Card from './Components/Card.jsx'
import MovieCard from './Components/MovieCard.jsx'
import Student from './Components/Students.jsx'
import Button from './Components/Button.jsx'
import UserGreeting from './Components/UserGreeting.jsx'
import List from './Components/List.jsx'
import componenta from './Components/Componenta.jsx'
import MyCom from './Components/Ctr.jsx' 
import DigitalClock from "./Components/DigitalClock.jsx"
import SampleText from './Components/SampleText.jsx'
import ColorPicker from './Components/ColorPicker.jsx'
import MyComp from './Components/Object.jsx'
import ArrayUpdation from './Components/ArrayUpdate.jsx'
import Mycomponent from './Components/MyComponent.jsx'
import ToDoList from './Components/ToDoList.jsx'
import './App.css'
import Counter from './Components/Counter.jsx'
import react,{useState} from 'react';



// onChange is an event handler used promarly wth form elements 
// such as input area text and anther functions is known as onchange for react components
// where they are used for trigerring a particular function as the input of the value changes

// updater functions - function passed as an argument to setState() usually an arrow function where then they are used for the previous state
// takes the pending state to calculate the next state where eact [uts the updater function in a queue]
// useState(c => c+1) where this is an updater function for the module


function App() {



  // const fruits = [{id:1,name:"apple",calories:96},
  //                 {id:2,name:"orange",calories:100},
  //                 {id:3,name:"pipeapple",calories:105},
  //                 {id:4,name:"coconut",calories:150}];


  



  return (
    <>
      {/* <Student name="John" age={20} isStudent={true} />
      <Student name="Mary" age={22} isStudent={false} />
      <Student name="Alex" age={19} isStudent={true} />
      <Student/> */}

      {/* <UserGreeting islogged={true} username="Bro"/>

      { fruits.length > 0 ? <List items = {fruits} category="fruits"/> : null}  */}

      {/* <Button/> */}
      
      {/* <Counter/> */}

      {/* <SampleText/>

      <ColorPicker/>

      <MyComp/>
      
      <ArrayUpdation/>

      <Mycomponent/> */}

      {/* <ToDoList/> */}

      {/* <MyCom/> */}

      {/* <DigitalClock/> */}

      <componenta/>

    </>
  );

}

export default App;

import React,{useState} from "react";


function Mycomponent(){

    const[cars,setCars] = useState([]);
    const[caryear,SetCarYear] = useState(new Date().getFullYear());
    const[carmake,SetCarMake] = useState("");
    const[carmodel,SetCarModel] = useState("");



    function handleaddcar(){
        const newcar = {year:caryear,make:carmake,model:carmodel};

        setCars(cars => [...cars,newcar]);
    }

    function handledeletecar(index){
        setCars(cars.filter((_,i) => i !== index));

    }

    function handleyearchange(event){
        SetCarYear(event.target.value);

    }

    function handlemakechange(event){
        SetCarMake(event.target.value);

    }

    function handlemodelchange(event){
        SetCarModel(event.target.value);
    }

    function handledeletecar(index){
    setCars(cars.filter((_, i) => i !== index));
}


    return(<>
        <div>
        <h2>List of cars</h2>
        <ul>
            {cars.map((car,index) => <li key={index}>{car.year} {car.make} {car.model}</li>)}
        </ul>

        <input type = "number" value={caryear} onChange={handleyearchange}></input><br/>
        <input type = "text" value = {carmake} onChange={handlemakechange}  placeholder="Enter a Car Make"></input><br/>
        <input type = "text" value={carmodel} onChange={handlemodelchange} placeholder="Enter The Car Model"></input><br/>

        <button onClick={handleaddcar}>Add Car</button><br/>
         <button onClick={() => handledeletecar(index)}>Delete Button</button>
        </div>
    </>)

}

export default Mycomponent
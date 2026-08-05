import react,{useState} from 'react';

function MyComp(){

    const [car,Setcar] = useState({year:2024,
                                    make:"Ford",
                                    model:"Mustang"});


    function handleyearchange(event){
        Setcar(car => ({...car,year:event.target.value}));
    }

    function handlemakechange(event){
        Setcar(car => ({...car,make:event.target.value}));
    }

    function handlemodelchange(event){
        Setcar(car => ({...car,model:event.target.value}));
    }

    return (
    <>
        <div>
            <p>Your favourite car is {car.year} {car.make} {car.model}</p>

            <input type="number" value={car.year} onChange = {handleyearchange}/><br/>
            <input type="text" value={car.make} onChange = {handlemakechange} /><br/>
            <input type="text" value={car.model} onChange = {handlemodelchange}/><br/>

        </div>
    </>)
}

export default MyComp;
import ComponentB from "./Componentb";

function ComponentC(){
    return(
        <div className="box">
            <h1>Component C</h1>
            <p>Middle layer - contains Component B</p>
            <ComponentB/>
        </div>
    )
}

export default ComponentC;
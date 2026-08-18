import ComponentB from "./Componentb";

function ComponentA(){
    return(
        <div className="box">
            <h1>Component A</h1>
            <p>Outer layer - contains Component B</p>
            <ComponentB/>
        </div>
    )
}

export default ComponentA;
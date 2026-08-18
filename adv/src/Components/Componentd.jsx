import ComponentC from "./Componentc";

function ComponentD(){
    return(
        <div className="box">
            <h1>Component D</h1>
            <p>Outermost layer - contains Component C</p>
            <ComponentC/>
        </div>
    )
}

export default ComponentD;
import react,{useState} from 'react';


function ColorPicker() {


const [color,SetColor] = useState("#FFFFFF")


function handleColor(event){
    SetColor(event.target.value);
}

return (
    <>
        <div className="color-picker-container">
            <h1>Color Picker</h1>
            <div className="color-display" style={{backgroundColor: color}}>
                <p>Selected color: {color}</p>
            </div>
            <label>Select a Color:</label>
            <input type="color" value={color} onChange={handleColor}/>
        </div>
    </>
)

}

export default ColorPicker;
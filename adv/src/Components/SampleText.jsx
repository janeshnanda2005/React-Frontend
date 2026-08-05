
import react,{useState} from 'react';


function SampleText(){
    const [name,setName] = useState("Guest");

    const [text,Settext] = useState("");

    const [payment,SetPayment] = useState("");

    const [quantity,setQuantity] = useState(0);


    function handlepayment(event){
        SetPayment(event.target.value);
    }

    function handleNameChange(event){
        setName(event.target.value);
    }

    function handletext(event){
        Settext(event.target.value);
    }

    function handleQuantity(event){
        setQuantity(event.target.value);
    }


    return (
        <>
        
        <div>
        <input value={name} onChange={handleNameChange}/>
        <p>Name: {name}</p>

        <input value={quantity} onChange={handleQuantity}/>
        <p>Quantity: {quantity}</p>

        <textarea value = {text} onChange={handletext} />
        <p> comment : {text} </p>

        <select value = {payment} onChange={handlepayment}>
            <option value="">Select an option</option>
            <option value="visa">cash</option>
            <option value="MasterCard">card/credit</option>
            <option value="GiftCard">Redeem</option>
            <option value="GiftCard">Online Payment</option>
        </select>
        <p>payment :{payment}</p>

      </div>
        
        </>
    )
}
export default SampleText;
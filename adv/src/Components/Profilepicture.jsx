function Profilepicture(){
    const imageurl = './src/assets/doom.jpg';

    const handleclick = () => console.log("OUCH");

    return(<img onClick = {handleclick} src={imageurl}></img>);
}

export default Profilepicture;
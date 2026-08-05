function Button() {

    let count = 0;

    const handleclick = (e) => console.log(e);

    // const handleclick = (name) => {
    //     if(count < 3){
    //         count++;
    //         console.log(`${name} you clicked me ${count} time/s`);
    //     }
    //     else{
    //         console.log(`${name} stop clicking me!`);
    //     }
    // };

    return <button className="button" onClick={(e) => handleclick(e)}>Click me 😊</button>;
}   

export default Button;
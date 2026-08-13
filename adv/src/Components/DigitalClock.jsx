import react,{useState,useEffect} from 'react';

function DigitalClock(){
    const [time,setTime] = useState(new Date());

    useEffect(() => {
        const intervalid = setInterval(() => {
            setTime(new Date());
        },1000);

        return () => {
            clearInterval(intervalid);
        }
    },[])

    function formatTime(){
        let hours = time.getHours();
        const minutes  = time.getMinutes();
        const seconds = time.getSeconds();
        const merideim = hours >= 12 ? "PM":"AM";

        hours = hours % 12 || 12;
        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${merideim}`;
    }

    function padZero(number){
        return (number < 10 ?"0":"")+number;
    }

    return (
        <div className="clock-container">
            <class className="clock">
                <span>{formatTime()}</span>
            </class>
        </div>
    )
}

export default DigitalClock;
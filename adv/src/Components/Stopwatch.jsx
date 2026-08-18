import React,{useState,useEffect,useRef} from 'react';

function Stopwatch(){

    const [isRunning,setIsRunning] = useState(false);
    const [elapsedtime,setElapsedTime] = useState(0);
    const intervalRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() => {
        if(isRunning){
            intervalRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current);
            },10);
        }

        return () => {
            clearInterval(intervalRef.current);
        }
    },[isRunning]);

    function start(){

        setIsRunning(true)
        startTimeRef.current = Date.now() - elapsedtime;
    }

    function stop(){
        setIsRunning(false)
    }

    function reset(){
        setElapsedTime(0);
        setIsRunning(false)
    }

    function formattime(){

        let minutes = Math.floor(elapsedtime/(1000*60)%60);
        let seconds = Math.floor(elapsedtime/1000%60);
        let milliseconds = Math.floor((elapsedtime%1000)/10);
        return `${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2,'0')}:${String(milliseconds).padStart(2,'0')}`;
    }

    return (<>

        <div className="stopwatch">
            <div className="display-buttons">{formattime()}</div>
            <div className="controls">
                <button className="start-button" onClick={start}>Start</button>
                <button className="stop-button" onClick={stop}>Stop</button>
                <button className="reset-button" onClick={reset}>Reset</button>
            </div>
        </div>
    
    </>)

}

export default Stopwatch;
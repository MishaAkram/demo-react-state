import React,{ useState } from 'react';
// eslint-disable-next-line
import './App.css';


function Room(){
    let [isLit,setLit] = useState(true); 
    function updateLit(){
        console.log("button clicked");
        setLit(!isLit);
    }
    return (
    <div>
        This is room {isLit? "lit":"dark"}
        <br/>
        <button onClick ={updateLit}> Toggle Light</button>
    </div>
    );
        
}

export default Room;
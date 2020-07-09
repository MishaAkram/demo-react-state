import React,{ useState } from 'react';
import './Room.css';


function Room(){
    let [isLit,setLit] = useState(true); 
   // let [age , setAge] = useState(20);
    let [temp,setTemp] = useState(72);
    // function updateLit(){
    //     console.log("button clicked");
    //     setLit(!isLit);
    // }
    return (
    <div className={`room ${isLit? "lit": "dark"}`}>
        This room is {isLit? "lit":"dark"}
          <br/>
              <button onClick ={ () =>{
                console.log("light is lit");
                setLit(true)
              }}> lit Light</button>
          <br/>
          <button onClick ={ () =>{
                console.log("light is off");
                setLit(false);
              }}> dark </button>
     
       <br/>
        Temp={temp}
        <br/>
            <button onClick ={ () =>{
              console.log("Temperature increased");
              setTemp(++temp);

            }
                }> + </button>
            <button onClick = {
              () =>{
                console.log("Temperature Decreased");
                setTemp(--temp);
              }
            }>-</button>
    </div>
    );
        
}

export default Room;
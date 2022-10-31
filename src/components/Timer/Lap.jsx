import React from "react";

function Lap(props){
    let item = props.item
    return(
        <div className="lap">
        <div className="lapN">{item.nom}</div>      
         <div className="lapT">{item.time}</div>    
            </div>
    )
}
export default Lap
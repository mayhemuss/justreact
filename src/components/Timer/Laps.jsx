import React from "react";
import Lap from "./Lap";

function Laps(props) {
    let lap = props.lap
    if (lap.length == 0) {
        return (
            <div className="laps"></div>
        )
    } else {
        return (
            <div className="laps">
                {lap.map(item => (
                    <Lap item={item} key={item.nom}/>
                ))}
            </div>
        )
    }

}

export default Laps
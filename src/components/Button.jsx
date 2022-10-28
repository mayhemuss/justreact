import React from "react";

function Button (props){

  return(
    <button onClick={props.callback} className={"Buttons " + props.style}>
      {props.children}
    </button>
  )
}
export default Button
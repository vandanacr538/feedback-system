import React from "react";

const FeedbackItems=(props)=>{
    return(
        <li>
            <span>{props.name}  {props.rating}  </span>
            <button>Delete</button>
            <button>Edit</button>
        </li>
    )
}

export default FeedbackItems;
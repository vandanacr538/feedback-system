import React from "react";

const OverallRating=(props)=>{
    const {"1": one, "2":two,"3":three,"4":four,"5":five}=props.ratings;
    return(
        <div>
            <h3>Overall Rating</h3>
            <div>*  {one}</div>
            <div>**  {two}</div>
            <div>*** {three}</div>
            <div>**** {four}</div>
            <div>***** {five}</div>
        </div>
    )
}

export default OverallRating;
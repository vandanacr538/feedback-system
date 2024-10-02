import React from "react";
import Card from "../UI/Card";
import "./OverallRating.css";

const OverallRating=(props)=>{
    const {"1": one, "2":two,"3":three,"4":four,"5":five}=props.ratings;
    return(
        <Card className="overall-rating">
            <h3>Overall Rating</h3>
            <Card className="rating-stars">
                <div>
                    <span>*</span>  
                    {one}
                </div>
                <div><span>**</span>  {two}</div>
                <div><span>***</span> {three}</div>
                <div><span>****</span> {four}</div>
                <div><span>*****</span> {five}</div>
            </Card>
        </Card>
    )
}

export default OverallRating;
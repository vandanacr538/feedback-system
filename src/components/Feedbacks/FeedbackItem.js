import React from "react";
import Card from "../UI/Card";
import "./FeedbackItem.css";

const FeedbackItems=(props)=>{
    const {feedback}=props;
    return(
        <Card className="feedback-item">
            <li className="feedback-item__description">
                <div>
                    <span className="feedback-item__name">{feedback.name}</span>
                    <span className="feedback-rating">{feedback.rating}</span>
                </div>
                <div className="feedback-btns">
                    <button onClick={()=>props.onDeleteFeedback(feedback.id)}>Delete</button>
                    <button onClick={()=>props.onEditFeedback(feedback)}>Edit</button>
                </div>
            </li>
        </Card>
    )
}

export default FeedbackItems;
import React from "react";

const FeedbackItems=(props)=>{
    const {feedback}=props;
    return(
        <li>
            <span>{feedback.name}  {feedback.rating}  </span>
            <button onClick={()=>props.onDeleteFeedback(feedback.id)}>Delete</button>
            <button onClick={()=>props.onEditFeedback(feedback)}>Edit</button>
        </li>
    )
}

export default FeedbackItems;
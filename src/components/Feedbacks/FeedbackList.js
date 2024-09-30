import React from "react";
import FeedbackItems from "./FeedbackItem";

const FeedbackList=(props)=>{
    return(
        <React.Fragment>
            <h3>All Feedbacks</h3>
            <ul>
                {props.feedbacks.map((feedback)=>{
                    return (
                        <FeedbackItems 
                            key={feedback.id}
                            feedback={feedback}
                            onDeleteFeedback={props.onDeleteFeedback}
                            onEditFeedback={props.onEditFeedback}
                        />
                    )
                })}
            </ul>
        </React.Fragment>
    )
}

export default FeedbackList;
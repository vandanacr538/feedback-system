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
                            name={feedback.name}
                            rating={feedback.rating}
                        />
                    )
                })}
            </ul>
        </React.Fragment>
    )
}

export default FeedbackList;
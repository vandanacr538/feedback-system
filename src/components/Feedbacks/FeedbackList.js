import React from "react";
import FeedbackItems from "./FeedbackItem";
import Card from "../UI/Card";
import "./FeedbackList.css";

const FeedbackList=(props)=>{
    return(
        <Card className="feedback-list">
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
        </Card>
    )
}

export default FeedbackList;
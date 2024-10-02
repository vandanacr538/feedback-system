import React from "react";
import OverallRating from "../OverallRatings/OverallRatings";
import FeedBackForm from "../FeedBackForm/FeedBackForm";
import "./MainSection.css";

const MainSection=(props)=>{
    const {ratings, onSaveFeedback, editFeedback}=props;
    return (
        <React.Fragment>
           <div className="main-section">
            <OverallRating ratings={ratings}/>
            <FeedBackForm onSaveFeedback={onSaveFeedback}
                editFeedback={editFeedback}/>
           </div>
        </React.Fragment>
    )
}

export default MainSection;
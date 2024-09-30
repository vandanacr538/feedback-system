import React, { useState } from "react";
import "./FeedBackForm.css";

const FeedBackForm = (props) => {
  const [enteredName, setEnteredName]=useState("");
  const [enteredRating, setEnteredRating]=useState("1");  

  const nameChangeHandler=(event)=>{
    setEnteredName(event.target.value);
  }
  const ratingChangeHandler=(event)=>{
    setEnteredRating(event.target.value);
  }
  const formSubmitHandler=(event)=>{
    event.preventDefault();
    const feedBackData={
        id: Math.random().toString(),
        name: enteredName,
        rating: enteredRating
    }
    props.onSaveFeedback(feedBackData);
    setEnteredName("");
    setEnteredRating("");
  }  
  return (
    <React.Fragment>
      <form onSubmit={formSubmitHandler}>
        <div className="new-feedback_controls">
          <div className="new-feedback_control">
            <label htmlFor="name">Enter Your Name:</label>
            <input type="text" id="name" value={enteredName} onChange={nameChangeHandler}/>
          </div>
          <div className="new-feedback_control">
            <label htmlFor="rating">Choose Rating:</label>
            <select id="rating" value={enteredRating} onChange={ratingChangeHandler}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
          </div>
        </div>
        <div className="new-feedback_actions">
          <button type="submit">SUBMIT</button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default FeedBackForm;

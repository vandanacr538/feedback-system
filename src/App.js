import React, { useState } from 'react';
import FeedBackForm from './components/FeedBackForm/FeedBackForm';
import FeedbackList from './components/Feedbacks/FeedbackList';

function App() {
  const [feedbacks, setFeedbacks]=useState([
    {id:"1", name: "Albert", rating: "4"},
    {id:"2", name: "Ram", rating: "3"}
  ]);
  const saveFeedbackHandler=(feedback)=>{
    setFeedbacks((prevFeedback)=>{
      return [...prevFeedback, feedback];
    })
  }

  return (
    <React.Fragment>
      <h1>Feedback System</h1>
      <FeedBackForm onSaveFeedback={saveFeedbackHandler}/>
      <FeedbackList feedbacks={feedbacks}/>
    </React.Fragment>
  );
}

export default App;

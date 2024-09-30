import React, { useEffect, useState } from 'react';
import FeedBackForm from './components/FeedBackForm/FeedBackForm';
import FeedbackList from './components/Feedbacks/FeedbackList';
import OverallRating from './components/OverallRatings/OverallRatings';

function App() {
  const [feedbacks, setFeedbacks]=useState([
    {id:"1", name: "Albert", rating: "4"},
    {id:"2", name: "Ram", rating: "3"}
  ]);
  const [ratings, setRatings]=useState({"1":0, "2":0, "3":0, "4":0, "5":0});  

  useEffect(()=>{
    const countObj={"1":0, "2":0, "3":0, "4":0, "5":0};
    for(let key of feedbacks){
      if(key.rating>0){
        countObj[key.rating]=countObj[key.rating]+1;
      }
    }
    setRatings(countObj);
  }, [feedbacks]);

  const saveFeedbackHandler=(feedback)=>{
    setFeedbacks((prevFeedback)=>{
      return [...prevFeedback, feedback];
    })
    if(feedback.rating>0){
      setRatings((prevRating)=>{
        return ({...prevRating, [feedback.rating]:prevRating[feedback.rating]+1});
      })
    }
  }

  return (
    <React.Fragment>
      <h1>Feedback System</h1>
      <OverallRating ratings={ratings}/>
      <FeedBackForm onSaveFeedback={saveFeedbackHandler}/>
      <FeedbackList feedbacks={feedbacks}/>
    </React.Fragment>
  );
}

export default App;

import React, { useEffect, useState } from 'react';
import FeedbackList from './components/Feedbacks/FeedbackList';
import MainSection from './components/MainSection/MainSection';

function App() {
  const [feedbacks, setFeedbacks]=useState([
    {id:"1", name: "Albert", rating: "4"},
    {id:"2", name: "Ram", rating: "3"}
  ]);
  const [ratings, setRatings]=useState({"1":0, "2":0, "3":0, "4":0, "5":0});  
  const [editFeedback, setEditFeedback] = useState("");

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
  const updateFeedbackHandler=(updatedData)=>{
    setFeedbacks((prevFeedback)=>prevFeedback.map((feedback)=>{
      if(updatedData.id===feedback.id){
        return {...feedback, ...updatedData};
      }
      return feedback;
    }))
    if(updatedData.rating>0){
      setRatings((prevRating)=>{
        return ({...prevRating, [updatedData.rating]:prevRating[updatedData.rating]+1});
      })
    }
    setEditFeedback("");
  }
  const deleteFeedbackHandler=(id)=>{
    const updatedFeedbacks=feedbacks.filter((feedback)=>feedback.id!==id);
    setFeedbacks(updatedFeedbacks);
  } 
  const editFeedbackHandler=(feedbackToEdit)=>{
    setEditFeedback(feedbackToEdit);
    console.log(feedbackToEdit)
  }


  return (
    <React.Fragment>
      <h1>Feedback System</h1>
      <MainSection ratings={ratings} onSaveFeedback={(editFeedback) ? updateFeedbackHandler: saveFeedbackHandler}
                editFeedback={editFeedback}/>
      <FeedbackList feedbacks={feedbacks} 
        onDeleteFeedback={deleteFeedbackHandler}
        onEditFeedback={editFeedbackHandler}
      />
    </React.Fragment>
  );
}

export default App;

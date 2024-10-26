import React , { useState } from "react";


export  function GoalInput(props){

    const [enteredGoalText,setenteredGoalText]=useState('');
    
    async function goalSubmithandler(event){
        event.preventDefault();
        if(enteredGoalText.trim().length===0){
            alert('please enter a goal to submit')
            return;
        }
         alert('you entered a valid goal-'+enteredGoalText );
         const jsonData={
            text: enteredGoalText
         };
    
         try {
            const response = await fetch("http://localhost:1500/goals", {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(jsonData)
            });
      
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
      
           // const data = await response.json();
            //return data;
          } catch (error) {
            throw new Error(error);
          }
        setenteredGoalText('');
        window.location.reload();
       
    }

    function updateGoalTextHandler(event){
        setenteredGoalText(event.target.value);
    }

    return (
        <div className='goal-text'>
        <form className="goal-form" onSubmit={goalSubmithandler}>
        <h3>Welcome to Goals page !</h3>
        <textarea id='goal-text' name='goal-text' rows="4" placeholder='Submit your goal here'
         value={enteredGoalText} onChange={updateGoalTextHandler}></textarea><br></br>
        <button id="save-goal" name='save-goal'>Save</button>
        </form>
        </div>
    );
}
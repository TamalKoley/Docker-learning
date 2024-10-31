import "./../styles/BodyComponents.css";
import { useEffect,useState } from "react";
import { GoalItems } from "./goalitems";


export function BodyComponent (){

  const [goals,getgoals]=useState([]);
  const [enteredGoalText,setenteredGoalText]=useState('');
  let goalitem;

  useEffect(()=>{
    fecthData();
  },[]);

const fecthData=async()=>{
  const goaljson=await fetch("http://localhost:80/goals")

  const goaldata= await goaljson.json();
  getgoals(goaldata.Goals)
  //getgoals(goaldata.Goals);
  
  //goaldata.Goals.map((goal)=>{
    //console.log(goal.text)
  //})
  //console.log(typeof(goals))
  //console.log(goals)
  //console.log(goals);
}

async function  goalSubmithandler(event){
  event.preventDefault();
  if(enteredGoalText.trim().length==0)
  {
    alert('Please enter a valid goal to submit')
    return
  }
  alert('You have entered a valid goal')
  const goaljson={
    text:enteredGoalText
  }

  try{
    const response= await fetch("http://localhost:80/goals",{
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json' 
      },
      body : JSON.stringify(goaljson)
    });
    if(!response.ok)
    {
      throw new Error ("the response from network was not ok");
    }
  }catch(err)
  {
    throw new Error(err)
  }
  setenteredGoalText('');
  window.location.reload();

}

function updateGoaltextchange(event){
  setenteredGoalText(event.target.value)
}

if (goals.length==0){
  return (
    <section id='goal-input'>
    
    <form id="goal-form">
      <label htmlFor='text'>Enter your Goal</label>
     <textarea rows="4" cols="50" placeholder="Plase enter your goal here ..."></textarea>
      <button>Add Goal</button>
    </form>
</section>

)
}
else{

    return (
        <section id='goal-input'>
        
        <form id="goal-form" onSubmit={goalSubmithandler}>
          <label htmlFor='text'>Enter your Goal</label>
         <textarea rows="4" cols="50" value={enteredGoalText} placeholder="Plase enter your goal here ..."
         onChange={updateGoaltextchange}></textarea>
          <button>Add Goal</button>
        </form>
        <div>
          {goals.map((goal)=>(
            <GoalItems id={goal.text} resobj={goal}/>
          ))}
        </div>
    </section>

    )
  }
};
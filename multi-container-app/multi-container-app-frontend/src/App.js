
import './App.css';
import { GoalInput } from './components/goals/goalInput';
import { useState,useEffect } from 'react';
import { CourseGoal } from './components/goals/coursegoal';


function App() {

  const [getGoals,setLoadedGoals]=useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function fetchData() {
      setIsLoading(true);

      try {
        const response = await fetch('http://localhost:1500/goals');

        const resData = await response.json();

        if (!response.ok) {
          throw new Error(resData.message || 'Fetching the goals failed.');
        }

        setLoadedGoals(resData.goal);
      } catch (err) {
        console.log(err)
        
      }
      setIsLoading(false);
    }

    fetchData();
  }, []);


  return (
    <div className="App">
      <header className="App-header">
       <GoalInput/>  
       {!isLoading &&(
       <CourseGoal goal={getGoals} />
      )}
      </header>
    </div>
  );
}
export default App;

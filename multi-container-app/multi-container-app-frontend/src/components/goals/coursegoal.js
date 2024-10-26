import { Goalitem } from "./goalitem"


export  function CourseGoal(props){


    return(
            <div className="goal-list">
                <ol>
                   { props.goal.map((goal)=>(
                        <Goalitem key={goal.id} id={goal.id} text={goal.text} />
                   ))

                   }
                </ol>
            </div>
    )
}
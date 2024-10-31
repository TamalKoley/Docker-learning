

export function GoalItems (props){
    const {resobj}=props;

    return(
        <ul>
            {
                
                    <li>{resobj.text}</li>
                    
                
            }
        </ul>
    )
}
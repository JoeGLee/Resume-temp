import React, {Component} from "react";

class WorkExpDisplay extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="workExpDisplayContainer">
                {this.props.workExpInfoArr.map((workExpInfo) => {
                    return(
                        <div key={workExpInfo.key} className="workExpDisplay">
                            <p>Position: {workExpInfo.position}</p>
                            <p>Company: {workExpInfo.company}</p>
                            <p>Location: {workExpInfo.location}</p>
                            <p>Years at Position: {workExpInfo.datesWorked}</p>
                            <button id={workExpInfo.key} onClick={this.props.editButton}>edit</button>
                            <button id={workExpInfo.key} onClick={this.props.deleteButton}>Delete</button>
                            
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default WorkExpDisplay;
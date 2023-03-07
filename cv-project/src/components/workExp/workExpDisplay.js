import React, {Component} from "react";

class WorkExpDisplay extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="workExpDisplayContainer">
                <h1 className="workExpTitle"> Work Experience</h1>
                {this.props.workExpInfoArr.map((workExpInfo) => {
                    if(this.props.togglePreview === true){
                        return(
                            <div key={workExpInfo.key} className="workExpDisplay">
                                <p>Position: {workExpInfo.position}</p>
                                <p>Company: {workExpInfo.company}</p>
                                <p>Location: {workExpInfo.location}</p>
                                <p>Job Description: {workExpInfo.jobDescription}</p>
                                <p>Years at Position: {workExpInfo.datesWorked}</p>
                            </div>
                        )
                    }
                    else if(workExpInfo.edit === true){
                        return(
                        <form  key={workExpInfo.key} className = "workExpForm" onChange={this.onFormChange}>
                                <label htmlFor="position">Position: </label>
                                <input type="text" id="position"/>
                                <label htmlFor="company">Company: </label>
                                <input type="text" id="company"/>
                                <label htmlFor="location">Location: </label>
                                <input type="text" id="location"/>
                                <label htmlFor="jobDescription">Job Description: </label>
                                <input type="text" id="jobDescription"/>
                                <label htmlFor="datesWorked">Years at Position: </label>
                                <input type="text" id="datesWorked"/>
                                <button id={workExpInfo.key} onClick={this.props.addEdited}>add</button>
                            </form>
                        )
                    }// adjust addInfo
                    else{
                        return(
                            <div key={workExpInfo.key} className="workExpDisplay">
                                <p>Position: {workExpInfo.position}</p>
                                <p>Company: {workExpInfo.company}</p>
                                <p>Location: {workExpInfo.location}</p>
                                <p>Job Description: {workExpInfo.jobDescription}</p>
                                <p>Years at Position: {workExpInfo.datesWorked}</p>
                                <button id={workExpInfo.key} onClick={this.props.editButton}>edit</button>
                                <button id={workExpInfo.key} onClick={this.props.deleteButton}>Delete</button>
                                
                            </div>
                        )
                    }
                })}
            </div>
        )
    }
}

export default WorkExpDisplay;
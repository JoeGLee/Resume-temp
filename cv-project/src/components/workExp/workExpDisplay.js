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
                                <p className="position"><b>Position:</b> {workExpInfo.position}</p>
                                <p className="company">Company: {workExpInfo.company}</p>
                                <p className="location">Location: {workExpInfo.location}</p>
                                <p className="datesWorked">Years at Position: {workExpInfo.datesWorked}</p>
                                <p className="jobDescription">Job Description: <p>{workExpInfo.jobDescription}</p> </p>
                            </div>
                        )
                    }
                    else if(workExpInfo.edit === true){
                        return(
                            <form className = "workExpForm" onChange={this.onFormChange}>
                            <div className="position">  
                                <label htmlFor="position">Position: </label>
                                <input type="text" id="position" placeholder=" "/>
                            </div>
                            <div className="company"> 
                                <label htmlFor="company">Company: </label>
                                <input type="text" id="company" placeholder=" "/>
                            </div>
                            <div className="location">
                                <label htmlFor="location">Location: </label>
                                <input type="text" id="location" placeholder=" "/>
                            </div>
                            <div className="datesWorked">
                                <label htmlFor="datesWorked">Years: </label>
                                <input type="text" id="datesWorked" placeholder="Start - End Date"/>
                            </div>
                            <div className="jobDescription">
                                <label htmlFor="jobDescription">Job Description: </label>
                                <textarea type="text" id="jobDescription"/>
                            </div>
                                
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
                                <p>Years at Position: {workExpInfo.datesWorked}</p>
                                <p>Job Description: {workExpInfo.jobDescription}</p>
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
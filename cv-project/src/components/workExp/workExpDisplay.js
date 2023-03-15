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
                                <p className="position"><b>Position:</b>  {workExpInfo.position}</p>
                                <p className="company"><b>Company:</b>  {workExpInfo.company}</p>
                                <p className="location"><b>Location:</b>  {workExpInfo.location}</p>
                                <p className="datesWorked"><b>Years at Position:</b>  {workExpInfo.datesWorked}</p>
                                <div className="jobDescription">
                                    <p className="jobDescriptionTitle"><b>Job Description:</b></p>
                                    <p className="jobDescriptionList">{workExpInfo.jobDescription}</p>
                                </div> 
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
                                 <p className="position"><b>Position:</b>  {workExpInfo.position}</p>
                                <p className="company"><b>Company:</b>  {workExpInfo.company}</p>
                                <p className="location"><b>Location:</b>  {workExpInfo.location}</p>
                                <p className="datesWorked"><b>Years at Position:</b>  {workExpInfo.datesWorked}</p>
                                <div className="jobDescription">
                                    <p className="jobDescriptionTitle"><b>Job Description:</b></p>
                                    <p className="jobDescriptionList">{workExpInfo.jobDescription}</p>
                                </div> 
                                <button id={workExpInfo.key} onClick={this.props.editButton}>edit</button>
                                <button id={workExpInfo.key} onClick={this.props.deleteButton} className="deleteButton">Delete</button>
                                
                            </div>
                        )
                    }
                })}
            </div>
        )
    }
}

export default WorkExpDisplay;
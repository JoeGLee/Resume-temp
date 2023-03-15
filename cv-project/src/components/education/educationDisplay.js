import React, {Component} from "react";

class EducationDisplay extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="EducationDisplayContainer">
                <h1 className="educationDisplayTitle">Education</h1> 
                {this.props.educationInfoArr.map((educationInfo) => {

                    if(this.props.togglePreview === true)
                    {
                        return(
                            <div key={educationInfo.key} className="educationDisplay">
                                <p><b>School:</b> {educationInfo.school}</p>
                                <p><b>Degree:</b> {educationInfo.degree}</p>
                                <p><b>GPA:</b> {educationInfo.GPA}</p>
                                <p><b>Years At School:</b> {educationInfo.date}</p>
                            </div>
                        )
                    }

                    else if(educationInfo.edit === true){
                        return(
                        <form key={educationInfo.key} className = "educationForm" >
                            <div className="school">
                                <label htmlFor="school">School: </label>
                                <input type="text" id="school"/>
                            </div>
                            <div className="degree">
                                <label htmlFor="degree">Degree: </label>
                                <input type="text" id="degree"/>
                            </div>
                            <div className="GPA">
                                <label htmlFor="GPA">GPA: </label>
                                <input type="text" id="GPA"/>
                            </div>
                            <div className="date">
                                <label htmlFor="date">Years at School: </label>
                                <input type="text" id="date"/>
                            </div>
                                <button id={educationInfo.key} onClick={this.props.addEdited}>add</button>
                            </form>
                        )
                    }// adjust addInfo
                    else{
                        return(
                            <div key={educationInfo.key} className="educationDisplay">
                                 <p><b>School:</b> {educationInfo.school}</p>
                                <p><b>Degree:</b> {educationInfo.degree}</p>
                                <p><b>GPA:</b> {educationInfo.GPA}</p>
                                <p><b>Years At School:</b> {educationInfo.date}</p>
                                <button id={educationInfo.key} onClick={this.props.editButton}>edit</button>
                                <button id={educationInfo.key} onClick={this.props.deleteButton} className="deleteButton">Delete</button>
                            </div>
                        )
                    }
                })}
            </div>
        )
    }
}

export default EducationDisplay;
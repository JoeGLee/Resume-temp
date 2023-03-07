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
                            <div key={educationInfo.key} className="EducationDisplay">
                                <p>School: {educationInfo.school}</p>
                                <p>Degree: {educationInfo.degree}</p>
                                <p>GPA: {educationInfo.GPA}</p>
                                <p>Years At School: {educationInfo.date}</p>
                            </div>
                        )
                    }

                    else if(educationInfo.edit === true){
                        return(
                        <form key={educationInfo.key} className = "educationForm" >
                                <label htmlFor="school">School: </label>
                                <input type="text" id="school"/>
                                <label htmlFor="degree">Degree: </label>
                                <input type="text" id="degree"/>
                                <label htmlFor="GPA">GPA: </label>
                                <input type="text" id="GPA"/>
                                <label htmlFor="date">Years at School:</label>
                                <input type="text" id="date"/>
                                <button id={educationInfo.key} onClick={this.props.addEdited}>add</button>
                            </form>
                        )
                    }// adjust addInfo
                    else{
                        return(
                            <div key={educationInfo.key} className="EducationDisplay">
                                <p>School: {educationInfo.school}</p>
                                <p>Degree: {educationInfo.degree}</p>
                                <p>GPA: {educationInfo.GPA}</p>
                                <p>Years At School: {educationInfo.date}</p>
                                <button id={educationInfo.key} onClick={this.props.editButton}>edit</button>
                                <button id={educationInfo.key} onClick={this.props.deleteButton}>Delete</button>
                            </div>
                        )
                    }
                })}
            </div>
        )
    }
}

export default EducationDisplay;
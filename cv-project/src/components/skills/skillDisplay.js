import React, {Component} from "react";

class SkillDisplay extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="skillDisplay">
                <h1 className="skillDisplayTitle">Skills</h1>
                <div className="skillDisplayContainer">
                {this.props.skillInfoArr.map((skillInfo) => {
                    if(this.props.togglePreview === true){
                        return(
                            <div key={skillInfo.key} className="skillDisplay">
                                <p>{skillInfo.skill}</p>
                            </div>
                        )
                    }
                    else if(skillInfo.edit === true){
                        return(
                        <form key={skillInfo.key} className = "skillForm" onChange={this.onFormChange}>
                                <label htmlFor="skill">Skill: </label>
                                <input type="text" id="skill"/>
                                <button id={skillInfo.key} onClick={this.props.addEdited}>add</button>
                            </form>
                        )
                    }// adjust addInfo
                    else{
                        return(
                            <div key={skillInfo.key} className="skillDisplay">
                                <p>{skillInfo.skill}</p>
                                <button id={skillInfo.key} onClick={this.props.editButton}>edit</button>
                                <button id={skillInfo.key} onClick={this.props.deleteButton}>Delete</button>
                            </div>
                        )
                    }
                })}
                </div>
            </div>
        )
    }
}

export default SkillDisplay;
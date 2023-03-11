import React, { Component } from 'react';
import PersonalForm from './personal/personalForm.js';
import WorkExpForm from './workExp/workExpForm.js';
import EducationForm from './education/educationForm.js';
import SkillForm from './skills/skillForm.js';

class OverView extends Component{
  constructor(props){
    super(props);

    this.state = {
        previewToggle: false,
        buttonText: "Overview",
    }

  }

  buttonClicked = () =>{

        if(this.state.previewToggle === false)
        {
            this.setState({
                previewToggle: true,
                buttonText: "Preview"
            })
        }   

        else{
            this.setState({
                previewToggle: false,
                buttonText: "Overview"
            })
        }
  }




  render(){

    if(this.state.previewToggle === false){
     return(
        <div className='display'>
            <PersonalForm />
            <WorkExpForm />
            <EducationForm />
            <SkillForm/>
            <button onClick={this.buttonClicked}>{this.state.buttonText}</button>
        </div>
        )
    }

    else{
        return(
            <div className='display'>
                <PersonalForm togglePreview={this.state.previewToggle}/>
                <WorkExpForm togglePreview={this.state.previewToggle}/>
                <EducationForm togglePreview={this.state.previewToggle}/>
                <SkillForm togglePreview={this.state.previewToggle}/>
                <button onClick={this.buttonClicked}>{this.state.buttonText}</button>
            </div>
            )
    }
    
    
  }
}

export default OverView;

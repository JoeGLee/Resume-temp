import React, {Component} from "react";
import uniqid from "uniqid";
import SkillDisplay from "./skillDisplay";

class SkillForm extends Component{
    constructor(props){
        super(props);

        this.state = {
            skillInfo:{
                skill: '',
                key: uniqid(),
                edit: true,
            },
            skillInfoArr : [],
        }
    }

    onFormChange = () =>{
        this.setState({
            skillInfo:{
                skill: document.getElementById("skill").value,
                key: this.state.skillInfo.key,
                edit: false,
            },
        })

    }// takes info when the form changes and updates the skillInfo state

    addInfo = (e) =>{
        e.preventDefault();

        this.setState({
            skillInfoArr: this.state.skillInfoArr.concat(this.state.skillInfo),

            skillInfo:{
                skill: '',
                key: uniqid(),
                edit: true,
            },

        })   
      
    }// adds skillInfo to an array

    delete = (e) =>{
        this.setState({
            skillInfoArr: this.state.skillInfoArr.filter((skillInfo)=>{
                return(
                    skillInfo.key !== e.target.id
                )
            }),
        }) 
    }//filters through array and sets skillInfoArr with new array that does not unique key of the deleted object

    edit = (e) =>{

       const tempArr = this.state.skillInfoArr.filter((skillInfo)=>{
            return(
                skillInfo.key !== e.target.id
            );
        })

        const holder = this.state.skillInfoArr.filter((skillInfo)=>{
            return(
                skillInfo.key === e.target.id
            );
        })

        const index = this.state.skillInfoArr.findIndex(skillInfo => skillInfo.key === holder[0].key);

        holder[0].edit = true;

        tempArr.splice(index,0 , holder[0]);
        
        this.setState({
            skillInfoArr: tempArr
        })
        
    }// uses filter method to separate the skillInfoArr into two different arrays than sets skillInfo.edit to true and merges two arrays

    addEdited = (e) =>{

        e.preventDefault();
        
        const tempArr = this.state.skillInfoArr.filter((skillInfo)=>{
            return(
                skillInfo.key !== e.target.id
            );
        })

        const holder = this.state.skillInfoArr.filter((skillInfo)=>{
            return(
                skillInfo.key === e.target.id
            );
        })

        const index = this.state.skillInfoArr.findIndex(skillInfo => skillInfo.key === holder[0].key);

        holder[0].skill = document.getElementById("skill").value;
        holder[0].key = e.target.id;
        holder[0].edit = false;
        tempArr.splice(index,0 , holder[0]);
        
        this.setState({
            skillInfoArr: tempArr
        })
    }


    render(){

        const skillForm = <form className = "SkillForm" onChange={this.onFormChange}>
                                <label htmlFor="skill">Skill: </label>
                                <input type="text" id="skill"/>
                                <button onClick={this.addInfo}>add</button>
                        </form>


        if(this.props.togglePreview === true){
            return(
                <SkillDisplay togglePreview={this.props.togglePreview} skillInfoArr={this.state.skillInfoArr} addEdited={this.addEdited} deleteButton={this.delete} editButton={this.edit}/>
            )
        }

        else if(this.state.skillInfoArr.length === 0){
            return(
                <div>
                   {skillForm}
                </div>
            )
        }

 

        else{ 
                return(
            <div>
                <SkillDisplay skillInfoArr={this.state.skillInfoArr} addEdited={this.addEdited} deleteButton={this.delete} editButton={this.edit}/>
                {skillForm}
            </div>
            )
        }
          
 
        //logic should be in display
    }


}

export default SkillForm;
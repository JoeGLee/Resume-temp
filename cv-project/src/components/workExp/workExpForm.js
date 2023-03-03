import React, {Component} from "react";
import uniqid from "uniqid";
import WorkExpDisplay from "./workExpDisplay";

class WorkExpForm extends Component{
    constructor(props){
        super(props);

        this.state = {
            workExpInfo:{
                position: '',
                company: '',
                location: '',
                datesWorked: '',
                key: uniqid(),
                edit: true,
            },
            workExpInfoArr : [],
        }
    }

    onFormChange = () =>{
        this.setState({
            workExpInfo:{
                position: document.getElementById("position").value,
                company: document.getElementById("company").value,
                location: document.getElementById("location").value,
                datesWorked: document.getElementById("datesWorked").value,
                key: this.state.workExpInfo.key,
                edit: false,
            },
        })
    }// takes info when the form changes and updates the workExpInfo state

    addInfo = (e) =>{
        e.preventDefault();
        this.setState({
            workExpInfoArr: this.state.workExpInfoArr.concat(this.state.workExpInfo),

            workExpInfo:{
                position: '',
                company: '',
                location: '',
                datesWorked: '',
                key: uniqid(),
                edit: true,
            },

        })   
    }// adds workExpInfo to an array

    delete = (e) =>{
        this.setState({
            workExpInfoArr: this.state.workExpInfoArr.filter((workExpInfo)=>{
                return(
                    workExpInfo.key !== e.target.id
                )
            }),
        }) 
    }//filters through array and sets workExpInfoArr with new array that does not unique key of the deleted object

    edit = (e) =>{
        
          this.state.workExpInfoArr.forEach((workExpInfo) =>{
                if(workExpInfo.key === e.target.id){
                    console.log(workExpInfo)
                    workExpInfo.edit = true;
                    console.log(workExpInfo)
                }
            })
    }//when edit button is pressed filters through workExpInfoArr and sets workExpInfo.edit that has the corresponding key to true 

    doesItNeedEdit = () =>{
       
      let needsEdit = this.state.workExpInfoArr.find((workExpInfo) => workExpInfo.edit === true)

        if(needsEdit === undefined){
            return false;
        }
        else{
            return true;
        }
    }//if true write a function that filters out the function that needs editing and creates a separate array that can be displayed as a form 

    render(){

        const workExp = <form className = "workExpForm" onChange={this.onFormChange}>
                                <label htmlFor="position">Position: </label>
                                <input type="text" id="position"/>
                                <label htmlFor="company">Company: </label>
                                <input type="text" id="company"/>
                                <label htmlFor="location">Location: </label>
                                <input type="text" id="location"/>
                                <label htmlFor="datesWorked">Years at Position: </label>
                                <input type="text" id="datesWorked"/>
                                <button onClick={this.addInfo}>add</button>
                        </form>



        if(this.state.workExpInfoArr.length === 0){
            return(
                <div>
                   {workExp}
                </div>
            )
        }

        else{
            if(this.doesItNeedEdit()){

            }

            else{ 
                 return(
                <div>
                    <WorkExpDisplay workExpInfoArr={this.state.workExpInfoArr} deleteButton={this.delete} editButton={this.edit}/>
                    {workExp}
                </div>
                )
            }
          
 
        }//logic should be in display
    }


}

export default WorkExpForm;
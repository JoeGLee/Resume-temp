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

       const tempArr = this.state.workExpInfoArr.filter((workExpInfo)=>{
            return(
                workExpInfo.key !== e.target.id
            );
        })

        const holder = this.state.workExpInfoArr.filter((workExpInfo)=>{
            return(
                workExpInfo.key === e.target.id
            );
        })

        const index = this.state.workExpInfoArr.findIndex(workExpInfo => workExpInfo.key === holder[0].key);

        holder[0].edit = true;

        tempArr.splice(index,0 , holder[0]);
        
        this.setState({
            workExpInfoArr: tempArr
        })
        
        console.log(this.state.workExpInfoArr)
    
    }// uses filter method to separate the workExpInfoArr into two different arrays than sets workExpInfo.edit to true and merges two arrays



    render(){

        const workExpForm = <form className = "workExpForm" onChange={this.onFormChange}>
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
                   {workExpForm}
                </div>
            )
        }

 

        else{ 
                return(
            <div>
                <WorkExpDisplay workExpInfoArr={this.state.workExpInfoArr} deleteButton={this.delete} workExpForm={workExpForm} editButton={this.edit}/>
                {workExpForm}
            </div>
            )
        }
          
 
        //logic should be in display
    }


}

export default WorkExpForm;
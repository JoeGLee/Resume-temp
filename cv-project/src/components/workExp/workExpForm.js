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
                jobDescription:'', 
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
                jobDescription: document.getElementById("jobDescription").value,
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
        
    }// uses filter method to separate the workExpInfoArr into two different arrays than sets workExpInfo.edit to true and merges two arrays

    addEdited = (e) =>{

        e.preventDefault();
        
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

        holder[0].position = document.getElementById("position").value;
        holder[0].company = document.getElementById("company").value;
        holder[0].location = document.getElementById("location").value;
        holder[0].datesWorked = document.getElementById("datesWorked").value;
        holder[0].key = e.target.id;
        holder[0].edit = false;
        tempArr.splice(index,0 , holder[0]);
        
        this.setState({
            workExpInfoArr: tempArr
        })
        

    }


    render(){

        const workExpForm = <form className = "workExpForm" onChange={this.onFormChange}>
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
                                
                                <button onClick={this.addInfo}>add</button>
                        </form>

        if(this.props.togglePreview === true){
            return(
                 <WorkExpDisplay togglePreview={this.props.togglePreview} workExpInfoArr={this.state.workExpInfoArr} addEdited={this.addEdited} deleteButton={this.delete} editButton={this.edit}/>
            )
        }


        else if(this.state.workExpInfoArr.length === 0){
            return(
                <div className="workFromDisplay">
                    <h1 className="workExpTitle">Work Experience</h1>
                   {workExpForm}
                </div>
            )
        }

 

        else{ 
                return(
            <div>
                <WorkExpDisplay workExpInfoArr={this.state.workExpInfoArr} addEdited={this.addEdited} deleteButton={this.delete} editButton={this.edit}/>
                {workExpForm}
            </div>
            )
        }
          
 
        //logic should be in display
    }


}

export default WorkExpForm;
import React, {Component} from "react";
import uniqid from "uniqid";
import EducationDisplay from "./educationDisplay";

class EducationForm extends Component{
    constructor(props){
        super(props);

        this.state = {
            educationInfo:{
                school: '',
                degree: '',
                GPA: '',
                date: '',
                key: uniqid(),
                edit: false,
            },
            educationInfoArr : [],
        }
    }

    onFormChange = () =>{
        this.setState({
            educationInfo:{
                school: document.getElementById("school").value,
                degree: document.getElementById("degree").value,
                GPA: document.getElementById("GPA").value,
                date: document.getElementById("date").value,
                key: this.state.educationInfo.key,
                edit: false,
            },
        })

    }// takes info when the form changes and updates the educationInfo state

    addInfo = (e) =>{
        e.preventDefault();

        this.setState({
            educationInfoArr: this.state.educationInfoArr.concat(this.state.educationInfo),

            educationInfo:{
                school: '',
                degree: '',
                GPA: '',
                date: '',
                key: uniqid(),
                edit: true,
            },

        })   
      
    }// adds educationInfo to an array

    delete = (e) =>{
        this.setState({
            educationInfoArr: this.state.educationInfoArr.filter((educationInfo)=>{
                return(
                    educationInfo.key !== e.target.id
                )
            }),
        }) 
    }//filters through array and sets educationInfoArr with new array that does not unique key of the deleted object

    edit = (e) =>{

       const tempArr = this.state.educationInfoArr.filter((educationInfo)=>{
            return(
                educationInfo.key !== e.target.id
            );
        })

        const holder = this.state.educationInfoArr.filter((educationInfo)=>{
            return(
                educationInfo.key === e.target.id
            );
        })

        const index = this.state.educationInfoArr.findIndex(educationInfo => educationInfo.key === holder[0].key);

        holder[0].edit = true;

        tempArr.splice(index,0 , holder[0]);
        
        this.setState({
            educationInfoArr: tempArr
        })
    }// uses filter method to separate the educationInfoArr into two different arrays than sets educationInfo.edit to true and merges two arrays

    addEdited = (e) =>{

        e.preventDefault();
        
        const tempArr = this.state.educationInfoArr.filter((educationInfo)=>{
            return(
                educationInfo.key !== e.target.id
            );
        })

        const holder = this.state.educationInfoArr.filter((educationInfo)=>{
            return(
                educationInfo.key === e.target.id
            );
        })

        const index = this.state.educationInfoArr.findIndex(educationInfo => educationInfo.key === holder[0].key);

        holder[0].school = document.getElementById("school").value;
        holder[0].degree = document.getElementById("degree").value;
        holder[0].GPA = document.getElementById("GPA").value;
        holder[0].date = document.getElementById("date").value;
        holder[0].key = e.target.id;
        holder[0].edit = false;
        tempArr.splice(index,0 , holder[0]);
        
        this.setState({
            educationInfoArr: tempArr
        })
    }


    render(){

        const educationForm = <form className = "educationForm" onChange={this.onFormChange}>
                                <label htmlFor="school">School: </label>
                                <input type="text" id="school"/>
                                <label htmlFor="degree">Degree: </label>
                                <input type="text" id="degree"/>
                                <label htmlFor="GPA">GPA: </label>
                                <input type="text" id="GPA"/>
                                <label htmlFor="date">Years at School: </label>
                                <input type="text" id="date"/>
                                <button onClick={this.addInfo}>add</button>
                        </form>

        if(this.props.togglePreview === true){
            return(
                <EducationDisplay togglePreview={this.props.togglePreview} educationInfoArr={this.state.educationInfoArr} addEdited={this.addEdited} deleteButton={this.delete} editButton={this.edit}/>
            )
        }

        else if(this.state.educationInfoArr.length === 0){
            return(
                <div>
                   {educationForm}
                </div>
            )
        }

 

        else{ 
                return(
            <div>
                <EducationDisplay educationInfoArr={this.state.educationInfoArr} addEdited={this.addEdited} deleteButton={this.delete} editButton={this.edit}/>
                {educationForm}
            </div>
            )
        }
          
 
        //logic should be in display
    }


}

export default EducationForm;
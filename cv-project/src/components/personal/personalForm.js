import React, {Component} from "react";
import PersonalDisplay from "./personalDisplay";


class PersonalForm extends Component{
    constructor(props){
        super(props)
        this.state = {
            personalInfo: {
            name:'',
            address: '',
            email: '',
            phoneNumber: '',
            edit: true,
            }
           
        }
    }

    addInfo = (e)=>{
        e.preventDefault();
        this.setState({
            personalInfo:{
            name: document.getElementById('name').value,
            address: document.getElementById('address').value,
            email: document.getElementById('email').value,
            phoneNumber: document.getElementById('phoneNumber').value,
            edit: false,
            }
        })

    }//take info from form and sets state elements within object personalInfo to values of input

    onEditChange = ()=>{
       if(this.state.personalInfo.edit === false){
        this.setState({
            personalInfo:{
                edit: true,
            }
        })
       }
       else{
        this.setState({
            personalInfo:{
                edit: true,
            }
        })
       }
    }



    render(){


        if(this.props.togglePreview === true){
            return(
                <PersonalDisplay info={this.state.personalInfo}/>
            )
           
        }

        else if(this.state.personalInfo.edit === true){
        return(
            <div className="personal">
                <form  className="personalForm">
                    <label htmlFor="name">Name: </label>
                    <input type="text" id="name"/>
                    <label htmlFor="address">Address: </label>
                    <input type="text" id="address"/>
                    <label htmlFor="email">Email: </label>
                    <input type="email" id="email"/>
                    <label htmlFor="phoneNumber">Phone Number: </label>
                    <input type="number" id="phoneNumber"/>
                    <button onClick={this.addInfo}>add</button>
                </form>
            </div>  
        )
        }//if edit is true renders the form onto page


        else{
            return(
            <div>
                <PersonalDisplay info={this.state.personalInfo}/>
                <button onClick={this.onEditChange}>edit</button> 
            </div>
            )
           
        }//if edit is false renders information display onto page
                
    }
}

export default PersonalForm;
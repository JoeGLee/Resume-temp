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
                    <input type="text" id="name" placeholder="Name" onClick={this.onInputClicked}/>
                    <input type="text" id="address" placeholder="Address" onClick={this.onInputClicked}/>
                    <input type="email" id="email" placeholder="Email" onClick={this.onInputClicked}/>
                    <input type="tel" id="phoneNumber" placeholder="Phone Number" onClick={this.onInputClicked}/>
                    <button className="personalAddButton" onClick={this.addInfo}>Add</button>
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
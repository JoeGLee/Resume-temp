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

    addInfo = (e) =>{
        e.preventDefault();
        this.setState({
            workExpInfo:{
                position: document.getElementById("position").value,
                company: document.getElementById("company").value,
                location: document.getElementById("location").value,
                datesWorked: document.getElementById("datesWorked").value,
                key: this.state.workExpInfo.key,
                edit: false,
            },

            workExpInfoArr: this.state.workExpInfoArr.concat(this.state.workExpInfo),

            workExpInfo:{
                position: '',
                company: '',
                location: '',
                datesWorked: '',
                key: uniqid(),
                edit: true,
            },//this might be causing the react array to get a zero so change it tomorrow

        })

        console.log(this.state.workExpInfoArr);
    }

    render(){
        if(this.state.workExpInfoArr.length === 0){
            return(
                <div>
                    <form className = "workExpForm">
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
                </div>
            )
        }

        else{
            return(
                <div>
                    <WorkExpDisplay workExpInfoArr={this.state.workExpInfoArr} />
                    <form className = "workExpForm">
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
                </div>


            )
        }
    }


}

export default WorkExpForm;
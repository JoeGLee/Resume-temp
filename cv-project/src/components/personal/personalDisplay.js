import React,{Component} from "react";

class PersonalDisplay extends Component{
    constructor(props) {
        super(props);
      }

    render(){
        return(
            <div className="personalInfoDisplay">
                <p className="name">{this.props.info.name}</p>
                <div className="personalNotName">
                    <p className="address"><b>Address: </b>{this.props.info.address}</p>
                    <p className="email"><b>Email: </b>{this.props.info.email}</p>
                    <p className="phoneNum"><b>Number:</b> {this.props.info.phoneNumber}</p>
                </div>
            </div>
        )
    }
}

export default PersonalDisplay;
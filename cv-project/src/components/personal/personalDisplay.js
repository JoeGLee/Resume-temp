import React,{Component} from "react";

class PersonalDisplay extends Component{
    constructor(props) {
        super(props);
      }

    render(){
        return(
            <div>
                <p>{this.props.info.name}</p>
                <p>{this.props.info.address}</p>
                <p>{this.props.info.email}</p>
                <p>{this.props.info.phoneNumber}</p>

            </div>
        )
    }
}

export default PersonalDisplay;
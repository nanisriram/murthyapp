import React from "react";
export default class MyCheckBox extends React.Component{
    constructor(props){
        super(props)
    }
    render() {
        return(
            <div>
                <input type="checkbox" checked={this.props.value} onClick={(e) =>{this.props.onCheckBoxChange(e)}}/>
            </div>
        );
    }
}
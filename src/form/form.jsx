import React from "react";
import MyCheckBox from "./checkbox";
import './form.css';
export default class MyForm extends React.Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            secondName: '',
            color: 'red',
            background: 'white',
            value: true
        }


    }

    render() {
        const onChangeHandle = (e) => {
            if (e.target.name === "firstName") {
                this.setState({ firstName: e.target.value })
            }
            else if (e.target.name === 'secondName') {
                this.setState({ secondName: e.target.value })
            }
        }
      const  onCheckBoxChange  = (e) => {
            this.setState({value: e.target.checked})
        }
        return (
            <div>
                <form>
                    <p className="frm one">First Name</p>
                    <input value={this.state.firstName} name="firstName" onChange={(e) => {
                        onChangeHandle(e);
                    }} type="text" />
                    <p className="frm two" >Second Name</p>
                    <p>dklfnoasrdfose</p>
                    <input value={this.state.secondName} name="secondName" onChange={(f) => {
                        onChangeHandle(f);
                    }} type="text" />
                    <MyCheckBox value={this.state.value} onCheckBoxChange = { (e) => onCheckBoxChange(e)}/>
                    <button style={{ color: this.state.color }} onClick={() => {
                        this.setState({ color: 'pink' })
                    }}
                    >

                        sumbmit
                    </button>
                </form>
            </div>
        );
    }
}
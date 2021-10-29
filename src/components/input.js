import React from "react";

class Input extends React.Component {
    render() {
        return (
            <div>
            <label>{this.props.label}</label>
            <input className={this.props.className} type={this.props.type} name={this.props.name} placeholder={this.props.placeholder}></input>
            </div>
        )
    }
}

export default Input;
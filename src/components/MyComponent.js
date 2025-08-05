import React from "react";

class MyComponent extends React.Component {

    state = {
        name: 'Quốc Huy',
        address: 'HCM',
        age: 21
    };

    handleClick(event) {
        console.log(">>> click me my button")
        console.log("My name is ", this.state.name)
    }

    handleOnMouseOver(event) {
        console.log(event)
    }

    //jsx
    render() {
        return (
            <div>
                My name is {this.state.name} and i'm from {this.state.address}
                <button onClick={this.handleClick}>Click me</button>
                <button onMouseOver={this.handleOnMouseOver}>Hover me</button>
            </div>
        );
    }
}

export default MyComponent
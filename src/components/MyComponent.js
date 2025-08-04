import React from "react";

class MyComponent extends React.Component {

    state = {
        name: 'Quốc Huy',
        address: 'HCM',
        age: 21
    };

    //jsx
    render() {
        return (
            <div>
                My name is {this.state.name} and i'm from {this.state.address}
            </div>
        );
    }
}

export default MyComponent
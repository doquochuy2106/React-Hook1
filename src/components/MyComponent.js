import React from "react";

class MyComponent extends React.Component {

    state = {
        name: 'Quốc Huy',
        address: 'HCM',
        age: 21
    };

    handleClick = (event) => {
        console.log(">>> click me my button")

        //merge State => react class
        this.setState({
            name: "Huy Đỗ",
            age: Math.floor((Math.random() * 100) + 1)
        })


    }

    handleOnMouseOver(event) {
        // console.log(event)

    }

    handleOnChangeInput = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault()
        console.log(this.state)
    }

    //jsx
    render() {
        return (
            <div>
                My name is {this.state.name} and i'm  {this.state.age}
                <form onSubmit={(event) => { this.handleOnSubmit(event) }}>
                    <input
                        type="text"
                        onChange={(event) => { this.handleOnChangeInput(event) }}
                    />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default MyComponent
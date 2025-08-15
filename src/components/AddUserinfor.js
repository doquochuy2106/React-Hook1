import React, { useState } from "react";

// class AddUserInfor extends React.Component {
//     state = {
//         name: '',
//         address: 'HCM',
//         age: ""
//     };

//     handleOnChangeInput = (event) => {
//         this.setState({
//             name: event.target.value
//         })
//     }

//     handleOnChangeAge = (event) => {
//         this.setState({
//             age: event.target.value
//         })
//     }

//     handleOnSubmit = (event) => {
//         event.preventDefault()


//         this.props.handleAddNewUser({
//             id: Math.floor((Math.random() * 100) + 1) + "-random",
//             name: this.state.name,
//             age: this.state.age
//         });
//     }

//     render() {

//         return (
//             <div>My name is {this.state.name} and i'm  {this.state.age}
//                 <form onSubmit={(event) => { this.handleOnSubmit(event) }}>
//                     <label>Your name:</label>
//                     <input
//                         value={this.state.name}
//                         type="text"
//                         onChange={(event) => { this.handleOnChangeInput(event) }}
//                     />

//                     <label>Your age:</label>
//                     <input
//                         value={this.state.age}
//                         type="text"
//                         onChange={(event) => { this.handleOnChangeAge(event) }}
//                     />
//                     <button>Submit</button>
//                 </form></div>
//         );
//     }
// }

const AddUserInfor = (props) => {
    const [User, setUser] = useState(
        {
            name: '',
            address: 'HCM',
            age: ""
        }
    )

    const handleOnChangeInput = (event) => {
        setUser({ name: event.target.value })
    }

    const handleOnChangeAge = (event) => {
        setUser({ age: event.target.value })
    }

    const handleOnSubmit = (event) => {
        event.preventDefault();
        props.handleAddNewUser({
            id: Math.floor((Math.random() * 100) + 1) + "-random",
            name: User.name,
            age: User.age
        });
    }

    return (
        <>

            <div>My name is {User.name} and i'm  {User.age}
                <form onSubmit={(event) => { handleOnSubmit(event) }}>
                    <label>Your name:</label>
                    <input
                        value={User.name}
                        type="text"
                        onChange={(event) => { handleOnChangeInput(event) }}
                    />

                    <label>Your age:</label>
                    <input
                        value={User.age}
                        type="text"
                        onChange={(event) => { handleOnChangeAge(event) }}
                    />
                    <button>Submit</button>
                </form>
            </div>
        </>
    );
}

export default AddUserInfor
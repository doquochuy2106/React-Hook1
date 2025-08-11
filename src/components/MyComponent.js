import React from "react";
import AddUserInfor from "./AddUserinfor";
import Displayinfor from "./Displayinfor";

class MyComponent extends React.Component {

    state = {
        listUsers: [
            { id: 1, name: "doquochuy", age: "16" },
            { id: 2, name: "doquochuy1", age: "22" },
            { id: 3, name: "doquochuy2", age: "69" }
        ]
    }

    handleAddNewUser = (userObjs) => {
        this.setState({
            listUsers: [userObjs, ...this.state.listUsers]
        })
    }


    //jsx
    render() {

        return (
            <div>
                <AddUserInfor handleAddNewUser={this.handleAddNewUser} />
                <br /> <br />
                <Displayinfor
                    listUsers={this.state.listUsers}

                />


            </div>
        );
    }
}

export default MyComponent
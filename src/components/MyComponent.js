import React from "react";
import UserInfor from "./Userinfor";
import Displayinfor from "./Displayinfor";

class MyComponent extends React.Component {

    state = {
        listUsers: [
            { id: 1, name: "doquochuy", age: "21" },
            { id: 2, name: "doquochuy1", age: "22" },
            { id: 3, name: "doquochuy2", age: "23" }
        ]
    }


    //jsx
    render() {

        return (
            <div>
                <UserInfor />
                <br /> <br />
                <Displayinfor listUsers={this.state.listUsers} />
                <hr></hr>

            </div>
        );
    }
}

export default MyComponent
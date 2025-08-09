import React from "react";
import UserInfor from "./Userinfor";
import Displayinfor from "./Displayinfor";

class MyComponent extends React.Component {

    state = {
        listUsers: [
            { id: 1, name: "doquochuy", age: "16" },
            { id: 2, name: "doquochuy1", age: "22" },
            { id: 3, name: "doquochuy2", age: "69" }
        ]
    }


    //jsx
    render() {

        return (
            <div>
                <UserInfor />
                <br /> <br />
                <Displayinfor listUsers={this.state.listUsers} />


            </div>
        );
    }
}

export default MyComponent
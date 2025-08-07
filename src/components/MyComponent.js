import React from "react";
import UserInfor from "./Userinfor";
import Displayinfor from "./Displayinfor";

class MyComponent extends React.Component {



    //jsx
    render() {
        const myInfor = ["ab", "c", "d"]
        return (
            <div>
                <UserInfor />
                <br /> <br />
                <Displayinfor name="doquochuy123" age="25" />
                <hr></hr>
                <Displayinfor name={"huydo"} age={30} myInfor={myInfor} />
            </div>
        );
    }
}

export default MyComponent
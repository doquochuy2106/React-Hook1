import React from "react";
import "./Displayinfor.scss"
import logo from "../logo.svg"

class Displayinfor extends React.Component {

    state = {
        isShowListUser: true
    }


    handleshowhide = () => {
        this.setState({
            isShowListUser: !this.state.isShowListUser
        })
    }

    render() {
        //destructuring array/object
        const { listUsers } = this.props;

        return (
            <div className="display-infor-container">
                <img src={logo} />
                <div>
                    <span onClick={(event) => { this.handleshowhide() }}>
                        {this.state.isShowListUser === true ? "Hide lish users" : "Show list users"}
                    </span>
                </div>
                {this.state.isShowListUser &&
                    <>
                        {listUsers.map((user, index) => {
                            return (
                                <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                                    <div>My name's a {user.name} </div>
                                    <div>My age's a {user.age} </div>
                                    <hr />
                                </div>
                            )
                        })}
                    </>
                }
            </div>
        )
    }
}

export default Displayinfor;
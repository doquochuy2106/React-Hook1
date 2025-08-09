import React from "react";

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
        console.log(listUsers)
        return (
            <div>
                <div>
                    <span onClick={(event) => { this.handleshowhide() }}>
                        {this.state.isShowListUser === true ? "Hide lish users" : "Show list users"}
                    </span>
                </div>
                {this.state.isShowListUser &&
                    <div>
                        {listUsers.map((user, index) => {
                            return (
                                <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                                    <div>My name's a {user.name} </div>
                                    <div>My age's a {user.age} </div>
                                    <hr />
                                </div>
                            )
                        })}
                    </div>
                }
            </div>
        )
    }
}

export default Displayinfor;
import React from "react";
import "./Displayinfor.scss"
import logo from "../logo.svg"

class Displayinfor extends React.Component {
    constructor(props) {
        console.log(">>> call constructor: 1")
        super(props)
        //babel compier
        this.state = {
            isShowListUser: true
        }
    }



    componentDidMount() {
        console.log(">>> call me component did mount")
        setTimeout(() => {
            document.title = 'doquochuy'
        }, 3000)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(">>> call me component did update", this.props, prevProps)
        if (this.props.listUsers !== prevProps.listUsers) {
            if (this.props.listUsers === 5) {
                alert("you got 5 users")
            }
        }
    }

    handleshowhide = () => {
        this.setState({
            isShowListUser: !this.state.isShowListUser
        })
    }

    render() {
        console.log(">>> call me render:")
        //destructuring array/object
        const { listUsers } = this.props;

        return (
            <div className="display-infor-container">

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
                                    <div>
                                        <div>My name's a {user.name} </div>
                                        <div>My age's a {user.age} </div>
                                    </div>
                                    <div>
                                        <button onClick={() => this.props.handleDeleteUser(user.id)}>Delete</button>
                                    </div>

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